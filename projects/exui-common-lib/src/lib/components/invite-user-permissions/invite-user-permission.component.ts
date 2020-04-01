import {Component, Input} from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'xuilib-invite-permission-form',
    templateUrl: './invite-user-permission.component.html',
  })

  export class InviteUserPermissionComponent {
    @Input() inviteUserForm: FormGroup;
    @Input() isPuiCaseManager: boolean = false;
    @Input() isPuiUserManager: boolean = false;
    @Input() isPuiOrganisationManager: boolean = false;
    @Input() isPuiFinanceManager: boolean = false;
    @Input() errorMessages: {isInvalid: boolean; messages: string[] };
  }
