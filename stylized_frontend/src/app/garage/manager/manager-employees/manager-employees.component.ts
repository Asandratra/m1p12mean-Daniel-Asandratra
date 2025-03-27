import { Component, OnInit} from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PaginationComponent } from 'src/app/components/pagination/pagination.component';

@Component({
  selector: 'app-manager-employees',
  imports: [RouterModule,CommonModule,FormsModule,PaginationComponent],
  templateUrl: './manager-employees.component.html',
  styleUrl: './manager-employees.component.scss'
})
export class ManagerEmployeesComponent implements OnInit{
  
  ngOnInit(): void {
    
  }
}
