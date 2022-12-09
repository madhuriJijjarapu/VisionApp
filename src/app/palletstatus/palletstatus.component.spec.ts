import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalletstatusComponent } from './palletstatus.component';

describe('PalletstatusComponent', () => {
  let component: PalletstatusComponent;
  let fixture: ComponentFixture<PalletstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PalletstatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PalletstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
