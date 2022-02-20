import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { V20DaExpHistoryComponent } from './v20-da-exp-history/v20-da-exp-history.component';
import { UiModule } from '@timesink/ui';

@NgModule({
  imports: [CommonModule, UiModule],
  declarations: [V20DaExpHistoryComponent],
})
export class FeatureV20ExpHistoryModule {}
