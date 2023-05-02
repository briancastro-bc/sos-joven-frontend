import {
  OnInit,
  Component,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-startup-desktop',
  templateUrl: './startup.desktop.component.html',
  styleUrls: ['./startup.desktop.component.scss'],
  standalone: true,
  encapsulation: ViewEncapsulation.Emulated,
})
export class StartupDesktopComponent implements OnInit {

  ngOnInit(): void {
    throw new Error('not implemented');
  }
}
