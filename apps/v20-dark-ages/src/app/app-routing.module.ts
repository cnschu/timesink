import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { V20DaCharacterComponent } from '@timesink/feature-v20-character-display';
import { V20DaExpHistoryComponent } from '@timesink/feature-v20-exp-history';
import { V20DaHomeComponent } from '@timesink/feature-v20-home';
import { V20DaImpressumComponent } from '@timesink/feature-v20-impressum';
import { V20DaJournalComponent } from '@timesink/feature-v20-journal';

const routes: Routes = [
  {
    path: 'character/:surname/:name',
    component: V20DaCharacterComponent,
  },
  { path: 'journal', component: V20DaJournalComponent },
  { path: 'exp-history', component: V20DaExpHistoryComponent },
  {
    path: 'impressum',
    component: V20DaImpressumComponent,
  },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: V20DaHomeComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
