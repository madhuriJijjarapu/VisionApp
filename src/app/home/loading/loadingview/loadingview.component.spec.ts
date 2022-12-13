import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingviewComponent } from './loadingview.component';

describe('LoadingviewComponent', () => {
  let component: LoadingviewComponent;
  let fixture: ComponentFixture<LoadingviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadingviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
