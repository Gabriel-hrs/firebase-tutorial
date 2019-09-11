import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth-email-password',
  templateUrl: './auth-email-password.component.html',
  styleUrls: ['./auth-email-password.component.scss']
})
export class AuthEmailPasswordComponent implements OnInit {
  constructor() {}

  aoSubmeterFormulario(f: NgForm) {
    console.log(f.controls.email.value);
    console.log(f.controls.senha.value);
  }

  ngOnInit() {}
}