import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { UsersComponent } from './pages/home/components/users/users.component';
import { TableComponent } from './pages/home/components/table/table.component';
import { TodoListComponent } from './pages/home/pages/todo-list/todo-list.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  {path: "", redirectTo: "/login", pathMatch: 'full'},
  {path: "login", component: HomeComponent},
  {path: "signup", component: SignupComponent},
  {
    path: "app", component: HomeComponent,
    children: [
      {path: "", component: TableComponent},
      {path: "users", component: UsersComponent},
      {path: "todo-list", component: TodoListComponent}
    ]
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
