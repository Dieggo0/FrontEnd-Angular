import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PersonaI } from '../interfaces/persona.interface'; 

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private urlApi = 'https://portfolio-service-p3up.onrender.com/persona/ver';
  constructor(private http: HttpClient) { }

 /*  public getData(): Observable<any>{
    return this.http.get<any>(this.urlApi);
  } */

  getPersona(): Observable<PersonaI[]>{
    return this.http.get<PersonaI[]>(this.urlApi);
  }

}