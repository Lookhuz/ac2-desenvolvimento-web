import { Component } from '@angular/core';

// Definindo a interface User aqui
interface User {
  nome: string;
  sobrenome: string;
  email: string;
  funcao: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  // Usando a interface User para definir o tipo dos usuários
  users: User[] = [
    { nome: 'João', sobrenome: 'Silva', email: 'joao@example.com', funcao: 'Engenheiro de FE' },
    { nome: 'Maria', sobrenome: 'Santos', email: 'maria@example.com', funcao: 'Analista de dados' },
    { nome: 'José', sobrenome: 'Almeida', email: 'jose@example.com', funcao: 'Engenheiro de BE' },
    { nome: 'Ana', sobrenome: 'Costa', email: 'ana@example.com', funcao: 'Líder Técnico' }
  ];
}
