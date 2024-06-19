import { Component, Input } from '@angular/core';
import { Pony } from '../pony';

@Component({
  selector: 'tile-layout',
  templateUrl: './tile-layout.component.html',
  styleUrls: ['./tile-layout.component.scss'],
})
export class TileLayoutComponent {
  @Input() public heroes: Pony[];
}
