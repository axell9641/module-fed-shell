import { Component } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shell';
  isAuthenticated = false;

  constructor(
    private oidcSecurityService: OidcSecurityService
  ) {
  }
  ngOnInit(): void {
    this.oidcSecurityService.checkAuth().subscribe(({ isAuthenticated, userData, accessToken }) => {
      //
      this.isAuthenticated = isAuthenticated;
    });
  }

  onLogout(event: any): void {
    event.preventDefault();
    this.oidcSecurityService.logoff();
  }
}
