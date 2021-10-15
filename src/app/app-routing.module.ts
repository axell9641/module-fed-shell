import { loadRemoteModule } from '@angular-architects/module-federation-runtime';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoLoginPartialRoutesGuard } from 'angular-auth-oidc-client';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },

  // Your route here:

  {
    path: 'identity',
    loadChildren: () =>
      loadRemoteModule({
        remoteName: 'mfeIdentity',
        exposedModule: './Module',
      }).then((m) => m.IdentityModule),
      canLoad: [AutoLoginPartialRoutesGuard],
  },

  // {
  //   path: '**',
  //   component: NotFoundComponent,
  // },

  // DO NOT insert routes after this one.
  // { path:'**', ...} needs to be the LAST one.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
