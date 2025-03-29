import { Component, OnInit, inject} from '@angular/core';

import { Router,RouterModule,ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DemandeRDVService } from 'src/app/services/demande-rdv.service';

import { PaginationComponent } from 'src/app/components/pagination/pagination.component';


@Component({
  selector: 'app-manager-demandes-rendez-vous',
  imports: [RouterModule,CommonModule,FormsModule,PaginationComponent],
  templateUrl: './manager-demandes-rendez-vous.component.html',
  styleUrl: './manager-demandes-rendez-vous.component.scss'
})
export class ManagerDemandesRendezVousComponent implements OnInit{
  constructor(private demandeRDVService:DemandeRDVService, private activatedRoute:ActivatedRoute){}

  currentUser : any;
  demandesRDV : any;

  status : string[] = ['En attente','En confirmation','Confirmée','Refusée']

  page = 0;
  nombreElement = 0 ;
  nombreMaxElement = 0;
  pageMax = 0;

  router = inject(Router);

  ngOnInit(): void {
    const checkUser = JSON.parse(sessionStorage.getItem('currentUser')!);
    if(checkUser) this.currentUser = checkUser;
    else this.router.navigateByUrl('manager');
    this.loadDemandesRDV(this.currentUser.idGarage);
  }

  loadDemandesRDV(page:number) : void {
    const demandesFilter = {
      idGarage : this.currentUser._garage,
      status : { $lt : 2 }
    }
    this.demandeRDVService.filterDemandesRDV(page,demandesFilter).subscribe(data => {
      this.nombreElement = data.nombreElement;
      this.nombreMaxElement = data.nombreMaxElement;
      this.pageMax = data.pageMax;
      this.demandesRDV = data.demandesRDV;
    })
  }
  refusDemandeRDV(id:string) : void {
    const nouvelleDemandeRDV = {
      status : 4
    };
    this.demandeRDVService.updateDemandeRDV(id,nouvelleDemandeRDV).subscribe(data => {
      alert("Demande de rendez-vous refusée");
      this.router.navigateByUrl('manager/demandes-rendez-vous/1');
    });
  }
}
