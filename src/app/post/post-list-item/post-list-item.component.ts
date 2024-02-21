import { Component, Input } from '@angular/core';
import { IPost } from '../../shared/interfaces';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrl: './post-list-item.component.css'
})

export class PostListItemComponent {
  @Input() post: IPost;

}
