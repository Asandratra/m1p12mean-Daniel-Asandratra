// angular import
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Project import
import { GuestLayoutComponent } from './theme/layouts/guest-layout/guest-layout.component';
import { MecanicLayoutComponent } from './theme/layouts/mecanic-layout/mecanic-layout.component';
import { ManagerLayoutComponent } from './theme/layouts/manager-layout/manager-layout.component';

const routes: Routes = [
  {
    path : '',
    redirectTo : '/client/login',
    pathMatch : 'full'
  },
  {
    path : 'client/login',
    loadComponent: () => import('./garage/client/login/login.component').then((c) => c.ClientLoginComponent)
  },
  {
    path: 'client/register',
    loadComponent: () => import('./garage/client/register/register.component').then((c) => c.ClientRegisterComponent)
  },
  {
    path : 'employee/login',
    loadComponent: () => import('./garage/mecanic/mecanic-login/mecanic-login.component').then((c) => c.MecanicLoginComponent)
  },
  {
    path : 'employee/register',
    loadComponent: () => import('./garage/mecanic/mecanic-register/mecanic-register.component').then((c) => c.MecanicRegisterComponent)
  },
  {
    path: 'client',
    component: GuestLayoutComponent,
    children: [
      {
        path: '',
        redirectTo : '/client/garages/1',
        pathMatch : 'full'
      },
      {
        path: 'garages/:page',
        loadComponent: () => import('./garage/client/garages/garages.component').then((c) => c.GaragesComponent)
      },
      {
        path: 'garage/:id',
        loadComponent: () => import('./garage/client/details-garage/details-garage.component').then((c) => c.ClientDetailsGarageComponent)
      },
      {
        path: 'rendez-vous/:page',
        loadComponent: () => import('./garage/client/rendez-vous/rendez-vous.component').then((c) => c.ClientRendezVousComponent)
      },
      {
        path: 'demandes-rendez-vous/:page',
        loadComponent: () => import('./garage/client/rendez-vous/client-demandes-rendez-vous/client-demandes-rendez-vous.component').then((c) => c.ClientDemandesRendezVousComponent)
      },
      {
        path: 'travaux/:page',
        loadComponent: () => import('./garage/client/travaux/travaux.component').then((c) => c.ClientTravauxComponent)
      },
      {
        path: 'travail/:id',
        loadComponent: () => import('./garage/client/details-travail/details-travail.component').then((c) => c.DetailsTravailComponent)
      }
    ]
  },
  {
    path: 'mecanic',
    component: MecanicLayoutComponent,
    children: [
      {
        path: '',
        redirectTo : '/mecanic/travaux/1',
        pathMatch : 'full'
      },
      {
        path: 'travaux/:page',
        loadComponent: () => import('./garage/mecanic/mecanic-travaux/mecanic-travaux.component').then((c) => c.MecanicTravauxComponent)
      },
      {
        path: 'travail/:id',
        loadComponent: () => import('./garage/mecanic/mecanic-details-travail/mecanic-details-travail.component').then((c) => c.MecanicDetailsTravailComponent)
      }
    ]
  },
  {
    path: 'manager',
    component: ManagerLayoutComponent,
    children: [
      {
        path: '',
        redirectTo : '/manager/travaux/1',
        pathMatch : 'full'
      },
      {
        path: 'travaux/:page',
        loadComponent: () => import('./garage/manager/manager-travaux/manager-travaux.component').then((c) => c.ManagerTravauxComponent)
      },
      {
        path: 'travail/:id',
        loadComponent: () => import('./garage/manager/manager-details-travaux/manager-details-travaux.component').then((c) => c.ManagerDetailsTravauxComponent)
      },
      {
        path: 'rendez-vous/:page',
        loadComponent: () => import('./garage/manager/manager-rendez-vous/manager-rendez-vous.component').then((c) => c.ManagerRendezVousComponent)
      },
      {
        path: 'demandes-rendez-vous/:page',
        loadComponent: () => import('./garage/manager/manager-demandes-rendez-vous/manager-demandes-rendez-vous.component').then((c) => c.ManagerDemandesRendezVousComponent)
      },
      {
        path: 'employees/:page',
        loadComponent: () => import('./garage/manager/manager-employees/manager-employees.component').then((c) => c.ManagerEmployeesComponent)
      },
      {
        path: 'employee/:id',
        loadComponent: () => import('./garage/manager/manager-details-employee/manager-details-employee.component').then((c) => c.ManagerDetailsEmployeeComponent)
      },
      {
        path: 'creer-travail',
        loadComponent: () => import('./garage/manager/form-travail/form-travail.component').then((c) => c.FormTravailComponent)
      },
      {
        path: 'valider-demande/:id',
        loadComponent: () => import('./garage/manager/form-valider-demande/form-valider-demande.component').then((c) => c.FormValiderDemandeComponent)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
