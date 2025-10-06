import { Component, EventEmitter, Output, signal } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-character-add',
  standalone: true,
  imports: [],
  templateUrl: './character-add.component.html',
  styleUrls: ['./character-add.component.css']
})
export class CharacterAddComponent {

  name = signal('');
  power = signal(0);

  @Output() characterAdded = new EventEmitter<{ name: string; power: number }>();

  constructor(private localStorage: LocalStorageService) {}

  addCharacter() {
    if (this.name().trim() === '' || this.power() <= 0) return;

    const newCharacter = {
      name: this.name(),
      power: this.power()
    };

    this.characterAdded.emit(newCharacter);

    const characters = this.localStorage.getItem<{ name: string; power: number }[]>('characters') || [];
    characters.push(newCharacter);
    this.localStorage.setItem('characters', characters);

    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
