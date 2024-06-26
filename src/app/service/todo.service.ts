import { Injectable } from '@angular/core';
import { DatoToDo } from '../models/tipi';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

LISTATODO : DatoToDo[] = this.prendiDatidaLStorage()

  constructor() {
  }

  prendiDatidaLStorage(){
    const locStorage = localStorage.getItem("todolist")
    const arra = JSON.parse(locStorage || "")
    return arra
  }

  getTodoList(){
    return this.LISTATODO
  }

  EliminaTodoItem(item : DatoToDo){
    let index = this.LISTATODO.indexOf(item)

    this.LISTATODO.splice(index , 1)
    this.AggiungiLStorage()

  }

  AggiungiTodoItem(item : DatoToDo){
    this.LISTATODO.push(item)
    this.AggiungiLStorage()
  }

  CambioStatus(id : number){
    this.LISTATODO = this.LISTATODO.map((td) => {return td.id === id ? {...td, status: !td.status} : td})
    this.AggiungiLStorage()
  }

  AggiungiLStorage(){
    localStorage.setItem("todolist", JSON.stringify(this.LISTATODO))
  }

}
