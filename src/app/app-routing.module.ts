import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagerComponent } from './components/manager/manager.component';
import { RequestComponent } from './components/request/request.component';
import { ReviewComponent } from './components/review/review.component';
import { UserComponent } from './components/user/user.component';
import { PossibleValuesComponent } from './components/possible-values/possible-values.component';


const routes: Routes = [
  { path: 'manage', component: ManagerComponent },
  { path: 'user', component: UserComponent },
  { path: 'manage', component: ReviewComponent },
  { path: 'requets', component: RequestComponent },
  { path: 'possible', component: PossibleValuesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'manage' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
