import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MenuButtonComponent } from './menu-button/menu-button.component';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuButtonMobileComponent } from './menu-button-mobile/menu-button-mobile.component';
import { TableComponent } from './table/table.component';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    NavbarComponent,
    MenuButtonComponent,
    MenuButtonMobileComponent,
    TableComponent,
  ],
  exports: [
    NavbarComponent,
    MatIconModule,
    MenuButtonComponent,
    TableComponent,
  ],
})
export class UiModule {}
