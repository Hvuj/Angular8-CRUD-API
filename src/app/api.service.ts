import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_KEY ='ee4814ee87msha920aa71abf46c9p1f4c29jsn221a2ce7c0f7';


  constructor(private httpClient: HttpClient) {}

  public getNews(){
    return this. httpClient.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.API_KEY}`);
  }
}
