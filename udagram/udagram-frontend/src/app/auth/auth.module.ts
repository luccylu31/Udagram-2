import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AuthMenuButtonComponent } from './auth-menu-button/auth-menu-button.component';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { AuthRegisterComponent } from './auth-register/auth-register.component';
import { AuthMenuUserComponent } from './auth-menu-button/auth-menu-user/auth-menu-user.component';

import { ApiModule } from '../api/api.module';

const entryComponents = [AuthMenuUserComponent, AuthMenuButtonComponent, AuthLoginComponent, AuthRegisterComponent];
const components = [...entryComponents];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ApiModule
  ],
  entryComponents: entryComponents,
  declarations: components,
  exports: components,
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Add this line to fix the error
})
export class AuthModule {}
