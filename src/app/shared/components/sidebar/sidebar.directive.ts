import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appSidebarHost]',
})
export class SidebarDirective {

  constructor(
    public readonly viewContainerRef: ViewContainerRef
  ) { }

}
