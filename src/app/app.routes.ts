import { Routes } from '@angular/router';
import { CounterPageComponent } from './counter/counter-page.component';
import { UsuarioComponent } from './usuario/usuario.component';
export const routes: Routes = [
  {
    path: '',
    component: CounterPageComponent,
  },
  {
    path: 'usuario',
    component: UsuarioComponent
  }
  ,
];
