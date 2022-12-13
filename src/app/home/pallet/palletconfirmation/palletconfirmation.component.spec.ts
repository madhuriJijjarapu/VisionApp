import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalletconfirmationComponent } from './palletconfirmation.component';

describe('PalletconfirmationComponent', () => {
  let component: PalletconfirmationComponent;
  let fixture: ComponentFixture<PalletconfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PalletconfirmationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PalletconfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
