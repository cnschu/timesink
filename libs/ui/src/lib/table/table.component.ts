import { Component, Input } from '@angular/core';

@Component({
  selector: 'timesink-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input()
  tableHeaders: string[] = [];

  @Input()
  tableRows: string[][] = [[]];
}
