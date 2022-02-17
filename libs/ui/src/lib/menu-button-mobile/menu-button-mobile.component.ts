import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuButton, MenuButtonEntry } from '../menu-button';

@Component({
  selector: 'timesink-menu-button-mobile',
  templateUrl: './menu-button-mobile.component.html',
  styleUrls: ['./menu-button-mobile.component.scss'],
})
export class MenuButtonMobileComponent implements OnInit {
  @Input() menuButtons: MenuButton[] = [];

  entries: MenuButtonEntry[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.menuButtons.forEach((button: MenuButton) => {
      if (button.entries.length > 1) {
        this.entries.push({ label: button.label, route: undefined });
      }

      this.entries.push(...button.entries);

      if (button.entries.length > 1) {
        this.entries.push({ label: '' });
      }
    });
  }

  menuButtonClick(route: string | undefined, params: string[] | undefined) {
    if (!route) return;

    if (!params) {
      this.router.navigateByUrl(`/${route}`);
    } else {
      this.router.navigate([`/${route}`, ...params]);
    }
  }
}
