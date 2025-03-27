import { Component,OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PaginationComponent } from 'src/app/components/pagination/pagination.component';

@Component({
  selector: 'app-manager-travaux',
  imports: [RouterModule,CommonModule,FormsModule,PaginationComponent],
  templateUrl: './manager-travaux.component.html',
  styleUrl: './manager-travaux.component.scss'
})
export class ManagerTravauxComponent implements OnInit{
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
  ngOnInit(): void {
    
  }

}
