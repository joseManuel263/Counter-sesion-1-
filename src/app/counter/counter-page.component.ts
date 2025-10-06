import { Component } from "@angular/core";
import { NavbarComponent } from "../navbar/navbar.component";
import { LocalStorageService } from "../services/local-storage.service";

@Component({
  selector: 'app-counter-page',
  standalone: true,
  template: `
    <app-navbar></app-navbar>

    <div class="container vh-100 d-flex flex-column justify-content-center align-items-center bg-light">
      <div class="text-center mb-4">
        <h1 class="display-2 text-primary">{{ counter() }}</h1>
        <h3 class="text-secondary">Counter Component</h3>
      </div>

      <div class="d-flex gap-3 mb-5">
        <button class="btn btn-success btn-lg" (click)="sumar()">
          <i class="bi bi-plus-lg"></i> Sumar
        </button>
        <button class="btn btn-danger btn-lg" (click)="restar()" [disabled]="counter() === 0">
          <i class="bi bi-dash-lg"></i> Restar
        </button>
      </div>

      <div class="card shadow-lg w-75">
        <div class="card-body">
          <h2 class="mb-4 text-center text-primary">Preguntas y Respuestas <br><br> "LinkedSignal"</h2>

          <h5 class="text-dark mt-3">¿Qué es una señal (signal)?</h5>
          <p class="text-muted">
            Una signal es un valor reactivo que puede cambiar y notificar automáticamente a todos los que dependen de él. 
            Se actualiza con set() o update() y propaga el cambio a cualquier computed o componente que la use.
          </p>

          <h5 class="text-dark mt-3">¿Cómo enlazar señales?</h5>
          <p class="text-muted">
            Se puede enlazar varias partes de la app usando la misma señal o compartiendo su valor mediante propiedades o servicios. 
            Así, cualquier cambio en la señal se refleja en todos los lugares donde se usa.
          </p>

          <h5 class="text-dark mt-3">¿Cómo cargar valores desde LocalStorage?</h5>
          <p class="text-muted">
            Al inicializar un componente (en el constructor o ngOnInit), se puede leer del LocalStorage y asignarlo a la señal, asegurando que la app comience con datos persistentes.
          </p>

          <h5 class="text-dark mt-3">¿Cómo detectar cambios y persistir el valor?</h5>
          <p class="text-muted">
            Se usan mecanismos como effect() o suscripciones internas. Cada vez que la señal cambia, se ejecuta el efecto que guarda automáticamente el valor actualizado en LocalStorage, manteniendo la persistencia.
          </p>
        </div>
      </div>
    </div>
  `,
  imports: [NavbarComponent],
})
export class CounterPageComponent {
  counter;

  constructor(private localStorage: LocalStorageService) {
    this.counter = this.localStorage.linkedSignal<number>('counter', 10);
  }

  sumar() {
    this.counter.update(v => v + 1);
  }

  restar() {
    this.counter.update(v => v - 1);
  }
}
