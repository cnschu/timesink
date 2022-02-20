import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { V20DaRuleInfoComponent } from './v20-da-rule-info/v20-da-rule-info.component';
import { UiModule } from '@timesink/ui';

@NgModule({
  imports: [CommonModule, UiModule],
  declarations: [V20DaRuleInfoComponent],
})
export class FeatureV20RuleInfoModule {}
