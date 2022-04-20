import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { serverConfig } from '../env/server';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  serverUrl = serverConfig.domain + serverConfig.sendEmail;
  sendEmail (name: String, surnames: String, email: String, message:String){
    return this.http.post(this.serverUrl, {name, surnames, email, message})
  }
}
