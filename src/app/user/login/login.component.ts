import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IUserModuleState } from '../+store';
import { userLoginSetErrorMessage } from '../+store/actoins';
import { AuthService } from '../../core/auth.service';
import { IUserBaseDetails } from '../../shared/interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  errorMessage$ = this.store.select(state => state.user.login.errorMessage);

  constructor(
    private authService: AuthService,
    private router: Router,
    private store: Store<IUserModuleState>
  ) { }

  submitFormHandler(form: IUserBaseDetails): void {
   this.store.dispatch(userLoginSetErrorMessage({ message: '' }))

   this.authService.logIn(form).subscribe({
    next: () => {
      this.router.navigate(['/']);
    },
    error: (err) => {
      this.store.dispatch(userLoginSetErrorMessage({ message: err.message }))
    }
   })
  }
}
