import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.getHeroes();
  }

  // backend sorted out heros from ponies, no longer need to filter on fe
  // make a second call for heros, 
  // getHeroes(): void {
  //   this.heroService.getHeroes()
  //     .subscribe(heroes => {
  //       this.heroes = heroes.filter((hero) => !!hero.largeAvatar)
  //     });
  // }
}
