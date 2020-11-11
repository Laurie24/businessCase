import {Component, OnInit} from '@angular/core';
import {ThemeService} from './theme/theme.service';
import {TokenStorageService} from './services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'businessCase';
  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  prenom: string;
  constructor(private themeService: ThemeService, private tokenStorageService: TokenStorageService) {}
  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.prenom = user.prenom;
    }
  }
  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
