import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalletorboxlogComponent } from './palletorboxlog.component';

describe('PalletorboxlogComponent', () => {
  let component: PalletorboxlogComponent;
  let fixture: ComponentFixture<PalletorboxlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PalletorboxlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PalletorboxlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
