import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBriefDetailComponent } from './user-brief-detail.component';

describe('UserBriefDetailComponent', () => {
  let component: UserBriefDetailComponent;
  let fixture: ComponentFixture<UserBriefDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserBriefDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBriefDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
