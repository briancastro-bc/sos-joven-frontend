import {
  Component,
  ViewEncapsulation
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  standalone: true,
  imports: [
    RouterLink,
    TranslateModule,
  ],
  providers: [
    TranslateService,
  ],
})
export default class PageNotFoundComponent {}
