import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfigListComponent } from './config-list/config-list.component';
import { ConfigFormComponent } from './config-form/config-form.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/config_list', pathMatch: 'full'},
  {path: 'config', component: ConfigFormComponent},
  {path: 'config/:id', component: ConfigFormComponent},
  {path: 'config_list', component: ConfigListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
