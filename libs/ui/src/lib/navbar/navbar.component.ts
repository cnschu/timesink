import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router: Router) {}

  navigateHome() {
    this.router.navigateByUrl(`/home`);
  }
}
