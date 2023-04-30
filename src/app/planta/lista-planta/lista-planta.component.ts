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
  totalInterior = 0;
  totalExterior = 0;

  constructor(
    private plantaService: PlantaService
  ) {}

  ngOnInit() {
    this.getPlantas();
  }

  getPlantas(): void {
    this.plantaService.getPlantas().subscribe((data) => {
      this.plantas = data;
      this.getTotales();
    });
  }

  getTotales(): void {
    this.totalInterior = this.plantas.filter(x => x.tipo == "Interior").length;
    this.totalExterior = this.plantas.filter(x => x.tipo == "Exterior").length;;
  }
}
