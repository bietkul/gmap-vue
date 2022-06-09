import type { InjectionKey } from 'vue';

export const $map = Symbol() as InjectionKey<
  google.maps.Map | undefined
>;
export const $mapPromise = Symbol() as InjectionKey<
  Promise<google.maps.Map | undefined>
>;