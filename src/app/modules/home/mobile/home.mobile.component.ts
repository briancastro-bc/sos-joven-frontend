import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home-mobile',
  templateUrl: './home.mobile.component.html',
  styleUrls: ['./home.mobile.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class HomeMobileComponent implements OnInit {

  ngOnInit(): void {
    console.log("hello world!");
  }
}
