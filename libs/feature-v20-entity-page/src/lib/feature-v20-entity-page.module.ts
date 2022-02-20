import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { V20EntityPageComponent } from './v20-entity-page/v20-entity-page.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [CommonModule, MatFormFieldModule, MatInputModule],
  declarations: [V20EntityPageComponent],
  exports: [V20EntityPageComponent],
})
export class FeatureV20EntityPageModule {}
