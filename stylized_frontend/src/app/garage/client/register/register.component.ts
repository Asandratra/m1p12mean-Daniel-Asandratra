import { Component,OnInit,inject } from '@angular/core';
import { Router,RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ClientService } from 'src/app/services/client.service';

import { FooterComponent } from 'src/app/components/footer/footer.component';

@Component({
  selector: 'app-register',
  imports: [RouterModule, CommonModule, FormsModule, FooterComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class ClientRegisterComponent implements OnInit {
  signinInfo = {
    username : '',
    nom : '',
    prenom : '',
    tel : '',
    motdepasse : '',
    secondMotDePasse : '',
  };

  errorMessage = '';

  router = inject(Router);

  constructor(private clientService: ClientService){}

  ngOnInit(): void {
    sessionStorage.clear();
  }

  signin(): void {
    this.errorMessage='';
    if(this.signinInfo.username && this.signinInfo.nom && this.signinInfo.prenom && this.signinInfo.tel && this.signinInfo.motdepasse && this.signinInfo.secondMotDePasse) {
      this.clientService.signinClient(this.signinInfo).subscribe(data => {
        alert('Inscription validée!');
        this.router.navigateByUrl('client/login');
      }, error=>{
        this.errorMessage=error.message;
      });
    }
    this.signinInfo.username='';
    this.signinInfo.nom='';
    this.signinInfo.prenom='';
    this.signinInfo.tel='';
    this.signinInfo.motdepasse='';
    this.signinInfo.secondMotDePasse='';
  }
}
