import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { UsersPageComponent } from './pages/home/components/users-page/usersPage.component';
import { TableComponent } from './pages/home/components/table/table.component';
import { SignupComponent } from './pages/signup/signup.component';
import { EditUserComponent } from './pages/edit-user/edit-user.component';
import { AddUsersComponent } from './pages/add-users/add-users.component';

const routes: Routes = [
  {path: "", redirectTo: "/login", pathMatch: 'full'},
  {path: "login", component: LoginComponent},
  {path: "signup", component: SignupComponent},
  {
    path: "app", component: HomeComponent,
    children: [
      {path: "", component: TableComponent},
      {path: "users", component: UsersPageComponent},
      {path: "pages/edit-user", component: EditUserComponent },
      {path: "pages/add-users", component: AddUsersComponent}
    ]
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

