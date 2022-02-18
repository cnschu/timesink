import { Injectable } from '@angular/core';
import { V20DaCharacter } from '@timesink/feature-v20-types';

@Injectable({
  providedIn: 'root',
})
export class V20DaCharacterService {
  characters: V20DaCharacter[];

  constructor() {
    this.characters = [
      {
        name: 'Karl Friedrich',
        surname: 'von Klöden',
        clan: 'Ventrue',
        imageSrc: '/assets/karl_friedrich.png',
        apparantAge: undefined,
      },
      {
        name: 'Lucretia',
        surname: 'Borgione',
        clan: 'Malkavianerin',
        imageSrc: '/assets/lucretia.jpg',
        apparantAge: 15,
      },
      {
        name: 'Veronika',
        surname: 'Wanninger',
        clan: 'Toreador',
        imageSrc: '/assets/veronika_wanninger.jpg',
        apparantAge: undefined,
      },
      {
        name: 'Ulrich',
        surname: '',
        clan: 'Tremere',
        imageSrc: '/assets/ulrich.jpg',
        apparantAge: undefined,
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
