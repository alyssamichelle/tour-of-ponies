import { Component, OnInit, WritableSignal, signal } from '@angular/core';

import { Pony } from '../pony';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  count: WritableSignal<number> = signal(0);
  heroes: Pony[];
  avatarLink: string;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getAllPonies()
    .subscribe(heroes => {
      this.heroes = heroes;
      this.count.set(heroes.length);
      console.log(this.heroes);
    });
  }
  
  name: string;
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Pony).subscribe(() => this.getHeroes());
  }

  delete(hero: Pony): void {
    this.heroService.deleteHero(hero).subscribe(() => this.getHeroes());
  }

}
