import { Component } from '@angular/core';
import { UserService } from '../users/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  usersCount: number = 0;
  usersByFunction: { function: string, count: number }[] = [];

  constructor(private userService: UserService) {
    const users = this.userService.getUsers();
    this.usersCount = users.length;

    // Contagem de usuários por função
    const functionsMap = new Map<string, number>();
    users.forEach(user => {
      const count = functionsMap.get(user.funcao) || 0;
      functionsMap.set(user.funcao, count + 1);
    });

    functionsMap.forEach((count, funcao) => {
      this.usersByFunction.push({ function: funcao, count: count });
    });
  }
}
