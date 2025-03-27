import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-details-travail',
  imports: [RouterModule,CommonModule,FormsModule],
  templateUrl: './details-travail.component.html',
  styleUrl: './details-travail.component.scss'
})
export class DetailsTravailComponent implements OnInit {
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
  ngOnInit(): void {
      
  }

}
