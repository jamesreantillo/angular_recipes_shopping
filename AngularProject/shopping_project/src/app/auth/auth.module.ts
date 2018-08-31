import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SigninComponent } from 'src/app/auth/signin/signin.component';
import { SignupComponent } from 'src/app/auth/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { AuthRoutingModule } from 'src/app/auth/auth-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule
  ],
  declarations: [
    SigninComponent,
    SignupComponent
  ]
})
export class AuthModule { }
