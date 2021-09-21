import { Component, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'tile-layout',
  templateUrl: './tile-layout.component.html',
  styleUrls: ['./tile-layout.component.scss'],
})
export class TileLayoutComponent {
  @Input() public heroes: Hero[];
}
