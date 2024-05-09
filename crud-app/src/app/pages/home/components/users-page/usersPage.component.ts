// users-page.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../../users/users.service';
import { User } from '../../../../users/users.model';

@Component({
  selector: 'app-users-page',
  templateUrl: './usersPage.component.html',
  styleUrls: ['./usersPage.component.css']
})
export class UsersPageComponent {
  users: User[];

  constructor(private userService: UserService, private router: Router) {
    this.users = userService.getUsers();
  }

  editUser(user: User) {
    this.router.navigate(['/edit-user', user.id]); // colocar path da pagina de editar usuario
  }

  deleteUser(user: User) {
    const index = this.users.indexOf(user);
    if (index !== -1) {
      this.users.splice(index, 1);
    }
  } // melhorar função para realmente apagar um usuário do Banco de Dados

  addUser() {
    this.router.navigate(['/add-user']); // colocar path da pagina de adicionar usuario
  }
}
