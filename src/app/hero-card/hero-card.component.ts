import { Component, Input } from '@angular/core';
import { Hero } from '../hero';
import { EllipsisPipe } from '../pipes/ellipsis.pipe';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CardModule } from '@progress/kendo-angular-layout';

@Component({
    selector: 'hero-card',
    templateUrl: './hero-card.component.html',
    styleUrls: ['./hero-card.component.css'],
    standalone: true,
    imports: [CardModule, RouterLink, NgIf, EllipsisPipe]
})
export class HeroCardComponent {
  @Input() hero: Hero;

}
