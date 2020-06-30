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


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'mentions', component: MentionsComponent },
  { path: 'politique', component: PolitiqueComponent },
  { path: 'conditions', component: ConditionsGeneralesComponent },
  { path: 'search', component: SearchComponent  },
  { path: 'home/:id', component: DetailVoitureComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
