import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { V20DaCharacterComponent } from './v20-da-character/v20-da-character.component';

@NgModule({
  imports: [CommonModule, MatFormFieldModule, MatInputModule],
  declarations: [V20DaCharacterComponent],
  exports: [V20DaCharacterComponent],
})
export class FeatureV20CharacterDisplayModule {}
