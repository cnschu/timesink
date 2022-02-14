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
  journalButton: MenuButton;
  spotifyButton: MenuButton;
  expHistoryButton: MenuButton;
  impressumButton: MenuButton;

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

    this.journalButton = {
      label: 'Journal',
      entries: [{ label: 'Tagebuch', route: '/journal' }],
    };

    this.expHistoryButton = {
      label: 'Erfahrungspunkte',
      entries: [{ label: 'Erfahrungspunkte', route: '/exp-history' }],
    };

    this.spotifyButton = {
      label: 'Spotify-Playlist',
      entries: [{ label: 'Spotify-Playlist', route: '/spotify-playlist' }],
    };

    this.impressumButton = {
      label: 'Impressum',
      entries: [{ label: 'Impressum', route: '/impressum' }],
    };

    this.menuButtons.push(
      this.characterButton,
      this.journalButton,
      this.expHistoryButton,
      this.spotifyButton,
      this.impressumButton
    );
  }
}
