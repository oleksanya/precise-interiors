import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinTheTeamPageComponent } from './join-the-team-page.component';

describe('JoinTheTeamPageComponent', () => {
  let component: JoinTheTeamPageComponent;
  let fixture: ComponentFixture<JoinTheTeamPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JoinTheTeamPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoinTheTeamPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
