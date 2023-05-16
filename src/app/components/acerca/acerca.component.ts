import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';
import { Router } from '@angular/router';

import { PersonaI } from 'src/app/interfaces/persona.interface';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})
export class AcercaComponent implements OnInit {

  educacion!: PersonaI[];

constructor( private apiPersona: PersonaService, private router:Router){}

ngOnInit(): void {
  this.apiPersona.getPersona().subscribe(data=>{
    this.educacion = data;
  })
}


}
