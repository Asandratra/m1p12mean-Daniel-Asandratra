import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule,IDropdownSettings } from 'ng-multiselect-dropdown';
import { ServiceService } from 'src/app/services/service.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { TravailService } from 'src/app/services/travail.service';
import { PaiementService } from 'src/app/services/paiement.service';

@Component({
  selector: 'app-manager-details-travaux',
  imports: [RouterModule,CommonModule,FormsModule,NgMultiSelectDropDownModule],
  templateUrl: './manager-details-travaux.component.html',
  styleUrl: './manager-details-travaux.component.scss'
})
export class ManagerDetailsTravauxComponent implements OnInit{
  serviceError = '';
  mecanoError = '';
  paiementError = '';

  initPaiement = {
    idTravail: '',
    date: new Date(),
    montant: 0,
  }
  paiement = { ...this.initPaiement }

  idTravail: string = '';
  travail : any = {};
  diagnostics : any[] = [];
  affiliations : any[] = [];

  services = [];
//Elements pour les multiselect
  servicesDropdownList = [];
  mecanicienDropdownList = [];

  selectedService = [];
  selectedMecanicien = [];

  dropdownSettings : IDropdownSettings = {};

  constructor(
    private activatedRoute:ActivatedRoute,
    private serviceService:ServiceService,
    private employeeService:EmployeeService,
    private travailService:TravailService,
    private paiementService:PaiementService,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.idTravail = params['id'];
      this.loadTravail(this.idTravail);
    });
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Tout séléctionner',
      unSelectAllText: 'Déselectionner',
      itemsShowLimit: 5,
      allowSearchFilter: true
    };
  }

  syncData(): void {
    this.diagnostics = this.travail.selectedService;
    this.affiliations = this.travail.selectedMecanicien;
    this.servicesDropdownList = this.servicesDropdownList.filter(service => !this.diagnostics.some(d => d._id === service.item_id))
    this.mecanicienDropdownList = this.mecanicienDropdownList.filter(mecano => !this.affiliations.some(a => a._id === mecano.item_id))
  }

  loadServices(): void {
    this.serviceService.getAllServices().subscribe(data => {
      this.services = data;
      this.servicesDropdownList = data
        .filter(service => !this.diagnostics.some(d => d._id === service._id))
        .map(element => ({
          item_id: element._id,
          item_text: element.label,
        }));
    })
  }

  loadMecaniciens(): void {
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    this.employeeService.getMecanoByGarage(currentUser.idGarage._id).subscribe(data => {
      this.mecanicienDropdownList = data
        .filter(mecano => !this.affiliations.some(a => a._id === mecano._id))
        .map(element => ({
          item_id: element._id,
          item_text: `${element.nom} ${element.prenom}`,
        }));
    })
  }

  loadTravail(idTravail: string): void {
    this.travailService.getTravailById(idTravail).subscribe(data => {
      this.travail = data;
      this.diagnostics = data.selectedService;
      this.affiliations = data.selectedMecanicien;
      this.paiement.idTravail = this.travail._id;
      this.loadServices();
      this.loadMecaniciens();
    })
  }

  addServices(): void {
    this.serviceError = '';
    console.log("addServices: ", this.selectedService);

    if(this.selectedService.length > 0) {
      const serviceIds = this.selectedService.map(service => service.item_id);
      this.travailService.addServicesToTravail(this.travail._id, serviceIds).subscribe(data => {
        this.travail = data;
        this.syncData();
        this.selectedService = [];
        alert('Mise a jour réussie');
      }, error => {
        this.serviceError = error.message;
      })
    } else {
      this.serviceError = 'Aucun service choisi';
    }
  }

  addMecano(): void {
    this.mecanoError = '';
    if(this.selectedMecanicien.length > 0) {
      const mecanoIds = this.selectedMecanicien.map(mecano => mecano.item_id);
      this.travailService.addMecanoToTravail(this.travail._id, mecanoIds).subscribe(data => {
        this.travail = data;
        this.syncData();
        this.selectedMecanicien = [];
        alert('Mise a jour réussie');
      }, error => {
        this.mecanoError = error.message;
      })
    } else {
      this.mecanoError = 'Aucun mécanicien choisi';
    }
  }

  addPaiement(): void {
    this.paiementError = '';
    if(this.paiement.date && this.paiement.montant > 0) {
      this.paiementService.addPaiement(this.paiement).subscribe(data => {
        alert('Sauvegarde réussie');
        this.paiement = { ...this.initPaiement };
      }, error => {
        this.paiementError = error.message;
      })
    } else {
      this.paiementError = 'Champ(s) invalid(s)';
    }
  }

  test() {
    console.log("test: ", this.affiliations);

  }
}
