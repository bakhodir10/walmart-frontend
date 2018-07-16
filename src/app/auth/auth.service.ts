import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {AuthModel} from './auth.model';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  url = 'http://localhost:3000/auth/';

  constructor(private http: HttpClient, public router: Router) {
  }

  public getToken(): string {
    return localStorage.getItem('token');
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return token !== undefined;
  }

  public login(user): void {
    this.http.post<AuthModel>(`${this.url}/login`, user).subscribe(res => {
      console.log(res);
      localStorage.setItem('token', res.token);
      this.router.navigate(['home']);
    });
  }

  public logout(): void {
    this.http.post<AuthModel>(`${this.url}/logout`, {}).subscribe(res => {
      console.log(res);
      localStorage.removeItem('token');
      this.router.navigate(['home']);
    });
  }
}
