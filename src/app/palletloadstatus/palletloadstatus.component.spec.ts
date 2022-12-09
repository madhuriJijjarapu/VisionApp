import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalletloadstatusComponent } from './palletloadstatus.component';

describe('PalletloadstatusComponent', () => {
  let component: PalletloadstatusComponent;
  let fixture: ComponentFixture<PalletloadstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PalletloadstatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PalletloadstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
