import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule,IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-form-travail',
  imports: [RouterModule,CommonModule,FormsModule,NgMultiSelectDropDownModule],
  templateUrl: './form-travail.component.html',
  styleUrl: './form-travail.component.scss'
})
export class FormTravailComponent implements OnInit{
  nomClient : string = '';
  telClient : string = '';
  idClient : any; 

  isClientConnu : boolean = false;

  servicesDropdownList = [];
  mecanicienDropdownList = [];

  selectedService = [];
  selectedMecanicien = [];

  dropdownSettings : IDropdownSettings = {};

  ngOnInit() {
    this.nomClient = '';
    this.telClient = '';
    this.idClient = ''; 
  
    this.isClientConnu = false;

    const checkClient = JSON.parse(sessionStorage.getItem("clientDeTravail"));
    if(checkClient){
      this.nomClient = `${checkClient.nom} ${checkClient.prenom}`;
      this.telClient = checkClient.tel;
      this.idClient = checkClient._id;

      this.isClientConnu = true;
      sessionStorage.removeItem("clientDuTravail");
    }
    
    this.servicesDropdownList = [
      { item_id: 1, item_text: 'Service 1' },
      { item_id: 2, item_text: 'Service 2' },
      { item_id: 3, item_text: 'Service 3' },
      { item_id: 4, item_text: 'Service 4' },
      { item_id: 5, item_text: 'Service 5' }
    ];
    this.mecanicienDropdownList = [
      { item_id: 1, item_text: 'Mecanicien 1' },
      { item_id: 2, item_text: 'Mecanicien 2' },
      { item_id: 3, item_text: 'Mecanicien 3' },
      { item_id: 4, item_text: 'Mecanicien 4' },
      { item_id: 5, item_text: 'Mecanicien 5' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Tout séléctionner',
      unSelectAllText: 'Déselectionner',
      allowSearchFilter: true
    };
  }
}
