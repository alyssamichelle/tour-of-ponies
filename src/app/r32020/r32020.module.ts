import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListViewComponent } from './list-view/list-view.component'; import { ListViewModule } from '@progress/kendo-angular-listview';
import { RouterModule } from '@angular/router';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { InputsModule } from '@progress/kendo-angular-inputs';

@NgModule({
  declarations: [ListViewComponent],
  imports: [
    CommonModule,
    RouterModule,
    ButtonsModule,
    InputsModule,
    ListViewModule
  ],
  exports: [
    ListViewComponent
  ]
})
export class R32020Module { }
