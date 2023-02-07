import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';

import { DisplaySidebarService } from '@shared/services';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class SidebarComponent implements OnInit {

  @ViewChild('sidebar') sidebarEl!: ElementRef<HTMLElement>;

  subscription!: Subscription;

  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
    private readonly renderer2: Renderer2,
    private readonly displaySidebarService: DisplaySidebarService,
  ) {}

  ngOnInit(): void {
    // this.displaySidebarService.isDisplayedSidebar$.subscribe(isDisplayed => {
    //   console.log('isDisplayed', isDisplayed);
    // });
  }

  displaySidebar(): void {
    this.displaySidebarService.display();
  }
}
