import { Component, OnInit } from '@angular/core';
import {Garage} from '../../models/garage';
import {GarageService} from '../../services/garage.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-gerer-garage',
  templateUrl: './gerer-garage.component.html',
  styleUrls: ['./gerer-garage.component.css']
})
export class GererGarageComponent implements OnInit {
  // @ts-ignore
  garage = new Garage();
  garages: Garage[];
  constructor(private garageService: GarageService, private toastr: ToastrService, private router: Router) { }
  isLoading: boolean;
  ngOnInit(): void {
    this.isLoading = true;
    this.garageService.getAll().subscribe(them => {
      this.garages = them['hydra:member'];
      this.isLoading = false;
    });
  }
  deleteGarage(garage: Garage){
    this.isLoading = true;
    this.garageService.deleteGarage(garage.id).subscribe(data => {
      this.garageService.getAll().subscribe(newDataGarage => {
        this.garages = newDataGarage;
        this.isLoading = false;
        this.toastr.success('Le garage a bien été supprimée!', 'Succès!');
      });
    });
  }
  submitGarage(): void{
    this.isLoading = true;
    this.garageService.addGarage(this.garage).subscribe(then => {
      this.isLoading = false;
      this.router.navigate(['/garage']);
      this.toastr.success('Le garage a bien été ajoutée!', 'Succès!');
    });
  }


}
