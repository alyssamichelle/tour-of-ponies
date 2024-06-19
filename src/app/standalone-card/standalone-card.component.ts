import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pony } from '../pony';

import { LayoutModule } from '@progress/kendo-angular-layout';
import { AppRoutingModule } from '../app-routing.module';
import { EllipsisPipe } from '../pipes/ellipsis.pipe';

@Component({
  selector: 'standalone-card',
  standalone: true,
  imports: [CommonModule, LayoutModule, AppRoutingModule, EllipsisPipe],
  templateUrl: './standalone-card.component.html',
  styleUrls: ['./standalone-card.component.css']
})
export class StandaloneCardComponent {
  @Input() hero: Pony;
}
