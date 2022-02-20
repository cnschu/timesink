import { NgModule } from '@angular/core';
import { V20DaCharacterComponent } from './v20-da-character/v20-da-character.component';
import { FeatureV20EntityPageModule } from '@timesink/feature-v20-entity-page';

@NgModule({
  imports: [FeatureV20EntityPageModule],
  declarations: [V20DaCharacterComponent],
  exports: [V20DaCharacterComponent],
})
export class FeatureV20CharacterDisplayModule {}
