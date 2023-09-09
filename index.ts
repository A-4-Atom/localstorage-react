import { useEffect, useState, useCallback, useDebugValue } from "react";


type UseLocalStorageHook<T> = [T, (value: T) => void];

function useLocalStorage<T>(
  key: string,
  initialValue: T = "" as T
): UseLocalStorageHook<T> {
  const [value, setValue] = useState<T>(() => {
    const existingValue = localStorage.getItem(key);
    return existingValue ? JSON.parse(existingValue) : initialValue;
  });

  const setValueCallback = useCallback(
   (newValue: T) => {
      setValue(newValue);
    },
    [setValue]
  );

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error)
    }
  }, [key, value]);

  useDebugValue(value ?? 'loading...')

  return [value, setValueCallback];
}

export default useLocalStorage;
