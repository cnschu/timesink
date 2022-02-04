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
    name: 'test',
    entries: ['entry A', 'entry B', 'entry C', 'entry D'],
  };

  menuButtonB: MenuButton = {
    name: 'hello world 2',
    entries: ['entry E', 'entry F', 'entry G', 'entry H', 'entry I'],
  };

  menuButtons: MenuButton[] = [this.menuButton, this.menuButtonB];
}
