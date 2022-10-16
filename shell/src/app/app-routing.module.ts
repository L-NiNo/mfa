import {Component, NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {loadRemoteModule} from '@angular-architects/module-federation'

@Component({
  template: `<h1 style="padding-top:50px">SHELL WORKS!</h1>`,
  standalone: true
})
export class ShellComponent{}

const routes: Routes = [
  {
    path: '',
    component: ShellComponent
  },
  {
    path:"remote",
    loadChildren: () => loadRemoteModule({
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      remoteName: 'rm1',
      exposedModule: './Module'
    }).then(m => m.ModFedModule)

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
