import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartComponent } from './start/start.component';
import { ConfigListComponent } from './config-list/config-list.component';
import { ConfigFormComponent } from './config-form/config-form.component';
import { ConfigItemComponent } from './config-list/config-item/config-item.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/config_list', pathMatch: 'full'},
  {path: 'config', component: ConfigFormComponent, children: [
      {path: '', component: StartComponent},
      {path: 'new', component: ConfigFormComponent},
      {path: ':id', component: ConfigItemComponent}
    ]},
  {path: 'config_list', component: ConfigListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
