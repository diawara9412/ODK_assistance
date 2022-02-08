import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { AccueilComponent } from './accueil/accueil.component';
import { UserSpaceComponent } from './user-space/user-space.component';
import { UserBriefComponent } from './user-brief/user-brief.component';
import { UserBriefDetailComponent } from './user-brief-detail/user-brief-detail.component';
import { RessourceComponent } from './ressource/ressource.component';
import { UserRenduComponent } from './user-rendu/user-rendu.component';
import { UserRenduDetailComponent } from './user-rendu-detail/user-rendu-detail.component';
import { AddBriefComponent } from './add-brief/add-brief.component';
import { UserRessourceComponent } from './user-ressource/user-ressource.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddApprenantComponent } from './add-apprenant/add-apprenant.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    AccueilComponent,
    UserSpaceComponent,
    UserBriefComponent,
    UserBriefDetailComponent,
    RessourceComponent,
    UserRenduComponent,
    UserRenduDetailComponent,
    AddBriefComponent,
    UserRessourceComponent,
    AddApprenantComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
