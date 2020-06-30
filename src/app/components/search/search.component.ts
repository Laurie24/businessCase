import { Component, OnInit } from '@angular/core';
import {Marque} from '../../models/marque';
import {Voiture} from '../../models/voiture';
import {MarqueService} from '../../services/marque.service';
import {VoitureService} from '../../services/voiture.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  voiture: Voiture[];
  marques: Marque[];
  isLoading: boolean;
  vehiculeSource: Voiture[];
  searchEngine: Voiture = new Voiture();
  constructor(private marqueService: MarqueService, private voitureService: VoitureService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.marqueService.getAll().subscribe((data: Marque[]) => {
      this.marques = data;
      console.log(this.marques);
      this.isLoading = false;
    });
    this.voitureService.getAll().subscribe((data: Voiture[]) => {
      this.voiture = data;
      this.vehiculeSource = data;
      this.isLoading = false;
    });
  }
  filterModel() {
    this.voiture = this.voitureService.filteredVehicule(this.searchEngine, this.vehiculeSource);
    console.log(this.searchEngine);
  }
  triData() {
    console.log('todo');
  }



}
