import { Component, OnInit, inject} from '@angular/core';
import { Router,RouterModule, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RendezVousService } from 'src/app/services/rendez-vous.service';

import { PaginationComponent } from 'src/app/components/pagination/pagination.component';

@Component({
  selector: 'app-manager-rendez-vous',
  imports: [RouterModule,CommonModule,FormsModule,PaginationComponent],
  templateUrl: './manager-rendez-vous.component.html',
  styleUrl: './manager-rendez-vous.component.scss'
})
export class ManagerRendezVousComponent implements OnInit{
  constructor(private rendezVousService:RendezVousService,private activatedRoute:ActivatedRoute){}

  json = JSON;
  router = inject(Router);

  currentUser : any;
  rendezVous : any[] = [];

  status : string[] = ['Actif','Terminé','Annulé'];

  page = 0;
  nombreElement = 0 ;
  nombreMaxElement = 0;
  pageMax = 0;

  ngOnInit(): void {
    this.currentUser = JSON.parse(sessionStorage.getItem('currentUser')!);
    this.activatedRoute.params.subscribe(params => {
      this.page = params['page'];
      this.loadRendezVous(this.page);
    });
  }

  
  loadRendezVous(page:number) : void {
    const filter = {
      idGarage : this.currentUser.idGarage._id,
      status : { $lt : 2 }
    }
    this.rendezVousService.filterRendezVous(page,filter).subscribe(data => {
      this.nombreElement = data.nombreElement;
      this.nombreMaxElement = data.nombreMaxElement;
      this.pageMax = data.pageMax;
      this.rendezVous = data.rendezVous;
    })
  }

  creerTravailDepuisRendezVous(client:any) {
    sessionStorage.setItem("clientDeTravail",client);
    this.router.navigateByUrl('manager/creer-travail');
  }

  terminerRendezVousById(id:string) : void {
    const annulation = {
      status : 1
    };
    this.rendezVousService.updateRendezVous(id,annulation).subscribe(data => {
      this.activatedRoute.params.subscribe(params => {
        this.page = params['page'];
        this.loadRendezVous(this.page);
      });
    });
  }

  annulerRendezVousById(id:string) : void {
    const annulation = {
      status : 2
    };
    this.rendezVousService.updateRendezVous(id,annulation).subscribe(data => {
      this.activatedRoute.params.subscribe(params => {
        this.page = params['page'];
        this.loadRendezVous(this.page);
      });
    });
  }
}
