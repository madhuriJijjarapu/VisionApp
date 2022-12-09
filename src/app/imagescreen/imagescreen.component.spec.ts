import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagescreenComponent } from './imagescreen.component';

describe('ImagescreenComponent', () => {
  let component: ImagescreenComponent;
  let fixture: ComponentFixture<ImagescreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagescreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagescreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
