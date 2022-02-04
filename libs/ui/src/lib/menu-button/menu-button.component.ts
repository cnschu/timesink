import { Component, Input } from '@angular/core';
import { MenuButton } from '../menu-button';

@Component({
  selector: 'timesink-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.scss'],
})
export class MenuButtonComponent {
  @Input()
  content: MenuButton = { name: '', entries: [] };
}
