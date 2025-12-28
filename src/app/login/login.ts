import { CommonModule } from '@angular/common';
import { Component, Inject, inject, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators,FormGroup } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { Auth } from '../auth';
import { response } from 'express';
import { error } from 'console';
import { subscribe } from 'diagnostics_channel';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule,FormsModule,
           MatFormFieldModule, MatInputModule,
           MatButtonModule, MatIconModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
 hide = signal(true);
 authServics=Inject(Auth);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
  authServices = inject(Auth)

 loginForm= new FormGroup({
  email:new FormControl('',[Validators.required, Validators.email]),
  password:new FormControl('',[Validators.required, Validators.minLength(6)]),
 });
  onSubmit(loginForm:FormGroup){
    this.authServices.onLogin(loginForm.value).subscribe({
      next:(response)=>{
        console.log(response);
      },
      error:(error)=>{
        console.log(error);
      }
    });
  }
}
