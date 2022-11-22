import { Component, OnInit } from '@angular/core';
import { DataAppService } from 'src/app/services/data-app.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  educationList:any;
  
  constructor(private dataService:DataAppService) { }
  
  ngOnInit(): void {
    this.dataService.obtenerDatos().subscribe(data =>{
      console.log(data.education);
    
      this.educationList = data.education;    
      
    }); 

  }

}
