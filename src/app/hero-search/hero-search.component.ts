import { Component, OnInit } from '@angular/core';

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
  styleUrls: [ './hero-search.component.scss' ]
})
export class HeroSearchComponent implements OnInit {
  heroes$: Observable<Hero[]>;

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

  public contacts: Contact[] = contacts;

  public getContactImageUrl(contactId: string): string {
    return `https://www.telerik.com/kendo-angular-ui-develop/components/dropdowns/assets/contacts/${contactId}.jpg`;
  }
}
