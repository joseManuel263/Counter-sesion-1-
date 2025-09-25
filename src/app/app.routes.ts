import { Routes } from '@angular/router';
import { CounterPageComponent } from './counter/counter-page.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { HeroPageComponent } from './pages/hero/hero-page.component';
export const routes: Routes = [
  {
    path: '',
    component: CounterPageComponent,
  },
  {
    path: 'usuario',
    component: UsuarioComponent
  },
  {
    path: 'hero',
    component: HeroPageComponent
  }

  ,
];
