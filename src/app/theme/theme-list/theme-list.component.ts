import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IThemeModuleState } from '../+store';
import { themeListClear, themeListLoadThemeList } from '../+store/actions';
import { ITheme } from '../../shared/interfaces';

@Component({
  selector: 'app-theme-list',
  templateUrl: './theme-list.component.html',
  styleUrl: './theme-list.component.css'
})

export class ThemeListComponent implements OnDestroy {

  themeList$: Observable<ITheme[]> = this.store.select(state => state.theme.list.themeList);
  isLoading$: Observable<boolean> = this.store.select(state => state.theme.list.isLoading);

  constructor(
    private store: Store<IThemeModuleState>  
  ) {
    this.fetchThemeList();
  }

  fetchThemeList(): void {
    this.store.dispatch(themeListLoadThemeList());
  }

  ngOnDestroy(): void {
    this.store.dispatch(themeListClear())
  }
}