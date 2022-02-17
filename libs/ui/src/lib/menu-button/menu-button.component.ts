import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MenuButtonEntry } from '../menu-button';

@Component({
  selector: 'timesink-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.scss'],
})
export class MenuButtonComponent {
  @Input() label = 'Button';
  @Input() entries: MenuButtonEntry[] = [{ label: '', route: '' }];
  @Input() type: 'primary' | 'accent' | 'warn' = 'primary';
  @Input() isMobile = false;

  constructor(private router: Router) {}

  menuButtonClick(route: string | undefined, params: string[] | undefined) {
    if (!route) return;

    if (!params) {
      this.router.navigateByUrl(`/${route}`);
    } else {
      this.router.navigate([`/${route}`, ...params]);
    }
  }
}
