import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosShellComponent } from './components/todos-shell/todos-shell.component';
import { TodosRoutingModule } from './todos-routing.module';
import { TodosState } from './state/todos.state';
import { NgxsModule } from '@ngxs/store';
import { TodosService } from './services/todos.service';
import { TodosListComponent } from './components/todos-list/todos-list.component';
import { TodoCardComponent } from './components/todo-card/todo-card.component';

@NgModule({
  declarations: [TodosShellComponent, TodosListComponent, TodoCardComponent],
  imports: [CommonModule, TodosRoutingModule, NgxsModule.forFeature([TodosState])],
  providers: [TodosService],
})
export class TodosModule {}
