import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { WorksCreateComponent } from "./works/work-create/work-create.component";
import { WorksListComponent } from "./works/works-list/works-list.component";
import { WorksComponent } from "./works/works.component";

const declarations = [
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    WelcomeComponent,
    WorksComponent,
    WorksListComponent,
    WorksCreateComponent,
    WorksComponent
];


@NgModule({
    imports:[],
    declarations: declarations,
    exports: [...declarations]
})
export class ComponentsModule {}