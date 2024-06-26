import { Component, Input } from '@angular/core';
import { DatoToDo } from '../../models/tipi';
import { TodoService } from '../../service/todo.service';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrl: './todo-list-item.component.css',
})
export class TodoListItemComponent {
  @Input()
  todo ? : DatoToDo;

  constructor(public tdservice : TodoService){}
}
