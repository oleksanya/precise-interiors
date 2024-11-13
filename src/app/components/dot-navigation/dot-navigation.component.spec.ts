import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotNavigationComponent } from './dot-navigation.component';

describe('DotNavigationComponent', () => {
  let component: DotNavigationComponent;
  let fixture: ComponentFixture<DotNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DotNavigationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DotNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
