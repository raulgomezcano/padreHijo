import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ListaMedicosComponent } from './lista-medicos/lista-medicos.component';
import { FormularioMedicosComponent } from './formulario-medicos/formulario-medicos.component';
import { FormularioPacientesComponent } from './formulario-pacientes/formulario-pacientes.component';
import { ListaPacientesComponent } from './lista-pacientes/lista-pacientes.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaMedicosComponent,
    FormularioMedicosComponent,
    FormularioPacientesComponent,
    ListaPacientesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
