import { enableProdMode, importProvidersFrom } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';

import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { PivotGridModule } from '@progress/kendo-angular-pivotgrid';
import { ListBoxModule } from '@progress/kendo-angular-listbox';
import { EditorModule } from '@progress/kendo-angular-editor';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { TooltipsModule } from '@progress/kendo-angular-tooltip';
import { FilterModule } from '@progress/kendo-angular-filter';
import { BarcodesModule } from '@progress/kendo-angular-barcodes';
import { GanttModule } from '@progress/kendo-angular-gantt';
import { TypographyModule } from '@progress/kendo-angular-typography';
// import { ChartsModule } from '@progress/kendo-angular-charts';
// import { GaugesModule } from '@progress/kendo-angular-gauges';
import { IconsModule } from '@progress/kendo-angular-icons';
import { NavigationModule } from '@progress/kendo-angular-navigation';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { LabelModule } from '@progress/kendo-angular-label';
import { provideAnimations } from '@angular/platform-browser/animations';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { InMemoryDataService } from './app/in-memory-data.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
// import { AppRoutingModule } from './app/app-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { NgOptimizedImage } from '@angular/common';

if (environment.production) {
  enableProdMode();
}

import { DashboardComponent }   from 'src/app/dashboard/dashboard.component';
import { HeroesComponent }      from 'src/app/heroes/heroes.component';
import { HeroDetailComponent }  from 'src/app/hero-detail/hero-detail.component';

export const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: "dashboard", component: DashboardComponent, title: "Dashboard"},
  { path: "heroes", component: HeroesComponent, title: "Heroes"},
];

bootstrapApplication(AppComponent, {
    providers: [
        provideRouter(APP_ROUTES),
        importProvidersFrom(NgOptimizedImage, BrowserModule, FormsModule, 
        // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
        // and returns simulated server responses.
        // Remove it when a real server is ready to receive requests.
        HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false, delay: 0 }), InputsModule, LabelModule, ButtonsModule, LayoutModule, 
        // CardModule,
        // TileLayoutModule,
        // ExpansionPanelModule,
        DropDownsModule, IndicatorsModule, NavigationModule, IconsModule, TypographyModule, GanttModule, BarcodesModule, FilterModule, TooltipsModule, DateInputsModule, EditorModule, ListBoxModule, PivotGridModule, NgOptimizedImage,),
        provideHttpClient(withInterceptorsFromDi()),
        provideAnimations()
    ]
})
  .catch(err => console.error(err));
