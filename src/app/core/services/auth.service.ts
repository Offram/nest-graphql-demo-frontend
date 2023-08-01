import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { LoginGQL } from 'src/generated-types';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly tokenKey = `nestjs-angular-graphql-token`

  constructor(
    private readonly loginService: LoginGQL,
  ) {

  }

  login(username: string) {
    return lastValueFrom(this.loginService.mutate({
      "input": {
        "username": username,
        "password": "more-secure"
      }
    })).then((res) => {
      if (res.data?.login?.access_token) {
        this.setToken(res.data?.login.access_token);
      }

      return res;
    });
  }

  private setToken(token: string) {
    try {
      localStorage.setItem(this.tokenKey, token);
    } catch (err) {
      console.error(err);
    }
  }

  getToken() {
    try {
      const token = localStorage.getItem(this.tokenKey);
      if (token) {
        return token;
      }
      return '';
    } catch (err) {
      console.error(err);
      return '';
    }
  }

  logout() {
    try {
      localStorage.removeItem(this.tokenKey);
    } catch (err) {
      console.error(err);
    }
  }

}
