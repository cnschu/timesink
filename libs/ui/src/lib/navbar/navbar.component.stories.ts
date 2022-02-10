import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { MenuButtonComponent } from '../menu-button/menu-button.component';
import { NavbarComponent } from './navbar.component';

export default {
  title: 'NavbarComponent',
  component: NavbarComponent,
  decorators: [
    moduleMetadata({
      declarations: [MenuButtonComponent, NavbarComponent],
      imports: [
        CommonModule,
        MatIconModule,
        MatToolbarModule,
        MatMenuModule,
        MatButtonModule,
        BrowserAnimationsModule,
      ],
    }),
  ],
} as Meta<NavbarComponent>;

const Template: Story<NavbarComponent> = (args: NavbarComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  title: 'Test App',
  menuButtons: [
    { label: 'Test', entries: ['test 1', 'test 2', 'test 3'], type: 'primary' },
  ],
};

export const Secondary = Template.bind({});
Secondary.args = {
  title: 'Test App',
  menuButtons: [
    {
      label: 'Test',
      entries: ['test 1', 'test 2', 'test 3'],
      type: 'accent',
    },
  ],
};

export const Warn = Template.bind({});
Warn.args = {
  title: 'Test App',
  menuButtons: [
    {
      label: 'Test',
      entries: ['test 1', 'test 2', 'test 3'],
      type: 'warn',
    },
  ],
};

export const Combined = Template.bind({});
Combined.args = {
  title: 'Test App',
  menuButtons: [
    {
      label: 'Primary Button',
      entries: ['test 1', 'test 2', 'test 3'],
      type: 'primary',
    },
    {
      label: 'Secondary Button',
      entries: ['test 4', 'test 5', 'test 6'],
      type: 'accent',
    },
  ],
};
