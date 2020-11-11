import { Component, OnInit } from '@angular/core';
import {Marque} from '../../models/marque';
import {Annonce} from '../../models/voiture';
import {MarqueService} from '../../services/marque.service';
import {VoitureService} from '../../services/voiture.service';
import {Modele} from '../../models/modele';
import {Carburant} from '../../models/carburant';
import {CarburantService} from '../../services/carburant.service';
import {ModeleService} from '../../services/modele.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  voitures: Annonce[];
  marques: Marque[];
  modeles: Modele[];
  carburants: Carburant[];
  searchMarque: string;
  searchModele: string;
  searchCarburant: string;
  searchPrix: string;
  searchDate: string;
  searchKilometrage;
  isLoading: boolean;
  constructor(private marqueService: MarqueService, private modeleService: ModeleService, private voitureService: VoitureService, private carburantService: CarburantService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.marqueService.getAll().subscribe(them => {
      this.marques = them['hydra:member'];
      console.log(this.marques);
      this.isLoading = false;
    });
    this.modeleService.getAll().subscribe(them => {
      this.modeles = them['hydra:member'];
      console.log(this.modeles);
      this.isLoading = false;
    });
    this.carburantService.getAll().subscribe(them => {
      this.carburants = them['hydra:member'];
      console.log(this.carburants);
      this.isLoading = false;
    });
    this.voitureService.getAll().subscribe(them => {
      this.voitures = them['hydra:member'];
      this.isLoading = false;
    });
  }
}
