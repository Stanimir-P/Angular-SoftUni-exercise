import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IUserModuleState } from '../+store';
import { userRegisterSetErrorMessage, userRegisterSetLoading } from '../+store/actoins';
import { AuthService } from '../../core/auth.service';
import { IRegisterUser } from '../../shared/interfaces';
import { emailValidator, rePasswordValidatorFactory } from '../../shared/validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {
  form: FormGroup;

  isLoading$ = this.store.select(state => state.user.login.isLoading);
  errorMessage$ = this.store.select(state => state.user.login.errorMessage);

  
  constructor (
    private fb: FormBuilder, 
    private authService: AuthService,
    private router: Router,
    private store: Store<IUserModuleState>
  ) {
    const passwordControl = this.fb.control('', [Validators.required, Validators.minLength(4)])

    this.form=this.fb.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, emailValidator]],
      tel: [''],
      password: passwordControl,
      repeatPassword: ['', [Validators.required, Validators.minLength(5), rePasswordValidatorFactory(passwordControl)]],
    })
  }

  submitHandler(): void {
    const data: IRegisterUser = this.form.value;

    this.store.dispatch(userRegisterSetLoading({ isLoading: true }));
    this.store.dispatch(userRegisterSetErrorMessage({ message: '' }));
    
    this.authService.register(data).subscribe({
      next: () => {
      this.store.dispatch(userRegisterSetLoading({ isLoading: false }));
        this.router.navigate(['/']);
      },
      error: err => {
        this.store.dispatch(userRegisterSetLoading({ isLoading: false }));
        this.store.dispatch(userRegisterSetErrorMessage({ message: err.message }));
      }
    })
  }

  get username() { return this.form.get('username') };
  get email() { return this.form.get('email') };
  get tel() { return this.form.get('tel') };
  get password() { return this.form.get('password') };
  get repeatPassword() { return this.form.get('repeatPassword') };
}
