import { Component, OnInit} from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-form-valider-demande',
  imports: [RouterModule,CommonModule,FormsModule],
  templateUrl: './form-valider-demande.component.html',
  styleUrl: './form-valider-demande.component.scss'
})
export class FormValiderDemandeComponent implements OnInit {
  changerDate = false;
  ngOnInit(): void {
    
  }
  switchChangeDate() : void {
    this.changerDate = !this.changerDate
  }
}
