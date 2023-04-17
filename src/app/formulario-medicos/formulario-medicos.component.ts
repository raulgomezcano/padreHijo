import { Component, EventEmitter } from '@angular/core';
import { Output } from '@angular/core';

@Component({
  selector: 'app-formulario-medicos',
  templateUrl: './formulario-medicos.component.html',
  styleUrls: ['./formulario-medicos.component.css']
})
export class FormularioMedicosComponent {
  nombre = ""
  apellido = ""
  cedula = ""
  foto = ""
  doctores = []
}
