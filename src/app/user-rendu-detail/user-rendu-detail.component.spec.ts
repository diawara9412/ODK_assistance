import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRenduDetailComponent } from './user-rendu-detail.component';

describe('UserRenduDetailComponent', () => {
  let component: UserRenduDetailComponent;
  let fixture: ComponentFixture<UserRenduDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRenduDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRenduDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
