import { Component,OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule,IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-manager-details-travaux',
  imports: [RouterModule,CommonModule,FormsModule,NgMultiSelectDropDownModule],
  templateUrl: './manager-details-travaux.component.html',
  styleUrl: './manager-details-travaux.component.scss'
})
export class ManagerDetailsTravauxComponent implements OnInit{
  travail : any = {}
  diagnostics : any[] = [
    {
      _id : 1,
      idTravail : {},
      idService : {
        _id : 1,
        label : "Verification de moteur",
        duree : 30,
        prix : {
          montant : 30000
        }
      }
    }
  ];
  affiliations : any[] = [
    {
      nom : 'Rabe',
      prenom : 'Njila'
    },
    {
      nom : 'Andria',
      prenom : 'Koto'
    },
    {
      nom : 'Rahaja',
      prenom : 'Tina'
    },
  ];
  
//Elements pour les multiselect
  servicesDropdownList = [];
  mecanicienDropdownList = [];

  selectedService = [];
  selectedMecanicien = [];

  dropdownSettings : IDropdownSettings = {};

  ngOnInit(): void {
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
      itemsShowLimit: 5,
      allowSearchFilter: true
    };
  }
}
