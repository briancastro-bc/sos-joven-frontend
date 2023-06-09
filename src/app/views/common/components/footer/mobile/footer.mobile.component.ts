/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { AfterViewInit, Component, ElementRef, QueryList, Renderer2, ViewChildren, ViewEncapsulation } from '@angular/core';

import { RouteService } from '@shared/services';

interface Link {
  span: string;
  route: string;
  routeActive: string;
  external?: boolean;
  icon: {
    type: string;
    name: string;
    animation?: string;
  };
}

@Component({
  selector: 'app-footer-mobile',
  templateUrl: './footer.mobile.component.html',
  styleUrls: ['./footer.mobile.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class FooterMobileComponent implements AfterViewInit {

  @ViewChildren('link') private linksElements!: QueryList<ElementRef<HTMLAnchorElement>>;

  links: Link[];

  constructor(
    private readonly renderer2: Renderer2,
    private readonly routeService: RouteService,
  ) {
    this.links = [
      {
        span: 'layout.footer.mobile.us',
        route: 'us',
        routeActive: 'link__active',
        icon: {
          type: 'regular',
          name: 'globe',
        }
      },
      {
        span: 'layout.footer.mobile.services',
        route: 'services',
        routeActive: 'link__active',
        icon: {
          type: 'regular',
          name: 'grid-alt',
        }
      },
      {
        span: 'layout.footer.mobile.saionline',
        route: 'saionline',
        external: true,
        routeActive: 'saioline__active',
        icon: {
          type: 'regular',
          name: 'wifi',
          animation: 'tada'
        }
      },
      {
        span: 'layout.footer.mobile.products',
        route: 'products',
        routeActive: 'link__active',
        icon: {
          type: 'regular',
          name: 'package',
        }
      },
      {
        span: 'layout.footer.mobile.contact',
        route: 'contact',
        routeActive: 'link__active',
        icon: {
          type: 'regular',
          name: 'phone',
        }
      },
    ];
  }

  ngAfterViewInit(): void {
    this.linksElements.forEach((link: ElementRef<HTMLAnchorElement>, index: number) => {

      const boxIcon = this.renderer2.createElement('box-icon') as HTMLElement;

      this.renderer2.addClass(boxIcon, 'footer-mobile__wrapper--link__container__icon');
      this.renderer2.setAttribute(boxIcon, 'type', this.links[index].icon.type);
      this.renderer2.setAttribute(boxIcon, 'name', this.links[index].icon.name);

      if (typeof this.links[index].icon.animation !== 'undefined') {
        this.renderer2.setAttribute(boxIcon, 'animation', this.links[index].icon.animation!);
      }

      this.renderer2.appendChild(link.nativeElement.children[0], boxIcon);
    });
  }

  secureRedirection(redirect: string): void {
    this.routeService.secureRedirection(redirect);
  }
}
