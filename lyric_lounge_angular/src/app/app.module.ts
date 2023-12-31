import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { WorksComponent } from './components/works/works.component';
import { WorksCreateComponent } from './components/works/work-create/work-create.component';
import { SignupComponent } from './components/signup/signup.component';
import { WorksListComponent } from './components/works/works-list/works-list.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { LoginComponent } from './components/login/login.component';
import { WorkItemComponent } from './components/works/work-item/work-item.component';
import { WorksService } from './services/works.service';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WorksComponent,
    WorksCreateComponent,
    SignupComponent,
    WorksListComponent,
    WelcomeComponent,
    LoginComponent,
    WorkItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
