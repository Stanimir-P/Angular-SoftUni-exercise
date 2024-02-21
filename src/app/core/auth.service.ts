import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { IRootState } from '../+store';
import { login, logout, register } from '../+store/actions';
import { IRegisterUser, IUser, IUserBaseDetails } from '../shared/interfaces';

@Injectable()

export class AuthService {

  currentUser$: Observable<IUser> = this.store.select(state => state.auth.currentUser).pipe(tap(user => this.isLogged = !!user));
  
  isLogged = true;
  
  constructor(
    private http: HttpClient,
    private store: Store<IRootState>  
  ) {}

  register(data: IRegisterUser): Observable<IUser> {
    return this.http.post<IUser>('/users/register', data).pipe(
    tap((user: IUser) => this.store.dispatch(register({ user })))
    );
  }

  logIn(data: IUserBaseDetails): Observable<IUser> {
    return this.http.post<IUser>('/users/login', data).pipe(
    tap((user: IUser) => this.store.dispatch(login({ user })))
    );
  }

  logOut(): Observable<any> {
    return this.http.post<IUser>('/users/logout', {}).pipe(
    tap(() => this.store.dispatch(logout()))
    )
  }
}
