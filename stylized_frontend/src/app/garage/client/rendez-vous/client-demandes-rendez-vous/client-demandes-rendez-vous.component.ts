import { Component, OnInit} from '@angular/core';
import { Router,RouterModule,ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DemandeRDVService } from 'src/app/services/demande-rdv.service';
import { RendezVousService } from 'src/app/services/rendez-vous.service';


import { PaginationComponent } from 'src/app/components/pagination/pagination.component';

@Component({
  selector: 'app-client-demandes-rendez-vous',
  imports: [RouterModule,CommonModule,FormsModule,PaginationComponent],
  templateUrl: './client-demandes-rendez-vous.component.html',
  styleUrl: './client-demandes-rendez-vous.component.scss'
})
export class ClientDemandesRendezVousComponent implements OnInit{

  currentUser : any;
  demandesRDV : any[] = [];

  status : string[] = ['En attente','En confirmation','Confirmée','Refusée']

  page = 0;
  nombreElement = 0 ;
  nombreMaxElement = 0;
  pageMax = 0;

  constructor(private demandeRDVService:DemandeRDVService, private rendezvousService:RendezVousService, private activatedRoute:ActivatedRoute){}

  ngOnInit(): void {
    this.currentUser = JSON.parse(sessionStorage.getItem('currentUser')!);
    this.activatedRoute.params.subscribe(params => {
      this.page = params['page'];
      this.loadDemandesRDV(this.page);
    });
  }

  loadDemandesRDV(page:number) : void {
    const demandesFilter = {
      idClient : this.currentUser._id,
      status : { $lt : 2 }
    }
    this.demandeRDVService.filterDemandesRDV(page,demandesFilter).subscribe(data => {
      this.nombreElement = data.nombreElement;
      this.nombreMaxElement = data.nombreMaxElement;
      this.pageMax = data.pageMax;
      this.demandesRDV = data.demandesRDV;
    })
  }

  createRendezVous(idDemandeRendezVous : string) : void {
    this.demandeRDVService.getDemandesRDVByid(idDemandeRendezVous).subscribe(data => {
      const newRDV = {
        idClient : data.idClient,
        idGarage : data.idGarage,
        dateHeure : data.dateHeure,
        status : 0
      };
      this.rendezvousService.addDemandeRDV(newRDV).subscribe();
    });
  }

  updateStatusDemandeRDV(idDemandeRendezVous: string, newStatus : number) : void {
    const changeStatus = { status : newStatus };
    this.demandeRDVService.updateDemandeRDV(idDemandeRendezVous, changeStatus).subscribe();
  }

  confirmRDV(idDemandeRendezVous: string) : void {
    this.createRendezVous(idDemandeRendezVous);
    this.updateStatusDemandeRDV(idDemandeRendezVous,2);
    this.loadDemandesRDV(this.page);
  }

  refusRDV(idDemandeRendezVous : string) : void {
    this.updateStatusDemandeRDV(idDemandeRendezVous,3);
    this.loadDemandesRDV(this.page);
  }

}
