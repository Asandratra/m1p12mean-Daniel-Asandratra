import { Component, OnInit} from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PaginationComponent } from 'src/app/components/pagination/pagination.component';

@Component({
  selector: 'app-manager-rendez-vous',
  imports: [RouterModule,CommonModule,FormsModule,PaginationComponent],
  templateUrl: './manager-rendez-vous.component.html',
  styleUrl: './manager-rendez-vous.component.scss'
})
export class ManagerRendezVousComponent implements OnInit{
  rendezVous : any[] = [
  ]
  ngOnInit(): void {
    
  }
}
