/*
 * @Author: Chengbotao
 * @Date: 2022-11-23 22:50:47
 */
import { useEffect, useState } from 'react';
function useDebounce<T>(value: T, delay = 300) {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debounceValue;
}

export default useDebounce;
