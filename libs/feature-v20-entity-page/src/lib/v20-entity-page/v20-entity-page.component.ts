import { Component, Input } from '@angular/core';
import { V20DaCharacter } from '@timesink/feature-v20-character-display';

@Component({
  selector: 'timesink-v20-entity-page',
  templateUrl: './v20-entity-page.component.html',
  styleUrls: ['./v20-entity-page.component.scss'],
})
export class V20EntityPageComponent {
  @Input()
  character: V20DaCharacter | undefined;
}
