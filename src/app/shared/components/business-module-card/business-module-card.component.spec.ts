import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessModuleCardComponent } from './business-module-card.component';

describe('BusinessModuleCardComponent', () => {
  let component: BusinessModuleCardComponent;
  let fixture: ComponentFixture<BusinessModuleCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessModuleCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessModuleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
