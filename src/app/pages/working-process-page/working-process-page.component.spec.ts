import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingProcessPageComponent } from './working-process-page.component';

describe('WorkingProcessPageComponent', () => {
  let component: WorkingProcessPageComponent;
  let fixture: ComponentFixture<WorkingProcessPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkingProcessPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkingProcessPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
