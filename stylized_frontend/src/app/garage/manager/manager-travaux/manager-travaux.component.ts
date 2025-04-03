import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PaginationComponent } from 'src/app/components/pagination/pagination.component';
import { TravailService } from 'src/app/services/travail.service';

@Component({
  selector: 'app-manager-travaux',
  imports: [RouterModule,CommonModule,FormsModule,PaginationComponent],
  templateUrl: './manager-travaux.component.html',
  styleUrl: './manager-travaux.component.scss'
})
export class ManagerTravauxComponent implements OnInit{
  page = 1;
  pageMax = 1;
  travaux : any[] = [];

  currentUser : any;

  status = ["En cours", "Terminé", "Supprimé"];

  errorMessage='';

  constructor(
    private travailService:TravailService,
    private activatedRoute:ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const checkUser = JSON.parse(sessionStorage.getItem("currentUser"));
    if(checkUser) this.currentUser=checkUser;
    this.activatedRoute.params.subscribe(params => {
      this.page = params['page'];
      this.loadTravaux(this.page);
    });
  }

  loadTravaux(page:number): void {
    const travailFilter = {
      idGarage : this.currentUser.idGarage,
      status : {
        $lt : 2
      }
    };
    this.travailService.filterTravail(page, travailFilter).subscribe(data => {
      this.pageMax = data.pageMax;
      this.travaux = data.travaux;
    })
  }

  terminerTravail(travailId:string) : void {
    this.travailService.updateStatusTravail(travailId,1).subscribe( success => {
      this.loadTravaux(this.page);
    }, error => {
      this.errorMessage=error.message;
    })
  }

  supprimerTravail(travailId:string) : void {
    this.travailService.updateStatusTravail(travailId,2).subscribe( success => {
      this.loadTravaux(this.page);
    }, error => {
      this.errorMessage=error.message;
    })
  }
}
