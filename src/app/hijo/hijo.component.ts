import { Component } from '@angular/core';
import { paciente } from '../modelo/paciente';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {
  listaPacientes: paciente[]
  constructor(){
    this.listaPacientes = []
  }
  aceptar(){
    this.listaPacientes.push()
  }
  cancelar(){
    this.listaPacientes.nombres 
    this.nombres = ""
    this.apellidos = ""
    this.dni = ""
    this.telefono = 0
    this.direccion = ""
    this.email = ""
  }
}
