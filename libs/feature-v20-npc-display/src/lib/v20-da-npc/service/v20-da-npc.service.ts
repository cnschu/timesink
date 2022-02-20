import { Injectable } from '@angular/core';
import { V20DaCharacter } from '@timesink/feature-v20-types';

@Injectable({
  providedIn: 'root',
})
export class V20DaNpcService {
  npcs: V20DaCharacter[];

  constructor() {
    this.npcs = [
      {
        name: 'Gotzon',
        surname: '',
        clan: 'Lasombra',
        imageSrc: undefined,
        apparentAge: undefined,
      },
      {
        name: 'Nashwa',
        surname: 'bint Mukhtar',
        clan: 'Gangrel',
        imageSrc: undefined,
        apparentAge: 19,
      },
      {
        name: 'Mansuara',
        surname: 'Vermudez',
        clan: 'Lasombra',
        imageSrc: undefined,
        apparentAge: 25,
      },
    ];
  }

  getNPCs(): V20DaCharacter[] {
    return this.npcs;
  }

  getNPCByName(name: string, surname: string): V20DaCharacter | undefined {
    return this.npcs.find(
      (character: V20DaCharacter) =>
        character.name === name && character.surname === surname
    );
  }
}
