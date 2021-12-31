import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-settings-page',
  templateUrl: './user-settings-page.component.html',
  styleUrls: ['../../../assets/styles/form.css', './user-settings-page.component.css'],
})
export class UserSettingsPageComponent implements OnInit {
  username: string = '';
  currentEmail: string = '';
  inputSize: number = 40;

  emailErrorMessage: string = '';
  emailUpdated: boolean = false;
  emailUpdateFailed: boolean = false;
  emailForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  passwordErrorMessage: string = '';
  passwordUpdated: boolean = false;
  passwordUpdateFailed: boolean = false;
  passwordForm = new FormGroup({
    newPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
    oldPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.username = params['username'];

      this.userService.getUserEmail(this.username).subscribe((email) => {
        this.currentEmail = email;
      });
    });
  }

  get email() { return this.emailForm.get('email'); }
  get password() { return this.emailForm.get('password'); }
  get newPassword() { return this.passwordForm.get('newPassword'); }
  get oldPassword() { return this.passwordForm.get('oldPassword'); }

  updateEmail(): void {
    if (this.emailForm.invalid) {
      return;
    }

    const signUpFormValues = this.emailForm.value;

    this.userService.updateUserEmail(
      this.username,
      signUpFormValues.email,
      signUpFormValues.password,
    ).subscribe({
      next: () => {
        this.emailUpdated = true;
        this.emailUpdateFailed = false;
        this.emailForm.reset();
      },
      error: (error) => {
        // get error message from server
        this.emailErrorMessage = error.error.error;
        this.emailUpdateFailed = true;
      },
    });
  }

  updatePassword(): void {
    if (this.passwordForm.invalid) {
      return;
    }

    const signUpFormValues = this.passwordForm.value;

    this.userService.updateUserPassword(
      this.username,
      signUpFormValues.newPassword,
      signUpFormValues.oldPassword,
    ).subscribe({
      next: () => {
        this.passwordUpdated = true;
        this.passwordUpdateFailed = false;
        this.passwordForm.reset();
      },
      error: (error) => {
        // get error message from server
        this.passwordErrorMessage = error.error.error;
        this.passwordUpdateFailed = true;
      },
    });
  }
}
