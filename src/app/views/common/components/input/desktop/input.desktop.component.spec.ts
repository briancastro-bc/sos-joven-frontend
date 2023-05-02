import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDesktopComponent } from './input.desktop.component';

describe('InputDesktopComponent', () => {
  let component: InputDesktopComponent;
  let fixture: ComponentFixture<InputDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputDesktopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
