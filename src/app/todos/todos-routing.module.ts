import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TodosShellComponent } from './components/todos-shell/todos-shell.component';

const todosRouts: Routes = [
  {
    path: '',
    component: TodosShellComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(todosRouts)],
  exports: [RouterModule],
})
export class TodosRoutingModule {}
