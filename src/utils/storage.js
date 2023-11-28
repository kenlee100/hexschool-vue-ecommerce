export const defineStorage = (key) => {
  return {
    get() {
      return localStorage.getItem(key);
    },
    set(data) {
      return localStorage.setItem(key, data);
    },
    remove() {
      return localStorage.removeItem(key);
    },
  };
};
