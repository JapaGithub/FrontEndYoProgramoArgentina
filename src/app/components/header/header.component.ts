import { Component, OnInit } from '@angular/core';
import { DataAppService } from 'src/app/services/data-app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private dataService:DataAppService) { }

  ngOnInit(): void {
    
  }


}
