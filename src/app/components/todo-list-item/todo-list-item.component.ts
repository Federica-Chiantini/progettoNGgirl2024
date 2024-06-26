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

  isEdit : boolean = false

  edit(){
    this.isEdit = !this.isEdit
  }

  cambioTitolo(input : HTMLInputElement){
    this.todo!.title = input.value
    this.edit()
    const cambionome = this.tdservice.LISTATODO.map(item => item.id === this.todo!.id ? {...item, title : input.value}: item) //... spread operator
    this.tdservice.LISTATODO = cambionome 
    this.tdservice.AggiungiLStorage()
  }
}
