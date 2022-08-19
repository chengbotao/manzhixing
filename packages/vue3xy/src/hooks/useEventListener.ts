/*
 * @Author: Chengbotao
 * @Date: 2022-11-24 14:03:53
 */
import { onMounted, onUnmounted } from 'vue';
export function useEventListener<K extends keyof DocumentEventMap>(
  target: Document,
  event: K,
  callback: (event: DocumentEventMap[K]) => void,
  options?: boolean | AddEventListenerOptions
) {
  onMounted(() => target.addEventListener(event, callback, options));
  onUnmounted(() => target.removeEventListener(event, callback, options));
}
