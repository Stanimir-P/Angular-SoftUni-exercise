import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from '../../shared/interfaces';

@Injectable()
export class PostService {
  constructor(private http: HttpClient) { }

  loadPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>('/posts');
  }
}
