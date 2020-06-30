import {Marque} from './marque';

export class Voiture {
  id: number;
  marque: string;
  photo: string;
  model: string;
  miseEnCirculation: Date;
  kilometrage: number;
  carburant: string;
  prix: number;
  descriptionLongue: string;
  descriptionCourte: string;

  constructor(id: number = null, marque: string = null, photo: string = null, model: string = null, miseEnCirculation: Date = null, kilometrage: number = null, carburant: string = null, prix: number = null, descriptionLongue: string = null, descriptionCourte: string = null) {
    this.id = id;
    this.photo = photo;
    this.marque = marque;
    this.model = model;
    this.miseEnCirculation = miseEnCirculation;
    this.kilometrage = kilometrage;
    this.carburant = carburant;
    this.prix = prix;
    this.descriptionLongue = descriptionLongue;
    this.descriptionCourte = descriptionCourte;
  }
}
