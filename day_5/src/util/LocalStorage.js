function getLocalStorage(key) {
  const data = localStorage.getItem(key);
  if (data) return JSON.parse(data);
  return [];
}

function setLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export { getLocalStorage, setLocalStorage };
