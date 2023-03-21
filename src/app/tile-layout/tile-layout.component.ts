import { Component, Input } from '@angular/core';
import { Hero } from '../hero';
import { EllipsisPipe } from '../pipes/ellipsis.pipe';
import { NgFor } from '@angular/common';
import { TileLayoutModule, CardModule } from '@progress/kendo-angular-layout';

@Component({
    selector: 'tile-layout',
    templateUrl: './tile-layout.component.html',
    styleUrls: ['./tile-layout.component.scss'],
    standalone: true,
    imports: [TileLayoutModule, NgFor, CardModule, EllipsisPipe]
})
export class TileLayoutComponent {
  @Input() public heroes: Hero[];
}
