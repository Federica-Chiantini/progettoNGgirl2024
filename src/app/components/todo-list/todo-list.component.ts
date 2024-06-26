import { Component} from '@angular/core';
import { TodoService} from '../../service/todo.service';
import { DatoToDo } from '../../models/tipi';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent{
  listaDati : DatoToDo [] = []

constructor(private service : TodoService){
  this.listaDati = this.service.getTodoList()
}


}
