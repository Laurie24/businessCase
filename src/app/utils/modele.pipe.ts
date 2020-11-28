import { Pipe, PipeTransform } from '@angular/core';

import { Modele } from '../models/modele';

@Pipe({ name: 'modelePipe' })


export class ModelePipe implements PipeTransform {
  transform(modeles: Modele[], marqueID: any): Modele[] {
    return modeles.filter(modele => modele.marque.id === +marqueID);
  }
}
