import { Component, EventEmitter, Output } from '@angular/core';
import { paciente } from '../modelo/paciente';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {
  @Output() newItemEvent = new EventEmitter<paciente>()
  nuevoPaciente :paciente
  constructor(){
    this.nuevoPaciente = new paciente("","","",0,"","")
  }
  mostrarPaciente(){
    this.newItemEvent.emit(this.nuevoPaciente)
  }
}
