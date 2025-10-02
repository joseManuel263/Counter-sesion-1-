import { Routes } from '@angular/router';
import { CounterPageComponent } from './counter/counter-page.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { HeroPageComponent } from './pages/hero/hero-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DragonballPageComponent } from './dragonball-page/dragonball-page.component';
import { DragonballSuperComponent } from './dragonball-super/dragonball-super.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'usuario',   // 👈 redirige al usuario
    pathMatch: 'full'
  },
  {
    path: 'usuario',
    component: UsuarioComponent
  },
  {
    path: 'counter',
    component: CounterPageComponent
  },
  {
    path: 'hero',
    component: HeroPageComponent
  },
  {
    path: 'dragonball',
    component: DragonballPageComponent
  },
  {
    path: 'dragonball-super',
    component: DragonballSuperComponent
  },
  {
    path: 'navbar',
    component: NavbarComponent
  }
];
