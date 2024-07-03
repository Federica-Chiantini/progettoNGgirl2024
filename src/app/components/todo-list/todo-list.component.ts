import { Component} from '@angular/core';
import { TodoService} from '../../service/todo.service';
import { ToDoData } from '../../models/tipi';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent{
  DataList : ToDoData [] = []

constructor(private service : TodoService){
  this.DataList = this.service.getTodoList()
}

reload(){
  window.location.reload()
}



}
