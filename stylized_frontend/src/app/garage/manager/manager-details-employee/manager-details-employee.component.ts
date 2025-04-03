import { Component,OnInit,inject } from '@angular/core';
import { Router,RouterModule,ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EmployeeService } from 'src/app/services/employee.service';
import { CongeService } from 'src/app/services/conge.service';


import { NgMultiSelectDropDownModule,IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-manager-details-employee',
  imports: [RouterModule,CommonModule,FormsModule,NgMultiSelectDropDownModule],
  templateUrl: './manager-details-employee.component.html',
  styleUrl: './manager-details-employee.component.scss'
})
export class ManagerDetailsEmployeeComponent implements OnInit {
  constructor(private employeeService:EmployeeService,private congeService:CongeService,private activatedRoute:ActivatedRoute){}
  errorMessage='';
  idEmployee : string;

  currentUser: any;
  congeIntervalle = false;
  debutConge : any;
  finConge : any;

  employee: any;

  router = inject(Router);

//Elements pour les multiselect de formulaire d'ajout de spécialité
  servicesDropdownList = [];
  selectedService = [];
  dropdownSettings : IDropdownSettings = {};

  ngOnInit(): void {
    const checkUser = JSON.parse(sessionStorage.getItem('currentUser'));
    if(checkUser) this.currentUser=checkUser;
    else this.router.navigateByUrl('manager');
    this.activatedRoute.params.subscribe(params => {
      this.idEmployee = params['id'];
      this.loadEmployee(this.idEmployee);
    });

//Exemple pour l'ajout de specialite a l'employee
    this.servicesDropdownList = [
      { item_id: 1, item_text: 'Service 1' },
      { item_id: 2, item_text: 'Service 2' },
      { item_id: 3, item_text: 'Service 3' },
      { item_id: 4, item_text: 'Service 4' },
      { item_id: 5, item_text: 'Service 5' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Tout séléctionner',
      unSelectAllText: 'Déselectionner',
      itemsShowLimit: 5,
      allowSearchFilter: true
    };
//Fin d'option de multiselect
  }

  switchCongeIntervalle() : void {
    this.congeIntervalle = !this.congeIntervalle;
  }
  loadEmployee(id:string) : void {
    this.employeeService.getDetailsEmployeeAsManager(id).subscribe(data => {
      this.employee=data;
    })
  }
  
  enregistrerConge() : void {
    this.errorMessage='';
    var conge = {
      idEmployee : this.idEmployee,
      debut : Date,
      fin: Date
    }
    if(this.congeIntervalle){
      if(this.debutConge && this.finConge){
        const debut = new Date(this.debutConge);
        const fin = new Date(this.finConge);
        if(fin<debut) this.errorMessage='La date de fin de congé ne peut pas être avant la date de début';
        else{
          conge.debut=this.debutConge;
          conge.fin=this.finConge;
          this.congeService.createConge(conge).subscribe(data=>{
            alert('Congé enregistré!');
            this.debutConge='';
            this.finConge='';
            this.congeIntervalle=false;
            this.loadEmployee(this.idEmployee);
          },error=>{
            this.errorMessage=error.message;
          })
        }
      }
      else{
        this.errorMessage="Veillez bien spécifier les dates de congé";
      }
    }
    else{
      if(this.debutConge){
        conge.debut=this.debutConge;
        conge.fin=this.debutConge;
        this.congeService.createConge(conge).subscribe(data=>{
          alert('Congé enregistré!');
          this.debutConge='';
          this.finConge='';
          this.loadEmployee(this.idEmployee);
          this.loadEmployee(this.idEmployee);
        },error=>{
          this.errorMessage=error.message;
        })
      }
      else{
        this.errorMessage="Veillez bien spécifier le jour de congé";
      }
    }
  }
}
