import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './../../navbar/navbar.component';
import { DragonballPageComponent } from '../../dragonball-page/dragonball-page.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent, DragonballPageComponent],
  templateUrl: './hero-page.component.html',
  styleUrls: ['./hero-page.component.scss']
})
export class HeroPageComponent {
    name = signal<string>('Ironman');
    age = signal<number>(45);

    heroDescription = computed(() => {
      const description = `${this.name()} - ${this.age()}`;
      return description;
    });

    getCapitalizedName(): string {
        return this.name().toUpperCase();
    }

    getHeroDescription(): string {
        return `${this.name()} - ${this.age()}`;
    }

    changeHero(): void {
        this.name.set('Spiderman');
        this.age.set(22);
    }

    changeAge(): void {
        this.age.set(60);
    }

    resetForm(): void {
        this.name.set('Ironman');
        this.age.set(45);
    }
}