import { AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MultiColumnComboBoxComponent } from "@progress/kendo-angular-dropdowns";
import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Router } from '@angular/router';
import { Contact, contacts } from './contact';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: [ './hero-search.component.scss' ],
  encapsulation: ViewEncapsulation.None
})
export class HeroSearchComponent implements OnInit, AfterViewInit {
  @ViewChild("mccbPonies", { static: false })
  public mccbPonies: MultiColumnComboBoxComponent;
  heroes$: Observable<Hero[]>;
  isActive = false;

  constructor(private heroService: HeroService, private router: Router) {}

  // on dropdownlist value change, navigate to that hero's detail page
  public onValueChange(hero: Hero): void {
    if(hero.id) {
      this.router.navigate(['/detail/' + hero.id]);
    }
  }

  ngOnInit(): void {
    this.heroes$ = this.heroService.getHeroes();
  }

  public ngAfterViewInit(): void {
    // For debugging the search box, toggle its state open
    // this.mccbPonies.toggle();
  }

  public contacts: Contact[] = contacts;

  // public getContactImageUrl(contactId: string): string {
  //   return `https://www.telerik.com/kendo-angular-ui-develop/components/dropdowns/assets/contacts/${contactId}.jpg`;
  // }

    // set up for playing with angular animations
    //  TODO Alyssa
  public changeState(): void {
    this.isActive = !this.isActive;
  };

  public changeThatState(): void {
    setInterval(function(){
      this.changeState();
    }, 5000);
  }
}
