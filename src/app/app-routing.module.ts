import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from './guards/authentication-guard';
import { CompanionDetailComponent } from './modules/companion-detail/companion-detail.page';
import { CompanionsSummaryComponent } from './modules/companions-summary/companions-summary.page';
import { LoginComponent } from './modules/login/login.page';
import { HomeComponent } from './modules/home/home.page';

const routes: Routes = [
  { path: 'companion/:companion_id', canActivate: [AuthenticationGuard], component: CompanionDetailComponent },
  { path: 'companion', canActivate: [AuthenticationGuard], component: CompanionDetailComponent },
  { path: 'companions', canActivate: [AuthenticationGuard], component: CompanionsSummaryComponent },  
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
