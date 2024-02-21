import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICreateTheme, ITheme } from '../../shared/interfaces';

@Injectable()
export class ThemeService {

  constructor(private http: HttpClient) { }

  loadThemeList(): Observable<ITheme[]> {
    return this.http.get<ITheme[]>('/themes');
  }

  loadThemeListItem(themeId: string): Observable<ITheme> {
    return this.http.get<ITheme>(`/themes/${themeId}`);
  }

  createTheme(data: ICreateTheme): Observable<ITheme> {
    return this.http.post<ITheme>(`/themes`, data);
  }
}
