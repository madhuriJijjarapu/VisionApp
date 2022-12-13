import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkuscanComponent } from './skuscan.component';

describe('SkuscanComponent', () => {
  let component: SkuscanComponent;
  let fixture: ComponentFixture<SkuscanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkuscanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkuscanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
