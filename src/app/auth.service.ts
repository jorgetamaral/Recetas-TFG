declare var google: any;
import { Injectable , inject} from '@angular/core';
import { Router } from '@angular/router';
import { createDirectus, authentication } from '@directus/sdk';
import { jwtDecode } from "jwt-decode";

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  // https://yhydf2awm25r.share.zrok.io
  // http://localhost:8055/
  private client = createDirectus('http://localhost:8055/').with(authentication());
  router = inject(Router);
  constructor() {}

  signOut(){
    google.accounts.id.disableAutoSelect();
    this.router.navigate(['']);
  }

  public async login(email: string, password: string, options?: any) {
    const result = await this.client.login(email, password, {
      mode: "json",
    });

    console.log("result", result);
    localStorage.setItem("refresh_token", result.refresh_token || "");
    localStorage.setItem("token", await this.client.getToken() || "");
    if (result.expires) {
      localStorage.setItem("expires", result.expires.toString());
    }

    console.log("Token", await this.client.getToken());
  }

  public async refresh() {
    return this.client.refresh();
  }

  public async logOut() {
    return this.client.logout();
  }

  isTokenExpired() {
    const token = localStorage.getItem("token");
    if (!token) return true;

    const decoded = jwtDecode(token);
    if (!decoded.exp) return true;

    const expirationDate = decoded.exp * 1000;
    const now = new Date().getTime();

    return expirationDate < now;
  }

}