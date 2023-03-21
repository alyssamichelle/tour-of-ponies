import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location, NgIf, NgFor } from '@angular/common';

import { Hero }         from '../hero';
import { HeroService }  from '../hero.service';
import { EditorModule } from '@progress/kendo-angular-editor';
import { FormsModule } from '@angular/forms';
import { SkeletonModule } from '@progress/kendo-angular-indicators';

@Component({
    selector: 'app-hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.scss'],
    standalone: true,
    imports: [NgIf, SkeletonModule, FormsModule, NgFor, EditorModule]
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

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
    const id = +this.route.snapshot.paramMap.get('id');
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
