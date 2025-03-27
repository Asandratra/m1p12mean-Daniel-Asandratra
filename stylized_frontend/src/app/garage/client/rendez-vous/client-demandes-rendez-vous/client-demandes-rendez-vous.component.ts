import { Component, OnInit} from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PaginationComponent } from 'src/app/components/pagination/pagination.component';

@Component({
  selector: 'app-client-demandes-rendez-vous',
  imports: [RouterModule,CommonModule,FormsModule,PaginationComponent],
  templateUrl: './client-demandes-rendez-vous.component.html',
  styleUrl: './client-demandes-rendez-vous.component.scss'
})
export class ClientDemandesRendezVousComponent implements OnInit{
  
  ngOnInit(): void {
    
  }
}
