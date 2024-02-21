import { Component } from '@angular/core';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  get isLogged(): boolean {
    return this.authService.isLogged;
  }

  constructor(private authService: AuthService) { }
}
