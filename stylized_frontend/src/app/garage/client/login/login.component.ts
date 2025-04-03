import { Component,OnInit,inject } from '@angular/core';
import { RouterModule,Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FooterComponent } from 'src/app/components/footer/footer.component';

import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-login',
  imports: [RouterModule,FooterComponent,CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class ClientLoginComponent implements OnInit {
  signupInfo = {
    username : 'asandratra',
    motdepasse : 'asaminya'
  };

  errorMessage = '';

  router = inject(Router);

  constructor(private clientService: ClientService){}

  ngOnInit(): void {
    sessionStorage.clear();
  }

  signup(): void {
    this.errorMessage='';
    if(this.signupInfo.username && this.signupInfo.motdepasse) {
      this.clientService.signupClient(this.signupInfo).subscribe((data) => {
        sessionStorage.setItem("currentUser",JSON.stringify(data));
        this.router.navigateByUrl('client/garages/1');
      }, error=>{
        this.errorMessage="Authentification impossible";
      });
    }
    this.signupInfo.username='';
    this.signupInfo.motdepasse='';
  }
}
