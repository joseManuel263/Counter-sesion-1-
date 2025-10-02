import { Component, EventEmitter, Output, signal } from '@angular/core';

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

  addCharacter() {
    if (this.name().trim() === '' || this.power() <= 0) return;

    this.characterAdded.emit({
      name: this.name(),
      power: this.power()
    });

    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
