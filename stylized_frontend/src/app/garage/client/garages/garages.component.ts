import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
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
  garages: any[] = [
    {
      _id : '1',
      localisation : 'Analakeky',
      place : 6
    },
    {
      _id : '2',
      localisation : 'Antanimena',
      place : 8
    }
  ]
  ngOnInit(): void {
    
  }
}
