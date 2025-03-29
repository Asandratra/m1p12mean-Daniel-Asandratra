import { Component, OnInit, inject } from '@angular/core';
import { Router,RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EmployeeService } from 'src/app/services/employee.service';
import { GarageService } from 'src/app/services/garage.service';
import { RoleService }  from 'src/app/services/role.service';

import { FooterComponent } from 'src/app/components/footer/footer.component';

@Component({
  selector: 'app-mecanic-register',
  imports: [RouterModule,CommonModule,FormsModule,FooterComponent],
  templateUrl: './mecanic-register.component.html',
  styleUrl: './mecanic-register.component.scss'
})
export class MecanicRegisterComponent implements OnInit {
  signinInfo = {
    username : '',
    nom : '',
    prenom : '',
    tel : '',
    idRole : '',
    idGarage : '',
    motdepasse : '',
    secondMotDePasse : '',
  };

  errorMessage = '';

  garages : any[];
  roles : any[];

  router = inject(Router);

  constructor(private employeeService:EmployeeService, private garageService:GarageService, private roleService:RoleService){}

  ngOnInit(): void {
    sessionStorage.clear();
    this.loadGarages();
    this.loadRoles();
  }

  loadGarages(): void {
    this.garageService.getAllGarages().subscribe(data => {
      this.garages=data;
    });
  }

  loadRoles(): void {
    this.roleService.getAllRoles().subscribe(data => {
      this.roles=data;
    })
  }

  signin(): void {
    this.errorMessage='';
    if(this.signinInfo.username && this.signinInfo.nom && this.signinInfo.prenom && this.signinInfo.tel && this.signinInfo.idGarage && this.signinInfo.idRole && this.signinInfo.motdepasse && this.signinInfo.secondMotDePasse) {
      this.employeeService.signinEmployee(this.signinInfo).subscribe(data => {
        alert('Inscription validée!');
        this.router.navigateByUrl('employee/login');
      }, error=>{
        this.errorMessage=error.getMessage();
        alert(this.errorMessage);
      });
    }
    this.signinInfo.username='';
    this.signinInfo.nom='';
    this.signinInfo.prenom='';
    this.signinInfo.tel='';
    this.signinInfo.idGarage='';
    this.signinInfo.idRole='';
    this.signinInfo.motdepasse='';
    this.signinInfo.secondMotDePasse='';
  }
}
