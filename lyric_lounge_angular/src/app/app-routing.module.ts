import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { WorksComponent } from './components/works/works.component';
import { WorksCreateComponent } from './components/works/work-create/work-create.component';
import { WorkItemComponent } from './components/works/work-item/work-item.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
    canActivate: [AuthGuard]
  },
  { path: 'home', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'list',
    component: WorksComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'works/:id',
    component: WorksComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'works',
    component: WorkItemComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'create',
    component: WorksCreateComponent,
    canActivate: [AuthGuard]
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}