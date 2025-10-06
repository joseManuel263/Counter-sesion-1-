import { Component, signal, computed, WritableSignal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './../navbar/navbar.component';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent],
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent {

  nombre!: WritableSignal<string>;
  edad!: WritableSignal<number>;

  nuevoNombre = signal<string>('');
  nuevaEdad = signal<number>(0);
  nuevoNombreCapitalizado = signal<string>('');

  modalNombreAbierto = signal<boolean>(false);
  modalEdadAbierto = signal<boolean>(false);
  modalResetAbierto = signal<boolean>(false);

  nombreCapitalizado = computed(() => this.nombre().toUpperCase());

  constructor(private localStorage: LocalStorageService) {
    const storedNombre = this.localStorage.getItem<string>('usuarioNombre') ?? 'José';
    const storedEdad = this.localStorage.getItem<number>('usuarioEdad') ?? 21;

    this.nombre = signal<string>(storedNombre);
    this.edad = signal<number>(storedEdad);

    effect(() => {
      this.localStorage.setItem('usuarioNombre', this.nombre());
    });

    effect(() => {
      this.localStorage.setItem('usuarioEdad', this.edad());
    });
  }

  abrirModalNombre() {
    this.nuevoNombre.set(this.nombre());
    this.modalNombreAbierto.set(true);
  }

  abrirModalEdad() {
    this.nuevaEdad.set(this.edad());
    this.modalEdadAbierto.set(true);
  }

  abrirModalReset() {
    this.nuevoNombreCapitalizado.set(this.nombreCapitalizado());
    this.modalResetAbierto.set(true);
  }

  guardarNombre() {
    if (this.nuevoNombre().trim() !== '') {
      this.nombre.set(this.nuevoNombre());
    }
    this.modalNombreAbierto.set(false);
  }

  guardarEdad() {
    if (this.nuevaEdad() > 0) {
      this.edad.set(this.nuevaEdad());
    }
    this.modalEdadAbierto.set(false);
  }

  guardarReset() {
    if (this.nuevoNombreCapitalizado().trim() !== '') {
      this.nombre.set(this.nuevoNombreCapitalizado());
    }
    this.modalResetAbierto.set(false);
  }
}
