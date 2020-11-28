import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {GarageService} from '../../services/garage.service';
import {Garage} from '../../models/garage';

@Component({
  selector: 'app-edit-garage',
  templateUrl: './edit-garage.component.html',
  styleUrls: ['./edit-garage.component.css']
})
export class EditGarageComponent implements OnInit {
  garage: Garage;
  isLoading: boolean;
  constructor(private router: Router, private toastr: ToastrService, private activatedRoute: ActivatedRoute, private garageService: GarageService) { }

  ngOnInit(): void {
    this.isLoading = true;
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.garageService.getOneGarageById(id).subscribe((data: Garage) => {
      this.garage = data;
      this.isLoading = false;
    });
  }
  editGarage(){
    this.garageService.edit(this.garage).subscribe(then => {
      this.router.navigate(['/gererGarage']);
    });
    this.toastr.success('Le garage a bien été éditée!', 'Succès!');
  }

}
