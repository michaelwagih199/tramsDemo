import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

/**
 *@author michel wagih  
 *Service for shared data between applications.
 */
@Injectable({
  providedIn: 'root'
})
export class TramsService {

  private baseUrl = `${environment.baseUrl}`;

  constructor(private http: HttpClient) { }

  findAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }


}
