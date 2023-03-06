import { Component, OnInit } from '@angular/core';
import { ThemeService, ThemeType } from '@app/shared/services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar-desktop',
  templateUrl: './navbar.desktop.component.html',
  styleUrls: ['./navbar.desktop.component.scss']
})
export class NavbarDesktopComponent {
  readonly currentTheme$: Observable<ThemeType> = this.themeService.theme$;

  constructor(
    public themeService: ThemeService
  ) {}
 
  ngOnInit()  {
    
  }
}