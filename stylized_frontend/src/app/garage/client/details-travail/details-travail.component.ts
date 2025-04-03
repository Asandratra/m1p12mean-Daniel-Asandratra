import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TravailService } from 'src/app/services/travail.service';

@Component({
  selector: 'app-details-travail',
  imports: [RouterModule,CommonModule,FormsModule],
  templateUrl: './details-travail.component.html',
  styleUrl: './details-travail.component.scss'
})
export class DetailsTravailComponent implements OnInit {
  idTravail: string = '';
  travail : any = {}
  diagnostics : any[] = []

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
    })
  }
}
