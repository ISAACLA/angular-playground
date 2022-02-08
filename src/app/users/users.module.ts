import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UsersShellComponent } from './components/users-shell/users-shell.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UsersService } from './services/users.service';
import { UserNewComponent } from './components/user-new/user-new.component';
import { UsersRoutingModule } from './users-routing.module';
import { NgxsModule } from '@ngxs/store';
import { UsersState } from './state/users.state';

@NgModule({
  declarations: [UserCardComponent, UsersShellComponent, UsersListComponent, UserNewComponent],
  imports: [CommonModule, UsersRoutingModule, NgxsModule.forFeature([UsersState])],
  providers: [UsersService],
})
export class UsersModule {}
