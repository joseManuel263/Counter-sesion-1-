import { signal, effect, WritableSignal } from '@angular/core';

export function linkedSignal<T>(key: string, initialValue: T): WritableSignal<T> {
  // Leer del localStorage al inicio
  const stored = localStorage.getItem(key);
  const startValue = stored ? JSON.parse(stored) as T : initialValue;

  // Crear la señal con el valor inicial
  const sig = signal<T>(startValue);

  // Efecto para guardar cada vez que cambie
  effect(() => {
    const value = sig();
    localStorage.setItem(key, JSON.stringify(value));
  });

  return sig;
}
