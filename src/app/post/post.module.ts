import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostService } from './postService/post.service';

@NgModule({
  declarations: [
    PostListComponent,
    PostListItemComponent,
  ],
  imports: [
    SharedModule,
    CommonModule
  ],
  providers: [
    PostService
  ],
  exports: [
    PostListComponent
  ]
})
export class PostModule { }
