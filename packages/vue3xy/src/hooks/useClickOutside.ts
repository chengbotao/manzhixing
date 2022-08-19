/*
 * @Author: Chengbotao
 * @Date: 2022-11-24 14:03:27
 */
import { Ref } from 'vue';
import { useEventListener } from './useEventListener';

export function useClickOutside(ref: Ref, handler: (event: MouseEvent) => void) {
  const listener = (event: MouseEvent) => {
    if (!ref.value || ref.value.contains(event.target as HTMLElement)) return;

    handler(event);
  };
  useEventListener(document, 'click', listener);
  return;
}
