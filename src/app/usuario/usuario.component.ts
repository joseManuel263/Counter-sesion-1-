import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './../navbar/navbar.component';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent],
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent {
  // datos principales
  nombre = signal<string>('José');
  edad = signal<number>(21);

  // inputs temporales
  nuevoNombre = signal<string>('');
  nuevaEdad = signal<number>(0);
  nuevoNombreCapitalizado = signal<string>('');

  // variables de control (modales)
  modalNombreAbierto = signal<boolean>(false);
  modalEdadAbierto = signal<boolean>(false);
  modalResetAbierto = signal<boolean>(false);

  // getter reactivo
  nombreCapitalizado = computed(() => this.nombre().toUpperCase());

  // abrir modales
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

  // guardar cambios
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
