import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {VoitureService} from '../../services/voiture.service';
import {Annonce} from '../../models/voiture';

@Component({
  selector: 'app-detail-voiture',
  templateUrl: './detail-voiture.component.html',
  styleUrls: ['./detail-voiture.component.css']
})
export class DetailVoitureComponent implements OnInit {
  isLoading: boolean;
  id: number;
  voiture: Annonce;
  constructor(private route: ActivatedRoute, private voitureService: VoitureService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.voitureService.getOneVoitureById(+this.route.snapshot.paramMap.get('id')).subscribe(then => {
      this.voiture = then;
      this.isLoading = false;
    });
  }

}
