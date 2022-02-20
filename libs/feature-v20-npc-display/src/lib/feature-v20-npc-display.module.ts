import { NgModule } from '@angular/core';
import { FeatureV20EntityPageModule } from '@timesink/feature-v20-entity-page';
import { V20DaNpcComponent } from './v20-da-npc/v20-da-npc.component';

@NgModule({
  imports: [FeatureV20EntityPageModule],
  declarations: [V20DaNpcComponent],
})
export class FeatureV20NpcDisplayModule {}
