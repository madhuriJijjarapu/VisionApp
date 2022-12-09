import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalletpackComponent } from './palletpack.component';

describe('PalletpackComponent', () => {
  let component: PalletpackComponent;
  let fixture: ComponentFixture<PalletpackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PalletpackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PalletpackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
