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
import { ProfilComponent } from './components/profil/profil.component';
import { GererAnnonceComponent } from './components/gerer-annonce/gerer-annonce.component';
import { GererGarageComponent } from './components/gerer-garage/gerer-garage.component';
import { GererCompteComponent } from './components/gerer-compte/gerer-compte.component';
import {ToastrModule} from 'ngx-toastr';
import { EditGarageComponent } from './components/edit-garage/edit-garage.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { ThemeModule } from './theme/theme.module';
import { RegisterComponent } from './components/register/register.component';
import { AdminComponent } from './components/admin/admin.component';
import {AuthInterceptor} from './services/auth-interceptor.service';
import { MarquePipePipe } from './components/search/marque-pipe.pipe';
import { ModelePipePipe } from './components/search/modele-pipe.pipe';
import { ModeleCarburantPipe } from './components/search/modele-carburant.pipe';
import { KilometragePipePipe } from './components/search/kilometrage-pipe.pipe';
import { PrixPipePipe } from './components/search/prix-pipe.pipe';
import { DatePipePipe } from './components/search/date-pipe.pipe';

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
    DetailVoitureComponent,
    ProfilComponent,
    GererAnnonceComponent,
    GererGarageComponent,
    GererCompteComponent,
    EditGarageComponent,
    RegisterComponent,
    AdminComponent,
    MarquePipePipe,
    ModelePipePipe,
    ModeleCarburantPipe,
    ModelePipePipe,
    KilometragePipePipe,
    PrixPipePipe,
    DatePipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    ThemeModule,
    ToastrModule.forRoot()
  ],
  providers: [AuthInterceptor],
  bootstrap: [AppComponent]
})
export class AppModule { }
