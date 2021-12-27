import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css', '../../../assets/styles/form.css'],
})
export class SignUpPageComponent implements OnInit {
  inputSize: number = 40;
  errorMessage: string = '';
  signedUp: boolean = false;
  signUpFailed: boolean = false;
  signUpForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(20),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
    birthday: new FormControl('', [
      Validators.required,
    ]),
    gender: new FormControl('', [
      Validators.required,
    ]),
  });

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  get username() { return this.signUpForm.get('username'); }
  get email() { return this.signUpForm.get('email'); }
  get password() { return this.signUpForm.get('password'); }
  get birthday() { return this.signUpForm.get('birthday'); }
  get gender() { return this.signUpForm.get('gender'); }

  onSubmit(): void {
    if (this.signUpForm.invalid) {
      return;
    }

    const signUpFormValues = this.signUpForm.value;

    this.userService.addUser(
      signUpFormValues.username,
      signUpFormValues.email,
      signUpFormValues.password,
      signUpFormValues.gender,
      signUpFormValues.birthday,
    ).subscribe({
      next: () => {
        this.signedUp = true;
        this.signUpFailed = false;
        this.signUpForm.reset();
      },
      error: (error) => {
        // get error message from server
        this.errorMessage = error.error.error;
        this.signUpFailed = true;
      },
    });
  }
}
