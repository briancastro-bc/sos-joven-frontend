import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'app-layout',
    template: `
    <app-navbar></app-navbar>

    <main #main>
      <router-outlet></router-outlet>
    </main>
  `
})
export class LayoutComponent {
    @ViewChild('main') mainContent!: ElementRef<HTMLElement>;
}
