import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Pony }         from '../pony';
import { HeroService }  from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.scss' ],
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Pony;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {
    // this.getHero();
  }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id: string = this.route.snapshot.paramMap.get('id');
    console.log('This is the ID: ' + id);
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }
}
