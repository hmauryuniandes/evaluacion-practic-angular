import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';

import { ListaPlantaComponent } from './lista-planta.component';
import { PlantaService } from '../planta.service';
import { Planta } from '../planta';
import { Observable, of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

const mockData = [
  {
    id: 1,
    nombre_comun: 'Lengua de vaca',
    nombre_cientifico: 'Sansevieria Trifasciata',
    tipo: 'Interior',
    altura_maxima: 140,
    clima: 'Templado, cálido',
    sustrato_siembra:
      'Tierra orgánica con buen drenaje, arena, cascarilla de arroz',
  },
  {
    id: 2,
    nombre_comun: 'Chachafruto',
    nombre_cientifico: 'Schefflera actinophylla',
    tipo: 'Exterior',
    altura_maxima: 1000,
    clima: 'Todos',
    sustrato_siembra: 'Sustrato para huerto',
  },
  {
    id: 3,
    nombre_comun: 'Espatifilo',
    nombre_cientifico: 'Spathiphyllum Wallasii',
    tipo: 'Interior',
    altura_maxima: 65,
    clima: 'Templado, cálido',
    sustrato_siembra: 'Tierra orgánica',
  },
] as Planta[];

class serviceMock {
  getPlantas(): Observable<Planta[]> { return of(mockData) }
}

describe('ListaPlantaComponent', () => {
  let component: ListaPlantaComponent;
  let fixture: ComponentFixture<ListaPlantaComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ListaPlantaComponent],
      providers: [{
        provide: PlantaService,
        useClass: serviceMock
      }],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaPlantaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should getActors load data', fakeAsync(() => {
    component.getPlantas();
    tick(100);
    expect(component.plantas.length).toBe(3);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('thead')).not.toBeUndefined()
    expect(compiled.getElementsByClassName('planta-row').length).toBe(3)
  }));

  it('should getTotales calculate totals', fakeAsync(() => {
    component.plantas = mockData;
    component.getTotales();
    expect(component.plantas.length).toBe(3);
    expect(component.totalInterior).toBe(2);
    expect(component.totalExterior).toBe(1);
  }));
});
