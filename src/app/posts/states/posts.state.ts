import { Post } from '../interface/post.interface';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { CommentsService } from '../services/comments.service';

export class GetPosts {
  static readonly type = '[Posts] Get Posts';
  constructor() {}
}

export class PostsStateModel {
  loading: boolean;
  posts: Post[];
  postsError: string;
}

@State<PostsStateModel>({
  name: 'posts',
  defaults: {
    loading: false,
    posts: null,
    postsError: null,
  },
})
@Injectable()
export class PostsState {
  constructor(private readonly postsService: PostsService, private readonly commentsService: CommentsService) {}

  @Selector()
  static posts(state: PostsStateModel) {
    return state.posts;
  }

  @Action(GetPosts)
  getPosts(ctx: StateContext<PostsStateModel>, action: GetPosts) {
    console.log('action');
    ctx.patchState({ loading: true, posts: null, postsError: null });

    this.postsService.getPosts().subscribe(
      (response: Post[]) => {
        ctx.patchState({
          posts: response,
          loading: false,
        });
      },
      (error) => {
        ctx.patchState({
          postsError: error,
          loading: false,
        });
      },
    );
  }
}
