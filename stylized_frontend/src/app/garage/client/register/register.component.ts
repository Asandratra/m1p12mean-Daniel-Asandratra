import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from 'src/app/components/footer/footer.component';

@Component({
  selector: 'app-register',
  imports: [RouterModule, FooterComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class ClientRegisterComponent {

}
