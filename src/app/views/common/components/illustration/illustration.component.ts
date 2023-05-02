/* eslint-disable @typescript-eslint/no-explicit-any */
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-illustration',
  template: `
    <div [innerHTML]="fromSourceIllustration" #illustrationContainer></div>
  `,
  styleUrls: ['./illustration.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [
    CommonModule,
  ]
})
export class IllustrationComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input('style') styleClass!: string;

  @Input('source') illustrationSource!: string;

  @ViewChild('illustrationContainer', { read: ElementRef }) illustrationEl!: ElementRef<HTMLElement>;

  fromSourceIllustration!: any;

  private subscription: Subscription | undefined;

  constructor(
    private readonly http: HttpClient,
    private readonly renderer2: Renderer2,
    private readonly sanitizer: DomSanitizer,
  ) {}

  ngOnInit(): void {
    this.readIllustration();
  }

  ngAfterViewInit(): void {
    if (this.styleClass) {
      this.renderer2.addClass(this.illustrationEl.nativeElement, this.styleClass);
    }
  }

  ngOnDestroy(): void {
    if (typeof this.subscription !== 'undefined') {
      this.subscription.unsubscribe();
    }
  }

  private readIllustration(): void {

    if (!this.illustrationSource) return;

    this.subscription = this.http.get(this.illustrationSource, { responseType: 'text' })
      .subscribe(file => {
        this.fromSourceIllustration = this.sanitizer.bypassSecurityTrustHtml(file);
      });
  }
}
