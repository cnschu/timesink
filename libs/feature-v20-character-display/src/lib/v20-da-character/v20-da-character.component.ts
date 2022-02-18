import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { V20DaCharacter } from '@timesink/feature-v20-types';
import { V20DaCharacterService } from './service/v20-da-character.service';

@Component({
  selector: 'timesink-v20-da-character',
  templateUrl: './v20-da-character.component.html',
  styleUrls: ['./v20-da-character.component.scss'],
})
export class V20DaCharacterComponent implements OnInit {
  character: V20DaCharacter | undefined;

  constructor(
    private route: ActivatedRoute,
    private charService: V20DaCharacterService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const surname = params.get('surname');
      const name = params.get('name');

      if (surname !== null && name !== null) {
        this.character = this.charService.getCharacterByName(name, surname);
      } else {
        this.character = undefined;
      }
    });
  }
}
