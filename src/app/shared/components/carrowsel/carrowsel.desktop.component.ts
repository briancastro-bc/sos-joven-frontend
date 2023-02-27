import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, Input, ViewChild } from '@angular/core';
import { CarrowselInterface } from '@app/common/interfaces/carrowsel.interface';

@Component({
  selector: 'app-carrowsel-desktop',
  templateUrl: './carrowsel.desktop.component.html',
  styleUrls: ['./carrowsel.desktop.component.scss']
})
export class CarrowselDesktopComponent {

  @Input() images!: CarrowselInterface[]
  @Input() velocity!: number
  @ViewChild('slideTrak', { static: true }) slideTrak!: ElementRef

  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
  ) { }

  ngOnInit(): void {
    this.document.documentElement.style.setProperty('--carrousel-velocity', `${this.velocity}ms`)
    this.document.documentElement.style.setProperty('--carrousel-lenght', `${this.images.length}`)
  }
}
