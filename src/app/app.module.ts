import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './components/menu/menu.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchComponent } from './components/search/search.component';
import {FormsModule} from '@angular/forms';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { ContactComponent } from './components/contact/contact.component';
import { MentionsComponent } from './components/mentions/mentions.component';
import { PolitiqueComponent } from './components/politique/politique.component';
import { ConditionsGeneralesComponent } from './components/conditions-generales/conditions-generales.component';
import {HttpClientModule} from '@angular/common/http';
import { DetailVoitureComponent } from './components/detail-voiture/detail-voiture.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AboutComponent,
    HomeComponent,
    FooterComponent,
    SearchComponent,
    ConnexionComponent,
    ContactComponent,
    MentionsComponent,
    PolitiqueComponent,
    ConditionsGeneralesComponent,
    DetailVoitureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
