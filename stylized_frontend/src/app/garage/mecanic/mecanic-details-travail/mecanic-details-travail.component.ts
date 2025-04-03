import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TravailService } from 'src/app/services/travail.service';


@Component({
  selector: 'app-mecanic-details-travail',
  imports: [RouterModule,CommonModule,FormsModule],
  templateUrl: './mecanic-details-travail.component.html',
  styleUrl: './mecanic-details-travail.component.scss'
})
export class MecanicDetailsTravailComponent implements OnInit  {
  idTravail: string = '';
  travail : any = {}
  diagnostics : any[] = []
  affiliations : any[] = []

  constructor(
    private activateRoute: ActivatedRoute,
    private travailService:TravailService,
  ) {}

  ngOnInit(): void {
      this.activateRoute.params.subscribe(params => {
        this.idTravail = params['id'];
        this.loadTravail(this.idTravail);
      })
  }

  loadTravail(idTravail: string): void {
    this.travailService.getTravailById(idTravail).subscribe(data => {
      this.travail = data;
      this.diagnostics = data.selectedService;
      this.affiliations = data.selectedMecanicien;
    })
  }
}
