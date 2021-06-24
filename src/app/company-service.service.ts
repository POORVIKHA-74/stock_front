import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { ipodetails } from './ipodetails';

@Injectable({
  providedIn: 'root'
})
export class CompanyServiceService {

  ipodetails:any;

  constructor(private http:HttpClient) { }
  
  public addipo(ipodetails: ipodetails)
  {
    return this.http.post("http://localhost:8080/save-ipo",ipodetails,{responseType:"text" as  "json"});
  }
}

