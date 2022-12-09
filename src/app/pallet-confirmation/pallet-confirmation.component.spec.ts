import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalletConfirmationComponent } from './pallet-confirmation.component';

describe('PalletConfirmationComponent', () => {
  let component: PalletConfirmationComponent;
  let fixture: ComponentFixture<PalletConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PalletConfirmationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PalletConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
