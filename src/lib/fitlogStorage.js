
const PLAN_KEY = "fitlog-plan";
const SAVED_KEY = "fitlog-saved";

export function getStoredList(key) {
  if (typeof window === "undefined") return [];

  try {
    const data = JSON.parse(localStorage.getItem(key) || "[]");
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

export function saveStoredList(key, items) {
  if (typeof window === "undefined") return;

  localStorage.setItem(key, JSON.stringify(items));

  // Notify other components in this browser tab.
  window.dispatchEvent(new Event("fitlog-storage-change"));
}

export function getPlan() {
  return getStoredList(PLAN_KEY);
}

export function getSaved() {
  return getStoredList(SAVED_KEY);
}

export function addToPlan(workout) {
  const plan = getPlan();

  if (plan.some((item) => String(item.id) === String(workout.id))) {
    return plan;
  }

  const updated = [
    ...plan,
    { ...workout, completed: false },
  ];

  saveStoredList(PLAN_KEY, updated);
  return updated;
}

export function toggleSaved(workout) {
  const saved = getSaved();

  const exists = saved.some(
    (item) => String(item.id) === String(workout.id)
  );

  const updated = exists
    ? saved.filter((item) => String(item.id) !== String(workout.id))
    : [...saved, workout];

  saveStoredList(SAVED_KEY, updated);
  return updated;
}

export function removeFromPlan(id) {
  const updated = getPlan().filter(
    (item) => String(item.id) !== String(id)
  );

  saveStoredList(PLAN_KEY, updated);
  return updated;
}

export function toggleCompleted(id) {
  const updated = getPlan().map((item) =>
    String(item.id) === String(id)
      ? { ...item, completed: !item.completed }
      : item
  );

  saveStoredList(PLAN_KEY, updated);
  return updated;
}
