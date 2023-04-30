import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaPlantaComponent } from './lista-planta/lista-planta.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ListaPlantaComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [HttpClient]
})
export class PlantaModule { }
