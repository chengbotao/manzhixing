/*
 * @Author: Chengbotao
 * @Date: 2022-11-23 23:46:07
 */
import { RefObject, useEffect } from 'react';

function useClickOutside(ref: RefObject<HTMLElement>, handler: (event: MouseEvent) => void) {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target as HTMLElement)) return;

      handler(event);
    };
    document.addEventListener('click', listener);
    return () => {
      document.removeEventListener('click', listener);
    };
  }, [ref, handler]);
}

export default useClickOutside;
