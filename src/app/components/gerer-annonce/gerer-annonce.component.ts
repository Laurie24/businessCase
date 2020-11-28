import { Component, OnInit } from '@angular/core';
import {Annonce} from '../../models/voiture';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {VoitureService} from '../../services/voiture.service';
import {GarageService} from '../../services/garage.service';
import {Garage} from '../../models/garage';
import {Marque} from '../../models/marque';
import {Modele} from '../../models/modele';
import {Carburant} from '../../models/carburant';
import {MarqueService} from '../../services/marque.service';
import {ModeleService} from '../../services/modele.service';
import {CarburantService} from '../../services/carburant.service';
import {UploadService} from '../../services/upload.service';
import { NgForm } from '@angular/forms';
import {Photo} from '../../models/photo';
import {PhotoService} from '../../services/photo.service';


@Component({
  selector: 'app-gerer-annonce',
  templateUrl: './gerer-annonce.component.html',
  styleUrls: ['./gerer-annonce.component.css']
})
export class GererAnnonceComponent implements OnInit {
  annonces = new Annonce();
  voitures: Annonce[];
  isLoading: boolean;
  modeles: Modele[];
  marques: Marque[];
  carburants: Carburant[];
  annees = this.voitureService.getAnnees();
  garages: Garage[];
  marqueInput: number;
  modelAnnonce = new Modele();
  marqueID: number;

  photos: Photo[];

  constructor(private voitureService: VoitureService, private router: Router, private toastr: ToastrService, private marqueService: MarqueService, private modeleService: ModeleService, private carburantService: CarburantService, private garageService: GarageService, private photoService: PhotoService) {
    this.carburants = [];
    this.modeles = [];
    this.marques = [];
    this.garages = [];
    this.annonces.modele = this.modelAnnonce;
    this.photos = [];
  }

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
    this.garageService.getAll().subscribe(them => {
      this.garages = them['hydra:member'];
      console.log(this.garages);
      this.isLoading = false;
    });
    this.voitureService.getAll().subscribe(them => {
      this.annonces = them['hydra:member'];
      console.log(this.annonces);
      this.isLoading = false;
    });
  }



  submitVoiture(form: NgForm): void {
    this.isLoading = true;
    this.annonces.annee = +form.value['annee'];
    this.annonces.kilometrage = +form.value['kilometre'];
    this.annonces.prix = +form.value['prix'];
    this.annonces.garage.id = +form.value['garage'];
    this.annonces.modele.id = +form.value['modele'];
    this.annonces.carburant.id = +form.value['carburant'];
    this.isLoading = true;
    this.voitureService.addVoiture(this.annonces).subscribe(then => {
      this.router.navigate(['/gererAnnonce']);
      this.toastr.success('La voiture a bien été ajoutée!', 'Succès!');
    });
  }


  /*deleteVoiture(voiture: Annonce) {
    this.isLoading = true;
    this.voitureService.deleteVoiture(voiture.id).subscribe(data => {
      this.voitureService.getAll().subscribe(newDataVoiture => {
        this.voitures = newDataVoiture;
        this.isLoading = false;
        this.toastr.success('La voiture a bien été supprimée!', 'Succès!');
      });
    });
  }*/

  processFile(files: FileList) {
    const file: File = files.item(0);
    const photo = new Photo(file[0].name, file);

    this.photos.push(photo);

    console.log(file);
  }
}
