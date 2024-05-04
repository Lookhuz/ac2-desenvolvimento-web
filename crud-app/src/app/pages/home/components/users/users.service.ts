import { Injectable } from '@angular/core';
import { User } from './users.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [];

  constructor() {
    // Simulando alguns dados de usuário para teste
    this.users = [
      { nome: 'João', sobrenome: 'Silva', email: 'joao@example.com', funcao: 'Engenheiro de FE' },
      { nome: 'Maria', sobrenome: 'Santos', email: 'maria@example.com', funcao: 'Analista de dados' },
      { nome: 'José', sobrenome: 'Almeida', email: 'jose@example.com', funcao: 'Engenheiro de BE' },
      { nome: 'Ana', sobrenome: 'Costa', email: 'ana@example.com', funcao: 'Líder Técnico' }
    ];
  }

  getUsers(): User[] {
    return this.users;
  }
}
