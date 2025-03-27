import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-mecanic-details-travail',
  imports: [RouterModule,CommonModule,FormsModule],
  templateUrl: './mecanic-details-travail.component.html',
  styleUrl: './mecanic-details-travail.component.scss'
})
export class MecanicDetailsTravailComponent implements OnInit  {
  travail : any = {}
  diagnostics : any[] = [
    {
      _id : 1,
      idTravail : {},
      idService : {
        _id : 1,
        label : "Verification de moteur",
        duree : 30,
        prix : {
          montant : 30000
        }
      }
    }
  ]

  affiliations : any[] = [
    {
      nom : 'Rabe',
      prenom : 'Njila'
    },
    {
      nom : 'Andria',
      prenom : 'Koto'
    },
    {
      nom : 'Rahaja',
      prenom : 'Tina'
    },
  ]
  ngOnInit(): void {
      
  }

}
