import { NgModule } from '@angular/core';
import { AuthModule } from 'angular-auth-oidc-client';
import { environment } from 'src/environments/environment';
import { CustomStorage } from './custom-storage.service';


@NgModule({
    imports: [AuthModule.forRoot({
        config: {
            authority: environment.authority,
            redirectUrl: `${window.location.origin}`,
            postLogoutRedirectUri: window.location.origin,
            clientId: environment.clientId,
            scope: 'openid profile email',
            responseType: 'code',
            silentRenew: true,
            silentRenewUrl: window.location.origin + '/silent-renew.html',
            renewTimeBeforeTokenExpiresInSeconds: 10,
            storage: new CustomStorage()
        }
      })],
    exports: [AuthModule],
})
export class AuthConfigModule {}
