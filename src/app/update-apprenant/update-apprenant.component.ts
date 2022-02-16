import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-update-apprenant',
  templateUrl: './update-apprenant.component.html',
  styleUrls: ['./update-apprenant.component.css']
})
export class UpdateApprenantComponent implements OnInit {
 id : any;
 dataApprenant : any;
  constructor(private service : ServicesService,private router:Router,private route:ActivatedRoute,) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.ApprenantById(this.id).subscribe((data)=>{
      console.log(data);
     this.dataApprenant =data;
    })
  }

  onUpdate(){
    this.service.updateApprenant(this.id,this.dataApprenant).subscribe((data)=>{
     console.log((data));
     if(data){
       this.router.navigateByUrl("/accueil")
     }
    })
  }

}
