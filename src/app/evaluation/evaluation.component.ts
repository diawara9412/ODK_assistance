import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css']
})
export class EvaluationComponent implements OnInit {
 listEvaluation : any;
  constructor(private service: ServicesService) { }

  ngOnInit(): void {
    this.AllEvaluation();
  }
AllEvaluation(){
  this.service.getAllEvaluation().subscribe((data)=>{
    console.log(data)
    this.listEvaluation = data;
  })
}
}
