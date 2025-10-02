import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { Character } from '../interface/character.model';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [],
  templateUrl: './character-list.component.html',
  //explicacion de esta linea
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterListComponent {
  @Input({ required: true }) characters: Character[] = [];
}
