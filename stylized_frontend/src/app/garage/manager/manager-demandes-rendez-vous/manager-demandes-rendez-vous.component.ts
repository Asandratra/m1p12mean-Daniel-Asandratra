import { Component, OnInit} from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PaginationComponent } from 'src/app/components/pagination/pagination.component';


@Component({
  selector: 'app-manager-demandes-rendez-vous',
  imports: [RouterModule,CommonModule,FormsModule,PaginationComponent],
  templateUrl: './manager-demandes-rendez-vous.component.html',
  styleUrl: './manager-demandes-rendez-vous.component.scss'
})
export class ManagerDemandesRendezVousComponent implements OnInit{
  
  ngOnInit(): void {
    
  }
}
