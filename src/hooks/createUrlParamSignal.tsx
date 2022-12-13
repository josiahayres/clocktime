import { createSignal, Signal } from "solid-js";

import { useSearchParams } from "@solidjs/router";

export function createUrlParamSignal<T>(
  key: string,
  defaultValue: T
): Signal<T> {
  const [searchParams, setSearchParams] = useSearchParams();

  const storedInit = searchParams[key] || localStorage.getItem(key);
  const initialValue =
    storedInit && storedInit !== null
      ? (JSON.parse(storedInit) as T)
      : defaultValue;

  const [value, setValue] = createSignal<T>(initialValue);

  const setValueAndStore = ((arg) => {
    const v = setValue(arg);
    const value = JSON.stringify(v);
    localStorage.setItem(key, value);
    setSearchParams({ ...searchParams, [key]: value });
    return v;
  }) as typeof setValue;

  return [value, setValueAndStore];
}
