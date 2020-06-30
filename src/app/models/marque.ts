import {Voiture} from './voiture';

export class Marque {
  voitures: Voiture[];
  nom: string;
  constructor(nom: string = null, voitures: Voiture[] = []) {
    this.voitures = voitures;
    this.nom = nom;
  }
}
