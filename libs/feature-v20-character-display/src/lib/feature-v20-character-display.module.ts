import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { V20DaCharacterComponent } from './v20-da-character/v20-da-character.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    V20DaCharacterComponent
  ],
  exports: [
    V20DaCharacterComponent
  ],
})
export class FeatureV20CharacterDisplayModule {}
