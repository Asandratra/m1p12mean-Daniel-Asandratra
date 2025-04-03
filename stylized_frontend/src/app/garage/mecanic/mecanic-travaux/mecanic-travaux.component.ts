import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PaginationComponent } from 'src/app/components/pagination/pagination.component';
import { TravailService } from 'src/app/services/travail.service';

@Component({
  selector: 'app-mecanic-travaux',
  imports: [RouterModule,CommonModule,FormsModule,PaginationComponent],
  templateUrl: './mecanic-travaux.component.html',
  styleUrl: './mecanic-travaux.component.scss'
})
export class MecanicTravauxComponent implements OnInit{
  page = 1;
  pageMax = 1;
  travaux : any[] = [];
  currentUser: any = {};

  constructor(
    private travailService:TravailService,
    private activatedRoute:ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.currentUser = JSON.parse(sessionStorage.getItem('currentUser'))
    this.activatedRoute.params.subscribe(params => {
      this.page = params['page'];
      this.loadTravaux(this.page);
    })
  }

  loadTravaux(page:number): void {
    const travailFilter = {
      selectedMecanicien: this.currentUser._id
    };
    this.travailService.filterTravail(page, travailFilter).subscribe(data => {
      this.pageMax = data.pageMax;
      this.travaux = data.travaux;
    })
  }
}
