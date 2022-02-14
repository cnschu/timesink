import { Component } from '@angular/core';
import {
  V20DaCharacter,
  V20DaCharacterServiceService,
} from '@timesink/feature-v20-character-display';
import { MenuButton } from '@timesink/ui';

@Component({
  selector: 'timesink-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'v20-dark-ages';

  characters: V20DaCharacter[];
  characterButton: MenuButton;
  menuButtons: MenuButton[] = [];

  constructor(private charService: V20DaCharacterServiceService) {
    this.characters = this.charService.getCharacters();

    this.characterButton = {
      label: 'Charaktere',
      entries: this.characters.map((character) => {
        return {
          label: `${character.name} ${character.surname}`,
          route: '/character',
          params: [character.surname, character.name],
        };
      }),
    };

    this.menuButtons.push(this.characterButton);
  }
}
