import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { V20DaCharacter } from '@timesink/feature-v20-types';
import { V20DaNpcService } from './service/v20-da-npc.service';

@Component({
  selector: 'timesink-v20-da-npc',
  templateUrl: './v20-da-npc.component.html',
  styleUrls: ['./v20-da-npc.component.scss'],
})
export class V20DaNpcComponent implements OnInit {
  npcs: V20DaCharacter | undefined;

  constructor(
    private route: ActivatedRoute,
    private npcService: V20DaNpcService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const surname = params.get('surname');
      const name = params.get('name');

      if (surname !== null && name !== null) {
        this.npcs = this.npcService.getNPCByName(name, surname);
      } else {
        this.npcs = undefined;
      }
    });
  }
}
