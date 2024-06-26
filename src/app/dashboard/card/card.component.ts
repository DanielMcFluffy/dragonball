import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { Character } from '../../shared/models/character';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatMenuModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() card!: Character;
}
