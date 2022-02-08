import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  listApprenant : any;

  constructor(private service: ServicesService) { }

  ngOnInit(): void {
    this.AllApprenant();
  }
  AllApprenant(){
    this.service.getAllApprenant().subscribe((data)=>{
      console.log(data)
      this.listApprenant =data;
    })
  }


}
