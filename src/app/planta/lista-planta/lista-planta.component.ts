import { Component, OnInit } from '@angular/core';
import { PlantaService } from '../planta.service';
import { Planta } from '../planta';



@Component({
  selector: 'app-lista-planta',
  templateUrl: './lista-planta.component.html',
  styleUrls: ['./lista-planta.component.css']
})
export class ListaPlantaComponent implements OnInit {
  plantas: Planta[] = [];

  constructor(
    private plantaService: PlantaService
  ) {}

  ngOnInit() {
    this.getPlantas();
  }

  getPlantas(): void {
    this.plantaService.getPlantas().subscribe((data) => {
      this.plantas = data;
    });
  }
}
