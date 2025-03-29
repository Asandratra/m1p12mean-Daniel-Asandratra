import { Component, OnInit} from '@angular/core';
import { Router,RouterModule,ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PaginationComponent } from 'src/app/components/pagination/pagination.component';

import { RendezVousService } from 'src/app/services/rendez-vous.service';

@Component({
  selector: 'app-rendez-vous',
  imports: [RouterModule,CommonModule,FormsModule,PaginationComponent],
  templateUrl: './rendez-vous.component.html',
  styleUrl: './rendez-vous.component.scss'
})
export class ClientRendezVousComponent implements OnInit{
  constructor(private rendezVousService:RendezVousService,private activatedRoute:ActivatedRoute){}

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
      idClient : this.currentUser._id,
      status : { $lt : 1 }
    }
    this.rendezVousService.filterRendezVous(page,filter).subscribe(data => {
      this.nombreElement = data.nombreElement;
      this.nombreMaxElement = data.nombreMaxElement;
      this.pageMax = data.pageMax;
      this.rendezVous = data.rendezVous;
    })
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
