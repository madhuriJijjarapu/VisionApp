import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalletizeDetailsComponent } from './palletize-details.component';

describe('PalletizeDetailsComponent', () => {
  let component: PalletizeDetailsComponent;
  let fixture: ComponentFixture<PalletizeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PalletizeDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PalletizeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
