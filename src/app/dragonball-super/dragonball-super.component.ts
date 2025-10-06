import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { CharacterListComponent } from '../character-list/character-list.component';
import { CharacterAddComponent } from '../character-add/character-add.component';
import { Character } from '../interface/character.model';
import { LocalStorageService } from '../services/local-storage.service';
import { WritableSignal } from '@angular/core';

@Component({
  selector: 'app-dragonball-super',
  standalone: true,
  imports: [CharacterListComponent, CharacterAddComponent],
  templateUrl: './dragonball-super.component.html',
  styleUrls: ['./dragonball-super.component.scss']
})
export class DragonballSuperComponent {

  name!: WritableSignal<string>;
  power!: WritableSignal<number>;
  characters!: WritableSignal<Character[]>;

  constructor(private localStorage: LocalStorageService) {
    this.name = this.localStorage.linkedSignal<string>('superCharName', '');
    this.power = this.localStorage.linkedSignal<number>('superCharPower', 0);

    this.characters = this.localStorage.linkedSignal<Character[]>('superCharacters', [
      { id: 1, name: 'Goku', power: 9001 },
      { id: 2, name: 'Vegeta', power: 8001 },
      { id: 3, name: 'Krillin', power: 1001 },
      { id: 4, name: 'Yamcha', power: 500 },
      { id: 5, name: 'Gohan', power: 2001 },
      { id: 6, name: 'Piccolo', power: 3000 },
      { id: 7, name: 'Trunks', power: 2500 },
      { id: 8, name: 'Frieza', power: 7000 },
      { id: 9, name: 'Cell', power: 6000 },
      { id: 10, name: 'Majin Buu', power: 4000 },
      { id: 11, name: 'Broly', power: 10000 }
    ]);
  }

  addCharacter(character: { name: string; power: number }) {
    const newId = this.characters().length
      ? Math.max(...this.characters().map(c => c.id)) + 1
      : 1;

    const newCharacter: Character = {
      id: newId,
      name: character.name,
      power: character.power
    };

    this.characters.update(chars => [...chars, newCharacter]);
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
