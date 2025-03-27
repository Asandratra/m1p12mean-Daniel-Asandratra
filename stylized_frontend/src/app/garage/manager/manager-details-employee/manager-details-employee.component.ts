import { Component,OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule,IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-manager-details-employee',
  imports: [RouterModule,CommonModule,FormsModule,NgMultiSelectDropDownModule],
  templateUrl: './manager-details-employee.component.html',
  styleUrl: './manager-details-employee.component.scss'
})
export class ManagerDetailsEmployeeComponent {
  specialities : any[] = [
    {
      idService : {
        _id : 1,
        label : 'Lavage'
      }
    }
  ]
  congeIntervalle = false;

//Elements pour les multiselect
  servicesDropdownList = [];

  selectedService = [];

  dropdownSettings : IDropdownSettings = {};

  ngOnInit(): void {
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
  }

  switchCongeIntervalle() : void {
    this.congeIntervalle = !this.congeIntervalle;
  }
}
