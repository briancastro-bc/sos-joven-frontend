import { Component, OnInit } from '@angular/core';
import { ThemeService } from '@app/shared/services';

@Component({
  selector: 'app-navbar-desktop',
  templateUrl: './navbar.desktop.component.html',
  styleUrls: ['./navbar.desktop.component.scss']
})
export class NavbarDesktopComponent {
  constructor(
    public theme: ThemeService
  ) {}

}