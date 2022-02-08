import { Component, OnInit } from '@angular/core';
import { GetPosts, PostsState } from '../../states/posts.state';
import { Select, Store } from '@ngxs/store';
import { Post } from '../../interface/post.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-posts-shell',
  templateUrl: './posts-shell.component.html',
  styleUrls: ['./posts-shell.component.scss'],
})
export class PostsShellComponent implements OnInit {
  @Select(PostsState.posts) posts$: Observable<Post[]>;

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    console.log('POST SHELL NGONIIT');
    this.store.dispatch(new GetPosts());
  }
}
