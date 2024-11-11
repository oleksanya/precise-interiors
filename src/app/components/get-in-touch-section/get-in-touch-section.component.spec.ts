import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetInTouchSectionComponent } from './get-in-touch-section.component';

describe('GetInTouchSectionComponent', () => {
  let component: GetInTouchSectionComponent;
  let fixture: ComponentFixture<GetInTouchSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetInTouchSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GetInTouchSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
