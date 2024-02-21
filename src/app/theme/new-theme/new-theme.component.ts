import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ICreateTheme } from '../../shared/interfaces';
import { ThemeService } from '../themeService/theme.service';

@Component({
  selector: 'app-new-theme',
  templateUrl: './new-theme.component.html',
  styleUrl: './new-theme.component.css'
})

export class NewThemeComponent {
  f: FormGroup;

  constructor (
    private themeService: ThemeService,
    private router: Router
    ) {}
  
  submitHandler(data: ICreateTheme): void {
    this.themeService.createTheme(data).subscribe({
      next: () => {
        this.router.navigate(['/themes'])
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
