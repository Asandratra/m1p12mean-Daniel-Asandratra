import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from 'src/app/components/footer/footer.component';

@Component({
  selector: 'app-mecanic-register',
  imports: [RouterModule,FooterComponent],
  templateUrl: './mecanic-register.component.html',
  styleUrl: './mecanic-register.component.scss'
})
export class MecanicRegisterComponent {

}
