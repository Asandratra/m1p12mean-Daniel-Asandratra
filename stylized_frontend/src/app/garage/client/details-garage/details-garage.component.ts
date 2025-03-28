import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router,RouterModule,ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { GarageService } from 'src/app/services/garage.service';
import { DemandeRDVService } from 'src/app/services/demande-rdv.service';

@Component({
  selector: 'app-details-garage',
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './details-garage.component.html',
  styleUrl: './details-garage.component.scss'
})
export class ClientDetailsGarageComponent implements OnInit{
  constructor(private garageService:GarageService, private demandeRDVService:DemandeRDVService, private activatedRoute:ActivatedRoute){}

  currentUser : any;
  garage : any;
  manager : any;

  dateHeure = '';
  status = 0;

  router = inject(Router);

  ngOnInit(): void {
    const checkUser = JSON.parse(sessionStorage.getItem('currentUser')!);
    if(checkUser) this.currentUser = checkUser;
    else this.router.navigateByUrl('client');
    this.activatedRoute.params.subscribe(params => {
      this.loadGarageByIdAsClient(params['id']);
    })
  }

  loadGarageByIdAsClient(id:string) : void {
    this.garageService.getGarageByIdAsClient(id).subscribe(data => {
      this.garage = data;
      this.manager = data.employees[0];
    });
  }

  createDemandeRDV() : void {
    if(this.dateHeure){
      const demandeRDV = {
        idClient : this.currentUser._id,
        idGarage : this.garage._id,
        dateHeure : this.dateHeure,
        status : 0
      };
      this.demandeRDVService.addDemandeRDV(demandeRDV).subscribe(data => {
        alert("Demande de rendez-vous envoyée.");
        this.router.navigateByUrl('garage/list/1')
      });
    }
    else{
      alert("Veuillez bien spécifier la date à laquelle vous souhaitez prendre rendez-vous.");
    }
  }
}
