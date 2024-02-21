import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IPost } from '../../shared/interfaces';
import { IThemeModuleState } from '../../theme/+store';
import { themeListClear, themeListLoadPostList } from '../../theme/+store/actions';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})

export class PostListComponent implements OnDestroy {
  postList$: Observable<IPost[]> = this.store.select(state => state.theme.list.postList);

  constructor(
    private store: Store<IThemeModuleState>  
  ) {
    this.fetchPosts();
  }

  fetchPosts(): void {
    this.store.dispatch(themeListLoadPostList());
  }

  ngOnDestroy(): void {
    this.store.dispatch(themeListClear())
  }
}
