import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoWeHaveWorkedWithComponent } from './who-we-have-worked-with.component';

describe('WhoWeHaveWorkedWithComponent', () => {
  let component: WhoWeHaveWorkedWithComponent;
  let fixture: ComponentFixture<WhoWeHaveWorkedWithComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhoWeHaveWorkedWithComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WhoWeHaveWorkedWithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
