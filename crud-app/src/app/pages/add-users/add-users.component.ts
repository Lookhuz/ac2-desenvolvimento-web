import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent {

  constructor(private router:Router) { }

  onSubmit(form: any): void {
    if(form.valid) {
      console.log("Novo usuário: ", form.value);
      this.router.navigate(['/users'])
    }
  }
}
