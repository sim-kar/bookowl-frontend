import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../services/token-storage.service';

@Component({
  selector: 'app-login-navigation',
  templateUrl: './login-navigation.component.html',
  styleUrls: ['./login-navigation.component.css', '../../../assets/styles/navigation.css'],
})

/**
 * The navigation element for the user log in system. Shows links for user log in and sign up if
 * no user is currently logged in, otherwise a dropdown menu with available options for a logged-in
 * user is displayed.
 */
export class LoginNavigationComponent implements OnInit {
  username: string | null = null;
  loggedIn: boolean = false;

  constructor(private tokenStorageService: TokenStorageService) { }

  /** Get the currently logged-in user, if there is one. */
  ngOnInit(): void {
    this.username = this.tokenStorageService.getUser();
    if (this.username) {
      this.loggedIn = true;
    }
  }

  /** Logs out the user. */
  logout() {
    this.tokenStorageService.logOut();
    window.location.reload();
  }
}
