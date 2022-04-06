import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mission } from '../models/mission';

@Injectable({
  providedIn: 'root'
})
export class SpacexapiService {

  
  constructor(private http:HttpClient) {}

  getData(): Observable<Mission[]>{
      const api= 'https://api.spacexdata.com/v3/launches'
      return this.http.get<Mission[]>(api)
  }
}