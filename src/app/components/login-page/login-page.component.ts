import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { TokenStorageService } from '../../services/token-storage.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css', '../../../assets/styles/form.css'],
})
export class LoginPageComponent implements OnInit {
  inputSize: number = 40;
  errorMessage: string = '';
  loggedIn: boolean = false;
  loginFailed: boolean = false;
  loginForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  constructor(
    private userService: UserService,
    private tokenStorageService: TokenStorageService,
  ) { }

  ngOnInit(): void {
    if (this.tokenStorageService.getToken()) {
      this.loggedIn = true;
    }
  }

  get username() { return this.loginForm.get('username'); }
  get password() { return this.loginForm.get('password'); }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }

    const loginFormValues = this.loginForm.value;

    this.userService.login(
      loginFormValues.username,
      loginFormValues.password,
    ).subscribe({
      next: (data) => {
        this.tokenStorageService.setToken(data.accessToken);
        this.tokenStorageService.setUser(data.username);
        this.loginFailed = false;
        this.loggedIn = true;
        window.location.reload();
      },
      error: (error) => {
        // the error message from the server
        this.errorMessage = error.error.message.error;
        this.loginFailed = true;
      },
    });
  }
}
