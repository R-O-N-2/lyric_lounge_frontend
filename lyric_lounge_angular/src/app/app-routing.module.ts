import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { WorksComponent } from './components/works/works.component';
import { WorksListComponent } from './components/works/works-list/works-list.component';
import { WorksCreateComponent } from './components/works/work-create/work-create.component'

const routes: Routes = [
  { path: 'home', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'list',
    component: WorksComponent,
    children: [],
  },
  { path: 'works', component: WorksCreateComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}