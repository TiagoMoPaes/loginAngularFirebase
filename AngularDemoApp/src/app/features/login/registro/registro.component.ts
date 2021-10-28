import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class registroComponent implements OnInit {
  registroForm: FormGroup;
 
  constructor(private fb: FormBuilder, private auth: AngularFireAuth, private router: Router) {
   }

  ngOnInit(): void {
    this.registroForm = this.fb.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

  createUser(){
    const {email, password} = this.registroForm.value;
    this.auth.createUserWithEmailAndPassword(email, password).then(user =>{
      console.log('registroComponent -> createUser -> user', user)
      this.router.navigate(['']);
    });
  }

}
