import { Component } from '@angular/core';
import { MenuButton } from '@timesink/ui';

@Component({
  selector: 'timesink-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'v20-dark-ages';

  menuButton: MenuButton = {
    label: 'test',
    entries: ['entry A', 'entry B', 'entry C', 'entry D'],
  };

  menuButtonB: MenuButton = {
    label: 'hello world 2',
    entries: ['entry E', 'entry F', 'entry G', 'entry H', 'entry I'],
    type: 'accent',
  };

  menuButtons: MenuButton[] = [this.menuButton, this.menuButtonB];
}
