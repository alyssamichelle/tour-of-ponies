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

  get avatar(): string {
    return 'HELLOOOOOOOOOOOOO0';
    let avatarLink = 'assets/mlp-avatars/pony-' + this.id + '.png';

    // assign a random number between 21 - 53
    if (this.id > 10) {
      let randomNumber = Math.floor(Math.random() * 32) + 21;
      avatarLink = 'assets/mlp-avatars/pony-' + randomNumber + '.png';
    }

    return avatarLink;
  }
}