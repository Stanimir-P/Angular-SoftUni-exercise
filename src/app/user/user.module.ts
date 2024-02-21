import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../shared/shared.module';
import { reducers } from './+store';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { UserService } from './service/user.service';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [
    ProfileComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('user', reducers)
  ],
  providers: [
    UserService
  ]
})
export class UserModule { }
