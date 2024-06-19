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
    this.heroService.addHero({ name } as Pony)
      .subscribe(hero => {
        // this.heroes.push(hero);
        this.heroes.splice(0, 0, hero); // adds the name into the beginning of the array
        this.heroes = this.heroes.slice(); // sets the array to a copy of itself
        this.count.update((value) => value + 1);
        // Apparently, unless you're looping through it, Angular's change detection only notices changes to the array reference itself, not the items within it. So any place where you're simply passing the heroes variable along to something and not looping through it in that something, that copy of the array doesn't get updated. — Z
        // Note: You might also want/need to do this in the ListViewComponent as well, not sure if that's supposed to be doing the same thing and/or has the same issue. — Z
        // Another Note: Because I'm sure you'll ask, I googled "angular array binding not updating" and the very first result was a SO post where someone was having the same issue you were seeing. Left the tab open. The accepted answer also says something about it being fixed in a later version of Angular, but that was years ago and obviously it's still not working, sooooo /shrug.  — Z
      });
  }

  delete(hero: Pony): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
    this.count.update((value) => value - 1);
  }

  // getAvatarLink(heroId): string {
  //   let avatarLink = '../assets/mlp-avatars/pony-' + heroId + '.png';

  //   // assign a random number between 21 - 53
  //   if (heroId > 10) {
  //     let randomNumber = Math.floor(Math.random() * 32) + 21;
  //     avatarLink = '../assets/mlp-avatars/pony-' + randomNumber + '.png';
  //   }

  //   return avatarLink;
  // }


}
