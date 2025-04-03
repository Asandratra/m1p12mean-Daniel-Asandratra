import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule,IDropdownSettings } from 'ng-multiselect-dropdown';
import { ServiceService } from 'src/app/services/service.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { TravailService } from 'src/app/services/travail.service';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-form-travail',
  imports: [RouterModule,CommonModule,FormsModule,NgMultiSelectDropDownModule],
  templateUrl: './form-travail.component.html',
  styleUrl: './form-travail.component.scss'
})
export class FormTravailComponent implements OnInit{
  errorMessage=''
  idClient : any;
  matricule : string = '';
  debutTravail : Date;

  isClientConnu : boolean = false;

  clients = [];
  services = [];
  servicesDropdownList = [];
  mecanicienDropdownList = [];

  selectedService = [];
  selectedMecanicien = [];

  dropdownSettings : IDropdownSettings = {};

  router = inject(Router);

  constructor(
    private clientService:ClientService,
    private serviceService:ServiceService,
    private employeeService:EmployeeService,
    private travailService:TravailService,
  ) {}

  ngOnInit() {
    this.loadClients();
    this.loadServices();
    this.loadMecaniciens();
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Tout séléctionner',
      unSelectAllText: 'Déselectionner',
      allowSearchFilter: true
    };
  }

  loadClients(): void {
    this.clientService.getAllClient().subscribe(data => {
      this.clients = data;
    })
  }

  loadServices(): void {
    this.serviceService.getAllServices().subscribe(data => {
      this.services = data;
      this.servicesDropdownList = data.map(element => ({
        item_id: element._id,
        item_text: element.label,
      }));
    })
  }

  loadMecaniciens(): void {
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    this.employeeService.getMecanoByGarage(currentUser.idGarage._id).subscribe(data => {
      this.mecanicienDropdownList = data.map(element => ({
          item_id: element._id,
          item_text: `${element.nom} ${element.prenom}`,
      }));
    })
  }

  checkTravailForm(): boolean {
    return (
      this.idClient &&
      this.matricule !== '' &&
      this.debutTravail && new Date(this.debutTravail) > new Date() &&
      this.selectedService.length > 0 &&
      this.selectedMecanicien.length > 0
    )
  }

  processData(): any {
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    const serviceIds = this.selectedService.map(service => service.item_id);
    const mecanoIds = this.selectedMecanicien.map(mecano => mecano.item_id);
    let total = 0;
    for(let serviceId of this.selectedService){
      const service = this.services.find(s => s._id === serviceId.item_id);
      if (service) {
        total += service.prix;
      }
    }
    return {
      idClient: this.idClient,
      matricule: this.matricule,
      idGarage: currentUser.idGarage._id,
      debutTravail: this.debutTravail,
      prix: total,
      selectedService: serviceIds,
      selectedMecanicien: mecanoIds
    }
  }

  createTravail(): void {
    this.errorMessage = '';
    if(this.checkTravailForm()) {
      const travail = this.processData();
      this.travailService.createTravail(travail).subscribe(data => {
        alert('Sauvegarde réussi!');
        this.router.navigateByUrl('manager/travaux/1');
      }, error => {
        this.errorMessage = error.message;
      })
    }
  }

  test() {
    console.log("test: ", this.selectedService);

  }
}
