export class Hero {
  id: number;
  name: string;
  alias?: string;
  url: string;
  sex: string;
  residence?: string;
  occupation?: string;
  kind: string[];
  images: string[];
  avatar?: string;
  largeAvatar?: string;

  // augment hero data with avatar
//   public getAvatar(heroId): string {
//     let avatarLink = 'assets/mlp-avatars/pony-' + heroId + '.png';

//     // assign a random number between 21 - 53
//     if (heroId > 10) {
//       let randomNumber = Math.floor(Math.random() * 32) + 21;
//       avatarLink = 'assets/mlp-avatars/pony-' + randomNumber + '.png';
//     }

//     return avatarLink;
//   }
}