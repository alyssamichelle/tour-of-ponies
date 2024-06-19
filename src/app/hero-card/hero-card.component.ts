import { Component, Input } from '@angular/core';
import { Pony } from '../pony';

@Component({
  selector: 'hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css'],
})
export class HeroCardComponent {
  @Input() hero: Pony;

}
