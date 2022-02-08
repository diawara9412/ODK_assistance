import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AddApprenantComponent } from './add-apprenant/add-apprenant.component';
import { AddBriefComponent } from './add-brief/add-brief.component';
import { RessourceComponent } from './ressource/ressource.component';
import { UserBriefDetailComponent } from './user-brief-detail/user-brief-detail.component';
import { UserBriefComponent } from './user-brief/user-brief.component';
import { UserRenduDetailComponent } from './user-rendu-detail/user-rendu-detail.component';
import { UserRenduComponent } from './user-rendu/user-rendu.component';
import { UserRessourceComponent } from './user-ressource/user-ressource.component';
import { UserSpaceComponent } from './user-space/user-space.component';

const routes: Routes = [
  { path: 'accueil', component: AccueilComponent},
  { path: 'user', component: UserSpaceComponent},
  { path: 'userBrief', component: UserBriefComponent},
  { path: 'userBriefDetail', component: UserBriefDetailComponent},
  { path: 'ressource', component: RessourceComponent},
  { path: 'userRendu', component: UserRenduComponent},
  { path: 'userRenduDetail', component: UserRenduDetailComponent},
  { path: 'addBrief', component: AddBriefComponent},
  { path: 'useressource', component: UserRessourceComponent},
  {path : 'addApprenant', component: AddApprenantComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
