import { Component, Inject } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  usuario: string = '';
  password: string = '';

  constructor(private loginService: LoginService, @Inject(Router) private router: Router, private cookieService: CookieService) {}

  login() {
    if(this.usuario === "Diego" && this.password === "ArgentinaPrograma2023"){
      this.cookieService.set('authenticated', 'true')
      this.router.navigate(['']);
    }else{
      alert("Usuario y/o contraseña Incorrectos");
    }  
  }
}
