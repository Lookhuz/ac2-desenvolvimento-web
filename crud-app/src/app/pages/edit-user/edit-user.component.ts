
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  editUserForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.editUserForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]]
    });
  }

  ngOnInit(): void {
    // Preencher o formulário com os dados do usuário existente
    const existingUser = {
      name: 'Juliana',
      email: 'juliana@example.com',
      role: 'Tech Lead',
      password: 'password123'
    };

    this.editUserForm.setValue(existingUser);
  }

  onSubmit(): void {
    if (this.editUserForm.valid) {
      const editedUser = this.editUserForm.value;
      console.log(editedUser);
      this.router.navigate(['/users']);
    }
  }
}
