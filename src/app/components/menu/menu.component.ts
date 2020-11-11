import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../theme/theme.service';
import {TokenStorageService} from '../../services/token-storage.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  title = 'businessCase';
  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;
  constructor(public themeService: ThemeService, private tokenStorageService: TokenStorageService) {}
    toggle() {
      if (this.themeService.isDarkTheme()) {
        this.themeService.setLightTheme();
      } else {
        this.themeService.setDarkTheme();
      }
    }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.username = user.username;
    }
  }

  openNav() {
    document.getElementById('mySidebar').style.width = '18.5rem';
    document.getElementById('main').style.marginLeft = '0';
  }
  closeNav() {
    document.getElementById('mySidebar').style.width = '.7rem';
    document.getElementById('main').style.marginLeft = '0';
  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

}

