import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrowselDesktopComponent } from './carrowsel.desktop.component';

describe('CarrowselDesktopComponent', () => {
  let component: CarrowselDesktopComponent;
  let fixture: ComponentFixture<CarrowselDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrowselDesktopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrowselDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
