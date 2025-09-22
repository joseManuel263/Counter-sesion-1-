import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.scss'
})
export class UsuarioComponent {
  nombre: string = 'José';
  edad: number = 21;

  // inputs temporales
  nuevoNombre: string = '';
  nuevaEdad: number = 0;
  nuevoNombreCapitalizado: string = '';

  // variables de control
  modalNombreAbierto = false;
  modalEdadAbierto = false;
  modalResetAbierto = false;

  get nombreCapitalizado(): string {
    return this.nombre.toUpperCase();
  }

  // abrir modales
  abrirModalNombre() {
    this.nuevoNombre = this.nombre;
    this.modalNombreAbierto = true;
  }

  abrirModalEdad() {
    this.nuevaEdad = this.edad;
    this.modalEdadAbierto = true;
  }

  abrirModalReset() {
    this.nuevoNombreCapitalizado = this.nombreCapitalizado;
    this.modalResetAbierto = true;
  }

  // guardar cambios
  guardarNombre() {
    if (this.nuevoNombre.trim() !== '') {
      this.nombre = this.nuevoNombre;
    }
    this.modalNombreAbierto = false;
  }

  guardarEdad() {
    if (this.nuevaEdad > 0) {
      this.edad = this.nuevaEdad;
    }
    this.modalEdadAbierto = false;
  }

  guardarReset() {
    if (this.nuevoNombreCapitalizado.trim() !== '') {
      this.nombre = this.nuevoNombreCapitalizado;
    }
    this.modalResetAbierto = false;
  }
}
