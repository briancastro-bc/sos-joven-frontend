import {
  CommonModule
} from '@angular/common';
import {
  Input,
  inject,
  OnInit,
  OnDestroy,
  QueryList,
  Component,
  Renderer2,
  ElementRef,
  ViewChildren,
  AfterViewInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { ButtonSize, IconPosition } from './types';

@Component({
  selector: 'application-button',
  template: `
    <button role="button" class="button" #button>
      <i *ngIf="icon" class="button__icon bx" #buttonIcon></i>
      <span *ngIf="label" class="button__label">
        {{ label | translate }}
      </span>
    </button>
  `,
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
  ]
})
export class ButtonComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() icon: string | undefined;

  @Input() label: string | undefined;

  @Input() fullWidth: boolean | undefined;

  @Input() size: ButtonSize | undefined = 'medium';

  @Input() iconPosition: IconPosition | undefined = 'left';

  @ViewChildren('button') buttonElement: QueryList<ElementRef<HTMLButtonElement>> | undefined;

  @ViewChildren('buttonIcon') buttonIconElement: QueryList<ElementRef<HTMLElement>> | undefined;

  private readonly renderer2: Renderer2 = inject(Renderer2);

  ngOnInit(): void {
    // Do something;
  }

  ngAfterViewInit(): void {
    this.setupIcon();
    this.setupSize();
    this.setupPadding();
    this.setupIconPosition();
  }

  ngOnDestroy(): void {
    // Do something
  }

  private setupIcon(): void {
    if (!this.icon) return;

    const iconEl = this.buttonIconElement?.first.nativeElement;
    this.renderer2.addClass(iconEl, this.icon!);
  }

  private setupSize(): void {
    const size: string = this.size === 'small' ? 'sm' : this.size === 'large' ? 'lg' : 'md';

    this.renderer2.addClass(this.buttonElement?.first.nativeElement, `button-${size}`);

    if (this.fullWidth) {
      this.renderer2.setStyle(this.buttonElement?.first.nativeElement, 'width', '100%');
    }
  }

  private setupPadding(): void {
    const button = this.buttonElement?.first.nativeElement;

    if (!this.icon) {
      this.renderer2.setStyle(button, 'padding', '0 16px');
      return;
    }

    if (this.icon && !this.label) {
      this.renderer2.setStyle(button, 'padding', '0 16px');
      return;
    }

    this.renderer2.setStyle(button, 'gap', '8px');
    this.renderer2.setStyle(button, 'padding', '0 16px 0 12px');
  }

  private setupIconPosition(): void {
    const button = this.buttonElement?.first.nativeElement;
    this.iconPosition === 'left' ?
      this.renderer2.setStyle(button, 'flex-direction', 'row') :
      this.renderer2.setStyle(button, 'flex-direction', 'row-reverse');
  }
}
