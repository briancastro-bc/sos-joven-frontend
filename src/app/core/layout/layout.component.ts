import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `
    <!-- NAVBAR HERE -->

    <main>
      <router-outlet></router-outlet>
    </main>
  `
})
export class LayoutComponent {

}
