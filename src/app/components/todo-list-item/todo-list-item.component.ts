import { Component, Input } from '@angular/core';
import { ToDoData } from '../../models/tipi';
import { TodoService } from '../../service/todo.service';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrl: './todo-list-item.component.css',
})
export class TodoListItemComponent {
  @Input()
  todo ? : ToDoData;

  constructor(public tdservice : TodoService){}

  isEdit : boolean = false

  EditStatusTitle(){
    this.isEdit = !this.isEdit
  }

  ChangeTitle(input : HTMLInputElement){
    this.todo!.title = input.value
    this.EditStatusTitle()
    const cambionome = this.tdservice.TODOLIST.map(item => item.id === this.todo!.id ? {...item, title : input.value}: item) //... spread operator
    this.tdservice.TODOLIST = cambionome 
    this.tdservice.AddToLocalStorage()
  }

  CompletedTask(){
    return this.todo!.status ? 'text-decoration-line-through' : ''
  }

}
