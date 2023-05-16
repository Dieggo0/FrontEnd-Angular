import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EducacionI } from '../interfaces/educacion.interface'; 

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private urlApi = 'https://portfolio-service-p3up.onrender.com/educacion/ver';
  constructor(private http: HttpClient) { }

 /*  public getData(): Observable<any>{
    return this.http.get<any>(this.urlApi);
  } */

  getEducacion(): Observable<EducacionI[]>{
    return this.http.get<EducacionI[]>(this.urlApi);
  }

}