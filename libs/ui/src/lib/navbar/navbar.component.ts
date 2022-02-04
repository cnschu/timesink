import { Component, Input } from '@angular/core';
import { MenuButton } from '../menu-button';

@Component({
  selector: 'timesink-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Input()
  title = '';

  @Input()
  menuButtons: MenuButton[] = [];
}
