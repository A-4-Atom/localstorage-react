import { useEffect, useState, useDebugValue } from "react";


type UseLocalStorageHook<T> = [T, (value: T | ((prev: T) => T)) => void];

function useLocalStorage<T>(key: string, initialValue: T): UseLocalStorageHook<T> {
  const [value, setValue] = useState<T>(() => {
    try{
      const existingValue = localStorage.getItem(key);
      return existingValue ? JSON.parse(existingValue) : initialValue;
    }catch(error){
      console.error("Error reading localStorage item", error)
      return initialValue;
    }
  })

  useEffect(() => {
    try{
      const existingValue = localStorage.getItem(key);
        setValue(existingValue ? JSON.parse(existingValue) : initialValue);
    }catch(error){
      console.error("Error reading localStorage item", error)
      setValue(initialValue);
    }
  }, [key, initialValue])

  useEffect(() => {
    try{
      localStorage.setItem(key, JSON.stringify(value));
    }catch(error){
      console.error("Error writing to localStorage", error)
    }
  }, [key, value])

  useDebugValue(`${key}: ${JSON.stringify(value)}`);

  return [value, setValue];
}

export default useLocalStorage;
