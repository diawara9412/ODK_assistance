import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { ConfirmationDialogService } from '../confirmation-dialog/confirmation-dialog.service';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})

export class AccueilComponent implements OnInit {
  listApprenantAssister : any;
  listApprenant : any;
  apprenant : any;
  searchText:any;
  assister =1;

  constructor(private service: ServicesService, private confirmationDialogService: ConfirmationDialogService,  private router :Router) { }

  ngOnInit(): void {
    this.AllApprenant();
    this.Allassister();
  }
  AllApprenant(){
    this.service.getAllApprenant().subscribe((data)=>{
      console.log(data)
      this.listApprenant =data;
      console.log(this.listApprenant.length)
    })
  }
  SuppApprenant(id : any):void{
    if(confirm("Voulez-vous supprimer ??")){
    this.service.deleteApprenant(id).subscribe((data)=>{
      console.log(data)
     
      this.AllApprenant();
     
    });
  }
}
Allassister(){
  this.service.ApprenantAssister(this.assister).subscribe((data)=>{
    this.listApprenantAssister = data;
    console.log(this.listApprenantAssister.length)
  })
}
public openConfirmationDialog(id:any) {
  this.confirmationDialogService.confirm('Veuillez confirmer ..', 'Voulez-vous supprimer ... ?')
  .then((confirmed) => 

  this.service.deleteApprenant(id).subscribe((data)=>{
    console.log(data); 
    this.AllApprenant();

  }))
  .catch(
    () => 
    console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
}


}
