import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImportdataComponent } from './importdata/importdata.component';
import { ManagecompanyComponent } from './managecompany/managecompany.component';
import { ManageexchangeComponent } from './manageexchange/manageexchange.component';
import { UpdateipodetailsComponent } from './updateipodetails/updateipodetails.component';

const routes: Routes = [
  {
    path:"importdata", component:ImportdataComponent

  },
{
    path:"managecompany",component:ManagecompanyComponent
},
{
    path:"manageexchange",component:ManageexchangeComponent
},
   { path:"updateipodetails",component:UpdateipodetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
