import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { UsersPageComponent } from './pages/home/components/users-page/usersPage.component';
import { TableComponent } from './pages/home/components/table/table.component';
import { TodoListComponent } from './pages/home/pages/todo-list/todo-list.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UsersComponent } from './users/users.component';
import { EditUserComponent } from './pages/edit-user/edit-user.component';

const routes: Routes = [
  {path: "", redirectTo: "/login", pathMatch: 'full'},
  {path: "login", component: HomeComponent},
  {path: "signup", component: SignupComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  {
    path: "app", component: HomeComponent,
    children: [
      {path: "", component: TableComponent},
      {path: "users", component: UsersPageComponent},
      {path: "todo-list", component: TodoListComponent},
      { path: 'pages/edit-user', component: EditUserComponent }
    ]
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

