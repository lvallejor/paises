import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais-interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
      button {
        margin-right: 5px;
      }
    `,
  ],
})
export class PorRegionComponent {
  regiones: string[] = [
    'SAARC',
    'NAFTA',
    'CEFTA',
    'CAIS',
    'ASEAN',
    'AL',
    'EEU',
    'USAN',
    'AU',
    'PA',
    'CARICOM',
    'EFTA',
    'EU',
  ];
  regionActiva: string = '';
  paises: Country[] = [];

  constructor(private paisService: PaisService) {}

  activarRegion = (region: string) => {
    if (region === this.regionActiva) {
      return;
    }
    this.regionActiva = region;
    this.paises = [];

    this.paisService
      .buscarRegion(region)
      .subscribe((paises) => (console.log(paises), (this.paises = paises)));
  };
}
