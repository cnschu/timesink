import { Component } from '@angular/core';
import { V20DaCharacterService } from '@timesink/feature-v20-character-display';
import { V20DaNpcService } from '@timesink/feature-v20-npc-display';
import { V20DaCharacter } from '@timesink/feature-v20-types';
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
  npcs: V20DaCharacter[];
  npcButton: MenuButton;
  rulesInfoButton: MenuButton;
  impressumButton: MenuButton;

  menuButtons: MenuButton[] = [];

  mobile = false;

  constructor(
    private charService: V20DaCharacterService,
    private npcService: V20DaNpcService
  ) {
    this.characters = this.charService.getCharacters();
    this.npcs = this.npcService.getNPCs();

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

    this.npcButton = {
      label: 'NPCs',
      entries: this.npcs.map((npc) => {
        return {
          label: `${npc.name} ${npc.surname}`,
          route: '/npc',
          params: [npc.surname, npc.name],
        };
      }),
    };

    this.rulesInfoButton = {
      label: 'Regel Infos',
      entries: [{ label: 'Regel Infos', route: '/rules-info' }],
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
      this.npcButton,
      this.rulesInfoButton,
      this.impressumButton
    );
  }
}
