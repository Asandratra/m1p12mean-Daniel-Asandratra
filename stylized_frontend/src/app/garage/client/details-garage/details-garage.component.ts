import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-details-garage',
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './details-garage.component.html',
  styleUrl: './details-garage.component.scss'
})
export class ClientDetailsGarageComponent implements OnInit{
  ngOnInit(): void {
    
  }
}
