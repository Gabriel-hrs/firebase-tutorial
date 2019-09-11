import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthEmailPasswordComponent } from './auth-email-password.component';

describe('AuthEmailPasswordComponent', () => {
  let component: AuthEmailPasswordComponent;
  let fixture: ComponentFixture<AuthEmailPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthEmailPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthEmailPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
