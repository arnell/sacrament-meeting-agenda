import { useState } from 'react';

function useLocalStorage<T>(key: string, defaultValue: T) {
  const [localStorageValue, setLocalStorageValue] = useState(() => {
    try {
      const value = localStorage.getItem(key);
      if (value) {
        return JSON.parse(value);
      }
    } catch {
      /* empty */
    }
    return defaultValue;
  });

  const setLocalStorageStateValue = (
    valueOrFn: ((prev: object) => object) | object
  ) => {
    let newValue;
    if (typeof valueOrFn === 'function') {
      newValue = valueOrFn(localStorageValue);
    } else {
      newValue = valueOrFn;
    }
    localStorage.setItem(key, JSON.stringify(newValue));
    setLocalStorageValue(newValue);
  };
  return [localStorageValue, setLocalStorageStateValue];
}

export default useLocalStorage;
