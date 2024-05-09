// users-service.ts
import { Injectable } from '@angular/core';
import { User } from './users.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [];
  private userIdCounter = 1;

  constructor() {
    this.users = [
      { id: this.userIdCounter++, nome: 'João', sobrenome: 'Silva', email: 'joao@example.com', funcao: 'Engenheiro de FE' },
      { id: this.userIdCounter++, nome: 'Maria', sobrenome: 'Santos', email: 'maria@example.com', funcao: 'Analista de dados' },
      { id: this.userIdCounter++, nome: 'José', sobrenome: 'Almeida', email: 'jose@example.com', funcao: 'Engenheiro de BE' },
      { id: this.userIdCounter++, nome: 'Ana', sobrenome: 'Costa', email: 'ana@example.com', funcao: 'Líder Técnico' },
      { id: this.userIdCounter++, nome: 'Juliana', sobrenome: 'Dantes', email: 'juliana@example.com', funcao: 'Líder Técnico' }
    ];
  }

  getUsers(): User[] {
    return this.users;
  }
}
