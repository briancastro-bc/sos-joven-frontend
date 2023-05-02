import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsDesktopComponent } from './products.desktop.component';

describe('ProductsDesktopComponent', () => {
  let component: ProductsDesktopComponent;
  let fixture: ComponentFixture<ProductsDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsDesktopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
