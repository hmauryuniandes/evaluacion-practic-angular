import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPlantaComponent } from './planta/lista-planta/lista-planta.component';
import { PlantaModule } from './planta/planta.module';

const routes: Routes = [{
  path: '',
  component: ListaPlantaComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes), PlantaModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
