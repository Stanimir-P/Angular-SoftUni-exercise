import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { appInterceptorProvider } from './app.interseptor';
import { AuthService } from './auth.service';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
    appInterceptorProvider,
    AuthService
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})

export class CoreModule { }