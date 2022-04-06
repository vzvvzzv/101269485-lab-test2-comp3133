import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mission } from '../models/mission';
import { SpacexapiService } from '../network/spacexapi.service';


@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {

  spaceX: Mission[] = [];

  constructor(private api: SpacexapiService, private router: Router) {
    this.api.getData().subscribe(data => {
      this.spaceX = data
    })
   }

  ngOnInit(): void {
  }

  missionDetails() {
    this.router.navigate([this.missionDetails])
  }

}
