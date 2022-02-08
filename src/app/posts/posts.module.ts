import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsShellComponent } from './components/posts-shell/posts-shell.component';
import { PostsService } from './services/posts.service';
import { CommentsService } from './services/comments.service';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { PostsRoutingModule } from './posts-routing.module';
import { PostsState, PostsStateModel } from './states/posts.state';
import { NgxsModule } from '@ngxs/store';
import { PostCardComponent } from './components/post-card/post-card.component';

@NgModule({
  declarations: [PostsShellComponent, PostsListComponent, PostDetailComponent, PostCardComponent],
  imports: [CommonModule, PostsRoutingModule, NgxsModule.forFeature([PostsState])],
  providers: [PostsService, CommentsService],
})
export class PostsModule {}
