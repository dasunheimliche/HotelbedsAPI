import { useEffect, useState } from "react";

export default function useDebounce() {
  const [value, setValue] = useState("");
  const [debounceValue, setDebounceValue] = useState("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebounceValue(value);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [value]);

  return { value, setValue, debounceValue };
}
