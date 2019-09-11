import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthComponent } from './auth.component';
import { AuthEmailPasswordComponent } from './auth-email-password/auth-email-password.component';


@NgModule({
  declarations: [AuthComponent, AuthEmailPasswordComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class AuthModule { }