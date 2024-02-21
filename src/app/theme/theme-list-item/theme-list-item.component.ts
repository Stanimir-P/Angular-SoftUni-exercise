import { Component, Input } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { ITheme } from '../../shared/interfaces';

@Component({
  selector: 'app-theme-list-item',
  templateUrl: './theme-list-item.component.html',
  styleUrl: './theme-list-item.component.css'
})

export class ThemeListItemComponent {
  @Input() theme: ITheme;

  get isLogged(): boolean {
    return this.authService.isLogged;
  }

  constructor(private authService: AuthService) { }
}
