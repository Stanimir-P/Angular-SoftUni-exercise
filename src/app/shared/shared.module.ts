import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EmailValidatorDirective } from './email-validator.directive';
import { LoaderComponent } from './loader/loader.component';
import { ShortenTextPipe } from './shorten-text.pipe';
import { TimeDiffPipe } from './time-diff.pipe';



@NgModule({
  declarations: [
    LoaderComponent,
    EmailValidatorDirective,
    ShortenTextPipe,
    TimeDiffPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoaderComponent,
    EmailValidatorDirective,
    ShortenTextPipe,
    TimeDiffPipe
  ]
})
export class SharedModule { }
