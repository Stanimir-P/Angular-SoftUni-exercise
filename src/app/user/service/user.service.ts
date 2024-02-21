import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { IRootState } from '../../+store';
import { updateUser } from '../../+store/actions';
import { IUpdateUser, IUser } from '../../shared/interfaces';

@Injectable()
export class UserService {
  
  constructor (
    private http: HttpClient,
    private store: Store<IRootState>
    ) {}

  updateProfile(data: IUpdateUser): Observable<IUser> {
    return this.http.put<IUser>('/users/profile', data).pipe(
      tap((user: IUser) => this.store.dispatch(updateUser({ user })))
    )
  }
}
