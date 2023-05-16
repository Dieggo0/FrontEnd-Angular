import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  usuario: String = "Diego";
  contraseña: String = "ArgentinaPrograma2023";

  constructor(private http: HttpClient, private router: Router, private cookies:CookieService) { }

  login(usuario: string, contraseña: string): void{
    this.router.navigate(['']).subscribe(data => {
      this.loginService.setToken(data.token);
  });

  setToken(token: String) {
    this.cookies.set("token", token);
  }
  getToken() {
    return this.cookies.get("token");
  }

}
}
