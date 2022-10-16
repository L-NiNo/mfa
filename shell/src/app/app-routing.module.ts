import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {loadRemoteModule} from '@angular-architects/module-federation'

const routes: Routes = [
  {
    path:"remote",
    loadChildren: () => loadRemoteModule({
      remoteEntry: 'http://localhost:7000/remoteEntry.js',
      remoteName: 'rm1',
      exposedModule: './Module'
    }).then(m => m.AppModule)

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
