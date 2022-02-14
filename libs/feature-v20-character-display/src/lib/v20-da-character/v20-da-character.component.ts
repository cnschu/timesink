import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { V20DaCharacterServiceService } from './service/v20-da-character-service.service';
import { V20DaCharacter } from './types/v20-da-character';

@Component({
  selector: 'timesink-v20-da-character',
  templateUrl: './v20-da-character.component.html',
  styleUrls: ['./v20-da-character.component.scss'],
})
export class V20DaCharacterComponent implements OnInit {
  character: V20DaCharacter | undefined;

  constructor(
    private route: ActivatedRoute,
    private charService: V20DaCharacterServiceService
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
