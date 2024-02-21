import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PostModule } from '../post/post.module';
import { SharedModule } from '../shared/shared.module';
import { reducers } from './+store';
import { ThemeListEffects } from './+store/effects';
import { CommentListItemComponent } from './comments/comment-list-item/comment-list-item.component';
import { CommentsComponent } from './comments/comments.component';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { ThemeListItemComponent } from './theme-list-item/theme-list-item.component';
import { ThemeListComponent } from './theme-list/theme-list.component';
import { ThemeRoutingModule } from './theme-routing.module';
import { ThemeComponent } from './theme.component';
import { ThemeService } from './themeService/theme.service';


@NgModule({
  declarations: [
    ThemeComponent,
    ThemeListComponent,
    ThemeListItemComponent,
    CommentsComponent,
    CommentListItemComponent,
    NewThemeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PostModule,
    ThemeRoutingModule,
    FormsModule,
    StoreModule.forFeature('theme', reducers),
    EffectsModule.forFeature(ThemeListEffects)
  ],
  providers: [
    ThemeService,
    ThemeListEffects
  ],
  exports: [
    ThemeComponent
  ]
})
export class ThemeModule { }
