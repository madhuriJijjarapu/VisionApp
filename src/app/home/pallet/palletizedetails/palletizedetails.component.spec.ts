import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalletizedetailsComponent } from './palletizedetails.component';

describe('PalletizedetailsComponent', () => {
  let component: PalletizedetailsComponent;
  let fixture: ComponentFixture<PalletizedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PalletizedetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PalletizedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
