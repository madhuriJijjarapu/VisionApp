import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalletorBoxlogComponent } from './palletor-boxlog.component';

describe('PalletorBoxlogComponent', () => {
  let component: PalletorBoxlogComponent;
  let fixture: ComponentFixture<PalletorBoxlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PalletorBoxlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PalletorBoxlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
