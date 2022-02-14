import { Injectable } from '@angular/core';
import { V20DaCharacter } from '../types/v20-da-character';

@Injectable({
  providedIn: 'root',
})
export class V20DaCharacterServiceService {
  characters: V20DaCharacter[];

  constructor() {
    this.characters = [
      {
        name: 'Karl Friedrich',
        surname: 'von Klöden',
        clan: 'Ventrue',
        imageSrc: '/assets/karl_friedrich.png',
      },
      {
        name: 'Lucretia',
        surname: 'Borgione',
        clan: 'Malkavianerin',
        imageSrc: '/assets/lucretia.jpg',
      },
      {
        name: 'Veronika',
        surname: 'Wanninger',
        clan: 'Toreador',
        imageSrc: '/assets/veronika_wanninger.jpg',
      },
      {
        name: 'Ulrich',
        surname: '',
        clan: 'Tremere',
        imageSrc: '/assets/ulrich.jpg',
      },
    ];
  }

  getCharacters(): V20DaCharacter[] {
    return this.characters;
  }

  getCharacterByName(
    name: string,
    surname: string
  ): V20DaCharacter | undefined {
    return this.characters.find(
      (character: V20DaCharacter) =>
        character.name === name && character.surname === surname
    );
  }
}
