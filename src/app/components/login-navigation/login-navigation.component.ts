import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../services/token-storage.service';

@Component({
  selector: 'app-login-navigation',
  templateUrl: './login-navigation.component.html',
  styleUrls: ['./login-navigation.component.css', '../../../assets/styles/navigation.css'],
})
export class LoginNavigationComponent implements OnInit {
  username: string | null = null;
  loggedIn: boolean = false;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.username = this.tokenStorageService.getUser();
    if (this.username) {
      this.loggedIn = true;
    }
  }

  logout() {
    this.tokenStorageService.logOut();
    window.location.reload();
  }
}
