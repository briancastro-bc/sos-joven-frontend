import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaionlineComponent } from './saionline.component';

describe('SaionlineComponent', () => {
  let component: SaionlineComponent;
  let fixture: ComponentFixture<SaionlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaionlineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaionlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
