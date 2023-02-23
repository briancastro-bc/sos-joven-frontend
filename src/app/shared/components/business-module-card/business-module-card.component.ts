import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-business-module-card',
  templateUrl: './business-module-card.component.html',
  styleUrls: ['./business-module-card.component.scss']
})
export class BusinessModuleCardComponent {
  @Input() title: string = "";
  @Input() content: string | string[] = "";
}
