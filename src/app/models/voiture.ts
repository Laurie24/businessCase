import {Marque} from './marque';
import {Modele} from './modele';
import {Garage} from './garage';
import {Carburant} from './carburant';

export class Annonce {
  id: number;
  marque: Marque;
  image: string;
  modele: Modele;
  date: Date;
  kilometrage: number;
  garage: Garage;
  carburant: Carburant;
  prix: number;
  descriptionLongue: string;
  description: string;

  constructor(id: number = null, marque: Marque = null, image: string = null, modele: Modele = null, date: Date = null, kilometrage: number = null, garage: Garage = null, carburant: Carburant = null, prix: number = null, descriptionLongue: string = null, description: string = null) {
    this.id = id;
    this.image = image;
    this.marque = marque;
    this.modele = modele;
    this.date = date;
    this.kilometrage = kilometrage;
    this.garage = garage;
    this.carburant = carburant;
    this.prix = prix;
    this.descriptionLongue = descriptionLongue;
    this.description = description;
  }
}
