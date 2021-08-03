import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class IamusDateService {

  constructor(private http: HttpClient) { }

  public setProperties(URL: string) {
   return this.http.get(URL)
  }

}
