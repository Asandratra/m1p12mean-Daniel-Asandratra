import { Component, OnInit, inject} from '@angular/core';
import { Router,RouterModule,ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EmployeeService } from 'src/app/services/employee.service';

import { PaginationComponent } from 'src/app/components/pagination/pagination.component';

@Component({
  selector: 'app-manager-employees',
  imports: [RouterModule,CommonModule,FormsModule,PaginationComponent],
  templateUrl: './manager-employees.component.html',
  styleUrl: './manager-employees.component.scss'
})
export class ManagerEmployeesComponent implements OnInit{
  constructor(private employeeService:EmployeeService, private activatedRoute:ActivatedRoute){}

  currentUser : any;
  employees : any;

  page = 0;
  nombreElement = 0 ;
  nombreMaxElement = 0;
  pageMax = 0;

  router = inject(Router);

  ngOnInit(): void {
    const checkUser = JSON.parse(sessionStorage.getItem('currentUser')!);
    if(checkUser) this.currentUser = checkUser;
    else this.router.navigateByUrl('manager');
    this.activatedRoute.params.subscribe(params => {
      this.page = params['page'];
      this.loadEmployees(this.page);
    });
  }

  loadEmployees(page:number) : void {
    const employeeFilter = {
      idGarage : this.currentUser.idGarage._id,
      estActif : true
    }
    this.employeeService.filterEmployees(page,employeeFilter).subscribe(data => {
      this.nombreElement = data.nombreElement;
      this.nombreMaxElement = data.nombreMaxElement;
      this.page=data.page;
      this.pageMax = data.pageMax;
      this.employees = data.employees;
    })
  }
}
