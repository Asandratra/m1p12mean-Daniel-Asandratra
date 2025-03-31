import { Component, OnInit, inject} from '@angular/core';

import { Router,RouterModule,ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DemandeRDVService } from 'src/app/services/demande-rdv.service';
import { RendezVousService } from 'src/app/services/rendez-vous.service';


@Component({
  selector: 'app-form-valider-demande',
  imports: [RouterModule,CommonModule,FormsModule],
  templateUrl: './form-valider-demande.component.html',
  styleUrl: './form-valider-demande.component.scss'
})
export class FormValiderDemandeComponent implements OnInit {
  constructor(private demandeRDVService:DemandeRDVService, private rendezVousService:RendezVousService, private activatedRoute:ActivatedRoute) {}
  errorMessage='';

  currentUser : any;
  demandeRDV : any;
  garage : any;
  client : any;
  nextRendezVous : any[];

  changerDate = false;
  dateHeure = '';
  status = 0;

  router = inject(Router);

  ngOnInit(): void {
    const checkUser = sessionStorage.getItem('currentUser');
    if(checkUser) this.currentUser = checkUser;
    else this.router.navigateByUrl('manager');
    this.activatedRoute.params.subscribe(params => {
      this.loadDemandeRDVById(params['id']);
    });
  }

  switchChangeDate() : void {
    this.changerDate = !this.changerDate
  }

  loadDemandeRDVById(id:string) : void {
    this.demandeRDVService.getDemandesRDVByid(id).subscribe(data => {
      this.demandeRDV = data;
      this.garage = data.idGarage;
      this.client = data.idClient;
      this.loadNextRendezVous(data.idGarage._id);
    })
  }

  loadNextRendezVous(idGarage:string) : void {
    this.rendezVousService.get10NextOfAGarage(idGarage).subscribe(data => {
      this.nextRendezVous=data;
    })
  }

  updateDemandeRDV() : void {
    this.errorMessage='';
    if(this.changerDate){ 
      if(this.dateHeure){
        const nouvelleDemandeRDV = {
          dateHeure : this.dateHeure,
          status : 1
        };
        this.demandeRDVService.updateDemandeRDV(this.demandeRDV._id,nouvelleDemandeRDV).subscribe(data => {
          alert("Demande de confirmation de rendez-vous envoyée.");
          this.dateHeure='';
        }, error=>{
          this.errorMessage=error.message;
        });
      }
      else{
        this.errorMessage="Veuillez bien spécifier la date à laquelle vous souhaitez proposer le rendez-vous.";
      }
    }
    else{
      const nouvelleDemandeRDV = {
        status : 1
      };
      this.demandeRDVService.updateDemandeRDV(this.demandeRDV._id,nouvelleDemandeRDV).subscribe(data => {
        this.router.navigateByUrl('manager/demandes-rendez-vous/1');
      }, error=>{
        this.errorMessage=error.message;
      });
    }
  }
}
