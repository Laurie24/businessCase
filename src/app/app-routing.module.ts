import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './components/about/about.component';
import {HomeComponent} from './components/home/home.component';
import {ConnexionComponent} from './components/connexion/connexion.component';
import {ContactComponent} from './components/contact/contact.component';
import {MentionsComponent} from './components/mentions/mentions.component';
import {PolitiqueComponent} from './components/politique/politique.component';
import {ConditionsGeneralesComponent} from './components/conditions-generales/conditions-generales.component';
import {SearchComponent} from './components/search/search.component';
import {DetailVoitureComponent} from './components/detail-voiture/detail-voiture.component';
import {ProfilComponent} from './components/profil/profil.component';
import {GererGarageComponent} from './components/gerer-garage/gerer-garage.component';
import {GererAnnonceComponent} from './components/gerer-annonce/gerer-annonce.component';
import {GererCompteComponent} from './components/gerer-compte/gerer-compte.component';
import {EditGarageComponent} from './components/edit-garage/edit-garage.component';
import {authInterceptorProviders} from './services/auth-interceptor.service';
import {RegisterComponent} from './components/register/register.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'mentions', component: MentionsComponent },
  { path: 'politique', component: PolitiqueComponent },
  { path: 'conditions', component: ConditionsGeneralesComponent },
  { path: 'search', component: SearchComponent  },
  { path: 'home/:id', component: DetailVoitureComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'gererGarage', component: GererGarageComponent },
  { path: 'gererGarage/update/:id', component: EditGarageComponent },
  { path: 'gererAnnonce', component: GererAnnonceComponent },
  { path: 'gererCompte', component: GererCompteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
