export class Pony {
  // id: number;
  id: string;
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
  isHero?: boolean;

  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.alias = data.alias;
    this.url = data.url;
    this.sex = data.sex;
    this.residence = data.residence;
    this.occupation = data.occupation;
    this.kind = data.kind;
    this.images = data.images;
    this.largeAvatar = data.largeAvatar;
    this.isHero = data.isHero;
    this.avatar = this.getAvatar();
  }

  getAvatar() {
    if (this.isHero) {
      const filename = this.name.toLowerCase().replace(' ', '-');
      return `../assets/mlp-avatars/${filename}.png`;
    } else {
      const x = Math.ceil(Math.random() * 60);
      return `../assets/mlp-avatars/pony-${x}.png`;
    }
  }
}