import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  get isLogged(): boolean {
    return this.authService.isLogged;
  }

  constructor(
    public authService: AuthService,
    private router: Router
  ) {}

  handleLogOut(): void {
    this.authService.logOut().subscribe(() => this.router.navigate(['/user/login']))
  }
}
