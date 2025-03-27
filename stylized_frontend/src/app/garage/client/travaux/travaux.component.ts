import { Component,OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PaginationComponent } from 'src/app/components/pagination/pagination.component';

@Component({
  selector: 'app-travaux',
  imports: [RouterModule,CommonModule,FormsModule,PaginationComponent],
  templateUrl: './travaux.component.html',
  styleUrl: './travaux.component.scss'
})
export class ClientTravauxComponent implements OnInit{
  travaux : any[] = [
    {
      _id : 1,
      matricule : '9184 TAA',
      idGarage : {
        _id : 1,
        localisation : 'Analakely'
      },
      dateDebut : new Date(),
      estimationFin : new Date(new Date().getTime() + 240*60000),
      prix : '50000',
      resteAPayer : '25000'
    }
  ]
  ngOnInit(): void {
    
  }
}
