import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UserDetailsComponent } from './user-details.component';

describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ UserDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    component.user = { routerLink: '',
      fullName: 'Test Test',
      email: 'tst@email.com',
      status:  'Active',
      resendInvite: true
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show warning Title when there is warning title', () => {
    component.warningTitle = 'Test Warning Title';
    fixture.detectChanges();
    const title = fixture.nativeElement.querySelector('.govuk-warning-text__text');
    expect(title.textContent).toContain('Test Warning Title');
  });

  it('should show reinvite button as user.resendInvite is true', () => {
    component.user.resendInvite = true;
    fixture.detectChanges();
    const resend = fixture.nativeElement.querySelector('#resend-invite-button');
    expect(resend).toBeTruthy();
  });

  it('should call reinviteClick when the button clicked', async(() => {
    component.user.resendInvite = true;
    spyOn(component, 'reinviteClick');
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('#resend-invite-button');
    button.click();
    fixture.whenStable().then(() => {
      expect(component.reinviteClick).toHaveBeenCalled();
    });
  }));

  it('should show suspend user button when showSuspendUserButton is true', () => {
    component.showSuspendUserButton = true;
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('button')).toBeTruthy();
  });

  it('should call suspendUser when the button clicked', async(() => {
    component.showSuspendUserButton = true;
    spyOn(component, 'suspendUser');
    fixture.detectChanges();
    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    fixture.whenStable().then(() => {
      expect(component.suspendUser).toHaveBeenCalled();
    });
  }));
});
