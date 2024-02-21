import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IThemeModuleState } from '../+store';
import { themeCommentsClear, themeCommentsSetTheme } from '../+store/actions';
import { ITheme } from '../../shared/interfaces';
import { ThemeService } from '../themeService/theme.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent implements OnDestroy {

  themeListItem$: Observable<ITheme> = this.store.select(state => state.theme.comments.theme);
  isLoading$ = this.store.select(state => state.theme.comments.isLoading);

  constructor (
    private themeService: ThemeService,
    private activatedRoute: ActivatedRoute,
    private store: Store<IThemeModuleState>
  ) {
    this.fetchTheme();
  }

  fetchTheme(): void {
    const id = this.activatedRoute.snapshot.params['id'];

    this.themeService.loadThemeListItem(id).subscribe(theme => 
      this.store.dispatch(themeCommentsSetTheme({ theme }))
    );
  }

  ngOnDestroy(): void {
    this.store.dispatch(themeCommentsClear());
  }
}
