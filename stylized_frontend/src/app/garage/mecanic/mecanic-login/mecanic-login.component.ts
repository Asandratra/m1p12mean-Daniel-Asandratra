import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FooterComponent } from 'src/app/components/footer/footer.component';

@Component({
  selector: 'app-mecanic-login',
  imports: [RouterModule,CommonModule,FormsModule,FooterComponent],
  templateUrl: './mecanic-login.component.html',
  styleUrl: './mecanic-login.component.scss'
})
export class MecanicLoginComponent {

}
