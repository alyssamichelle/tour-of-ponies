import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListViewComponent } from './list-view/list-view.component'; import { ListViewModule } from '@progress/kendo-angular-listview';
import { RouterModule } from '@angular/router';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { FormsModule } from '@angular/forms';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';

@NgModule({
  declarations: [ListViewComponent],
  imports: [
    CommonModule,
    RouterModule,
    ButtonsModule,
    FormsModule,
    InputsModule,
    IndicatorsModule,
    ListViewModule
  ],
  exports: [
    ListViewComponent
  ]
})
export class R32020Module { }
