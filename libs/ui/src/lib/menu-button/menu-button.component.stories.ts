import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { MenuButtonComponent } from './menu-button.component';

export default {
  title: 'MenuButtonComponent',
  component: MenuButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        MatIconModule,
        MatMenuModule,
        MatButtonModule,
        BrowserAnimationsModule,
      ],
    }),
  ],
} as Meta<MenuButtonComponent>;

const Template: Story<MenuButtonComponent> = (args: MenuButtonComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
  entries: ['test'],
  type: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  type: 'accent',
  entries: ['test'],
};

export const Warn = Template.bind({});
Warn.args = {
  label: 'Button',
  type: 'warn',
  entries: ['test'],
};
