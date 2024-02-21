import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IUserModuleState } from '../+store';
import { userProfileSetEditMode, userProfileSetErrorMessage } from '../+store/actoins';
import { AuthService } from '../../core/auth.service';
import { IUpdateUser, IUser } from '../../shared/interfaces';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  
  isEditMode$: Observable<boolean> = this.store.select(state => state.user.profile.isEditMode);

  get currentUser$(): Observable<IUser> {
    return this.authService.currentUser$;
  }

  constructor (
    private authService: AuthService,
    private userService: UserService,
    private store: Store<IUserModuleState>
  ) {}

  toggleEditModeHandler(value: boolean): void {
    this.store.dispatch(userProfileSetEditMode({ isEdit: !value }));
  }

  submitHandler(data: IUpdateUser): void {
    this.userService.updateProfile(data).subscribe({
      next: () => {
        this.store.dispatch(userProfileSetEditMode({ isEdit: false }));
      },
      error: err => {
        this.store.dispatch(userProfileSetErrorMessage({ message: err.message }));
      }
    })
  }
}
