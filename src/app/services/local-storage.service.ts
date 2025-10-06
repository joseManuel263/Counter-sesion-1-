import { Injectable, signal, effect, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getItem<T>(key: string): T | null {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) as T : null;
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  clear(): void {
    localStorage.clear();
  }

  linkedSignal<T>(key: string, initialValue: T): WritableSignal<T> {
    const stored = this.getItem<T>(key);
    const startValue = stored ?? initialValue;

    const sig = signal<T>(startValue);

    effect(() => {
      this.setItem(key, sig());
    });

    return sig;
  }
}
