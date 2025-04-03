import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PaginationComponent } from 'src/app/components/pagination/pagination.component';
import { TravailService } from 'src/app/services/travail.service';

@Component({
  selector: 'app-manager-travaux',
  imports: [RouterModule,CommonModule,FormsModule,PaginationComponent],
  templateUrl: './manager-travaux.component.html',
  styleUrl: './manager-travaux.component.scss'
})
export class ManagerTravauxComponent implements OnInit{
  page = 1;
  pageMax = 1;
  travaux : any[] = [
    {
      _id : 1,
      matricule : '9184 TAA',
      nomClient : 'Rakoto Bary',
      telClient : '0338194738',
      idGarage : {
        _id : 1,
        localisation : 'Analakely'
      },
      dateDebut : new Date(),
      estimationFin : new Date(new Date().getTime() + 240*60000),
      prix : '50000',
      resteAPayer : '25000'
    }
  ];

  constructor(
    private travailService:TravailService,
    private activatedRoute:ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.page = params['page'];
      this.loadTravaux(this.page);
    });
  }

  loadTravaux(page:number): void {
    const travailFilter = {};
    this.travailService.filterTravail(page, travailFilter).subscribe(data => {
      this.pageMax = data.pageMax;
      this.travaux = data.travaux;
    })
  }

}
