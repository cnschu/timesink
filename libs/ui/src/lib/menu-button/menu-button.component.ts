import { Component, Input } from '@angular/core';

@Component({
  selector: 'timesink-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.scss'],
})
export class MenuButtonComponent {
  @Input() label = 'Button';
  @Input() entries = [''];
  @Input() type: 'primary' | 'accent' | 'warn' = 'primary';
}
