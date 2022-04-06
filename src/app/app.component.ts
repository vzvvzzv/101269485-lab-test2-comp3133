import { Component, OnInit } from '@angular/core';
import { SpacexapiService } from './network/spacexapi.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  

  constructor(private data:SpacexapiService) { }

  ngOnInit() {
    this.data.getData().subscribe((response)=>{
      
    })
  }

}
