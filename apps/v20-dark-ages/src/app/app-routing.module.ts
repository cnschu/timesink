import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { V20DaCharacterComponent } from '@timesink/feature-v20-character-display';

const routes: Routes = [{ path: 'demo', component: V20DaCharacterComponent }];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
