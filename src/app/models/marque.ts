import {Annonce} from './voiture';
import {Modele} from './modele';

export class Marque {
  id: number;
  voitures: Annonce;
  modele: Modele;
  nom: string;
  constructor(nom: string = null, modele: Modele = null, voitures: Annonce) {
    this.voitures = voitures;
    this.nom = nom;
    this.modele = modele;
  }
}
