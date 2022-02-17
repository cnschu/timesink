import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { V20DaJournalComponent } from './v20-da-journal/v20-da-journal.component';

@NgModule({
  imports: [CommonModule, MarkdownModule.forChild()],
  declarations: [V20DaJournalComponent],
})
export class FeatureV20JournalModule {}
