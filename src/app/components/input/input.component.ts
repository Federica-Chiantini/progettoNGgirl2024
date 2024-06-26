import { Component, EventEmitter, Output} from '@angular/core';
import { DatoToDo } from '../../models/tipi';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
  standalone: true,
  imports: [FormsModule]
})
export class InputComponent {
  inputNuovo : string = ""

  @Output()
  item  : EventEmitter<DatoToDo> = new EventEmitter()

  getTask(){
    this.item?.emit({title: this.inputNuovo, id: new Date().getTime(), status: false})
    this.inputNuovo = ""
  }
}
