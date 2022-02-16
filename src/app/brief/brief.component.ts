import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-brief',
  templateUrl: './brief.component.html',
  styleUrls: ['./brief.component.css']
})
export class BriefComponent implements OnInit {
 listBrief : any;
  constructor(private service : ServicesService) { }

  ngOnInit(): void {
    this.Brief();
  }
  Brief(){
    this.service.getAllBrief().subscribe((data)=>{
      console.log(data);
      this.listBrief =data;
    })
  }

}
