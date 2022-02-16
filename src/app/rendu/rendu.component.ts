import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-rendu',
  templateUrl: './rendu.component.html',
  styleUrls: ['./rendu.component.css']
})
export class RenduComponent implements OnInit {

  listRendu : any 
  constructor(private service : ServicesService) { }

  ngOnInit(): void {
    this.AllRendu();
  }
 AllRendu(){
   this.service.getAllRendu().subscribe((data)=>{
    console.log(data)
     this.listRendu = data;
     
   })
 }
}