import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { AccueilComponent } from './accueil/accueil.component';
import { UserSpaceComponent } from './user-space/user-space.component';
import { UserBriefComponent } from './user-brief/user-brief.component';

import { RessourceComponent } from './ressource/ressource.component';
import { UserRenduComponent } from './user-rendu/user-rendu.component';

import { AddBriefComponent } from './add-brief/add-brief.component';
import { UserRessourceComponent } from './user-ressource/user-ressource.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddApprenantComponent } from './add-apprenant/add-apprenant.component';
import { FormaBriefComponent } from './forma-brief/forma-brief.component';
import { UpdateApprenantComponent } from './update-apprenant/update-apprenant.component';
import { DetailApprenantComponent } from './detail-apprenant/detail-apprenant.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationDialogService } from './confirmation-dialog/confirmation-dialog.service';
import { BriefComponent } from './brief/brief.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CorbeilleComponent } from './corbeille/corbeille.component';
import { ToastrModule } from 'ngx-toastr';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { AddEvaluationComponent } from './add-evaluation/add-evaluation.component';
import { BriefDetailComponent } from './brief-detail/brief-detail.component';
import { RenduDetailComponent } from './rendu-detail/rendu-detail.component';
import { RenduComponent } from './rendu/rendu.component';
import { FormaRessourceComponent } from './forma-ressource/forma-ressource.component';
import { ListRessourceComponent } from './list-ressource/list-ressource.component';
import { ListFormaRessourceComponent } from './list-forma-ressource/list-forma-ressource.component';




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    AccueilComponent,
    UserSpaceComponent,
    UserBriefComponent,
  
    RessourceComponent,
    UserRenduComponent,
 
    AddBriefComponent,
    UserRessourceComponent,
    AddApprenantComponent,
    FormaBriefComponent,
    UpdateApprenantComponent,
    DetailApprenantComponent,
    ConfirmationDialogComponent,
    BriefComponent,
    CorbeilleComponent,
    EvaluationComponent,
    AddEvaluationComponent,
    BriefDetailComponent,
    RenduDetailComponent,
    RenduComponent,
    FormaRessourceComponent,
    ListRessourceComponent,
    ListFormaRessourceComponent,
  
   
    
    
    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    Ng2SearchPipeModule,
    ToastrModule.forRoot(),
  ],
  providers: [ConfirmationDialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
