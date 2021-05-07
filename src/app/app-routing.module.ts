import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { ContactsComponent } from './contacts/contacts.component';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { ResetComponent } from './auth/components/reset/reset.component';

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "/home"},
  {path: "home", component: HomeComponent},
  {path: "product", component: ProductComponent},
  {path: "electronics", component: ElectronicsComponent},
  {path: "contact", component: ContactsComponent},
  {path:'login', component:LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'reset', component: ResetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
