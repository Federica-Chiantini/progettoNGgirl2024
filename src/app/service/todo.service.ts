import { Injectable } from '@angular/core';
import { ToDoData } from '../models/tipi';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

TODOLIST : ToDoData[] = this.TakeDatasFromLocalStorage()

TakeDatasFromLocalStorage(){
    const LocStorage = localStorage.getItem("todolist")
    const arrayLocStorage = JSON.parse(LocStorage || "")
    return arrayLocStorage
  }

  getTodoList(){
    return this.TODOLIST
  }

  DeleteTodoItem(item : ToDoData){
    let index = this.TODOLIST.indexOf(item)
    this.TODOLIST.splice(index , 1)
    this.AddToLocalStorage()
  }

  AddTodoItem(item : ToDoData){
    this.TODOLIST.push(item)
    this.AddToLocalStorage()
  }

  ChangeStatus(id : number){
    this.TODOLIST = this.TODOLIST.map((td) => {return td.id === id ? {...td, status: !td.status} : td})
    this.AddToLocalStorage()
    console.log(this.TODOLIST)
  }

  AddToLocalStorage(){
    localStorage.setItem("todolist", JSON.stringify(this.TODOLIST))
  }

}
