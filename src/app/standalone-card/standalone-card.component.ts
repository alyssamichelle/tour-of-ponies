import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from '../hero';

@Component({
  selector: 'standalone-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './standalone-card.component.html',
  styleUrls: ['./standalone-card.component.css']
})
export class StandaloneCardComponent {
  @Input() hero: Hero;

}
