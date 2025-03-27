import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from 'src/app/components/footer/footer.component';

@Component({
  selector: 'app-login',
  imports: [RouterModule, FooterComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class ClientLoginComponent {

}
