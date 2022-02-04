import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MenuButtonComponent } from './menu-button/menu-button.component';

@NgModule({
  imports: [CommonModule, MatIconModule, MatToolbarModule, MatMenuModule],
  declarations: [NavbarComponent, MenuButtonComponent],
  exports: [NavbarComponent, MatIconModule, MenuButtonComponent],
})
export class UiModule {}
