import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  url='http://localhost:8080/api/';
  

  constructor(
    private http : HttpClient)
     { }

     getAllApprenant(){
      return this.http.get(this.url+"allAprenant");
    }
    addApprenant(data:any){
      return this.http.post(this.url+"ajoutApprenant",data);
    }
    deleteApprenant(id:any){
      return this.http.delete(this.url+"deleteApprenant/"+id,{responseType:'text'});
  }
  restoreApprenant(id:any){
    return this.http.delete(this.url+"restoreApprenant/"+id,{responseType:'text'});
}
  loginformateur(login :String,password : String){
    return this.http.get(this.url+"loginformateur/"+login+"&"+password)
  }
  loginApprenant(login :String,password : String){
    return this.http.get(this.url+"login/"+login+"&"+password)
  }
  updateApprenant(id: number, data: any){
    return this.http.put(this.url+"updateApprenant/"+id,data);
  }
  ApprenantById(id:any){
    return this.http.get(this.url +"apprenantById/"+ id);
  }
  ApprenantAssister(assister:any){
    return this.http.get(this.url +"allApprenantNonAssister/"+ assister);
  }
  getAllBrief(){
    return this.http.get(this.url+"allBrief");
  }
  addBrief(data:any){
    return this.http.post(this.url+"ajoutBrief",data);
  }
  ApprenantBrief(brief:any){
    return this.http.get(this.url +"findBriefByApprenant/"+ brief);
  }
  addevaluation(data:any){
    return this.http.post(this.url+"addEvaluation",data);
  }
  getAllMatiere(){
    return this.http.get(this.url+"allMatiere");
  }
  getAllEvaluation(){
    return this.http.get(this.url+"allEvaluation");
  }
  ApprenantEvaluation(evaluation:any){
    return this.http.get(this.url +"evaluationByApprenant/"+ evaluation);
  }
  BriefById(id:any){
    return this.http.get(this.url +"briefById/"+ id);
  }
  addRendu(data:any){
    return this.http.post(this.url+"addRendu",data);
  }
  getAllRendu(){
    return this.http.get(this.url+"allRendu");
  }
  addRessourceApprenant(data:any){
    return this.http.post(this.url+"addUrlApprenant",data);
  }
  RessourceParApprenant(apprenant:any){
    return this.http.get(this.url +"ressourceByApprenant/"+ apprenant);
  }
  addRessourceFormateur(data:any){
    return this.http.post(this.url+"addUrl",data);
  }
  RessourceParFormateur(formateur:any){
    return this.http.get(this.url +"ressourceByFormateur/"+ formateur);
  }

}
