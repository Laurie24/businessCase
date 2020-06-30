import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {VoitureService} from '../../services/voiture.service';
import {Voiture} from '../../models/voiture';

@Component({
  selector: 'app-detail-voiture',
  templateUrl: './detail-voiture.component.html',
  styleUrls: ['./detail-voiture.component.css']
})
export class DetailVoitureComponent implements OnInit {
  isLoading: boolean;
  id: number;
  voiture: Voiture;
  constructor(private route: ActivatedRoute, private voitureService: VoitureService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.voitureService.getOneVoitureById(+this.route.snapshot.paramMap.get('id')).subscribe((data: Voiture) => {
      this.voiture = data;
      this.isLoading = false;
    });
  }

}
