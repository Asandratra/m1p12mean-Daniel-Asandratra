import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

import { GarageService } from 'src/app/services/garage.service';

import { PaginationComponent } from 'src/app/components/pagination/pagination.component';

//Import from template
import { NzTableModule } from 'ng-zorro-antd/table';

@Component({
  selector: 'app-garages',
  imports: [RouterModule,CommonModule,NzTableModule,PaginationComponent],
  templateUrl: './garages.component.html',
  styleUrl: './garages.component.scss'
})
export class GaragesComponent implements OnInit {
  constructor(private garageService: GarageService, private activatedRoute: ActivatedRoute){}

  currentUser = {}
  page = 0;
  nombreElement = 0 ;
  nombreMaxElement = 0;
  pageMax = 0;
  garages :any[] = [];

  locationParam = '';
  searchParameters : any;

  router = inject(Router);

  ngOnInit(): void {
    const usercheck = JSON.parse(sessionStorage.getItem('currentUser')!);
    if(usercheck) this.currentUser = usercheck;
    else this.router.navigateByUrl('/client');
    this.activatedRoute.params.subscribe(params => {
      this.page = params['page'];
      this.loadGarages();
    });
  }

  loadGarages() : void {
    this.garageService.getListGarages(this.page, this.searchParameters).subscribe(data => {
      this.nombreElement = data.nombreElement;
      this.nombreMaxElement = data.nombreMaxElement;
      this.pageMax = data.pageMax;
      this.garages = data.garages;
    });
  }

}
