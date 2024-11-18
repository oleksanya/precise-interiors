import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastProjectPageComponent } from './past-project-page.component';

describe('PastProjectPageComponent', () => {
  let component: PastProjectPageComponent;
  let fixture: ComponentFixture<PastProjectPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PastProjectPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PastProjectPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
