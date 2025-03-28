import { Component, OnInit, inject } from '@angular/core';
import { Router,RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EmployeeService } from 'src/app/services/employee.service';

import { FooterComponent } from 'src/app/components/footer/footer.component';

@Component({
  selector: 'app-mecanic-login',
  imports: [RouterModule,CommonModule,FormsModule,FooterComponent],
  templateUrl: './mecanic-login.component.html',
  styleUrl: './mecanic-login.component.scss'
})
export class MecanicLoginComponent implements OnInit {
  signupInfo = {
    username : 'managerAntanimena',
    motdepasse : 'garagiste1'
  };

  authentificationError = ''

  router = inject(Router);

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    sessionStorage.clear();
  }

  signup(): void {
    this.authentificationError='';
    if(this.signupInfo.username && this.signupInfo.motdepasse) {
      this.employeeService.signupEmployee(this.signupInfo).subscribe((data) => {
        sessionStorage.setItem("currentUser", JSON.stringify(data));
        sessionStorage.setItem("roleEmployee",JSON.stringify(data.idRole));
        if(data.idRole.label=='Manager'){
          this.router.navigateByUrl(`manager/travaux/1`);
        }
      }, error=>{
        this.authentificationError=error.getMessage();
        alert(this.authentificationError);
      });
    }
    this.signupInfo.username='';
    this.signupInfo.motdepasse='';
  }

}
