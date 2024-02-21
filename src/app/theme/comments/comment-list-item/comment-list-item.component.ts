import { Component, Input } from '@angular/core';
import { IPost } from '../../../shared/interfaces';

@Component({
  selector: 'app-comment-list-item',
  templateUrl: './comment-list-item.component.html',
  styleUrl: './comment-list-item.component.css'
})
export class CommentListItemComponent {
  @Input() post: IPost;
}
