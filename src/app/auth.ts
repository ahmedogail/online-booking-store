import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILoginRequest } from './models/IAuth';

@Injectable({
  providedIn: 'root',
})
export class Auth {
 private http = inject(HttpClient);
 onLogin(data: ILoginRequest): Observable<ILoginRequest>{
   return this.http.post<ILoginRequest>('auth/login', data)
 }
}
//23