import { Component, OnInit, ViewEncapsulation, WritableSignal, signal } from '@angular/core';
import { Pony } from '../pony';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit {
  heroes: Pony[] = [];
  // count: WritableSignal<number> = signal(0);

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => {
        this.heroes = heroes.filter((hero) => !!hero.largeAvatar)
        // this.count.set(heroes.length)
      });
  }
}
