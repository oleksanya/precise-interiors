import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessSliderComponent } from './process-slider.component';

describe('ProcessSliderComponent', () => {
  let component: ProcessSliderComponent;
  let fixture: ComponentFixture<ProcessSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProcessSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
