import { Component, OnInit } from '@angular/core';
import { DataAppService } from 'src/app/services/data-app.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
    myInfo:any = []; 
  constructor(private dataService:DataAppService) { }

  ngOnInit(): void {
    this.dataService.obtenerDatos().subscribe(data =>{
      console.log(data);
      console.log(data.information.name); 
      this.myInfo = data; 
    });  
  }

}
