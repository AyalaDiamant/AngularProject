import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from '../Components/home/home.component'
import { LoginComponent } from '../Components/login/login.component'
import { ListJobComponent } from '../Components/list-job/list-job.component'

import { FormsModule, NgForm } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { JobComponent } from 'src/Components/job/job.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MainComponent } from 'src/Components/main/main.component';
import { CustomPipe } from 'src/custom.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ListJobComponent,
    JobComponent,
    MainComponent,
    CustomPipe
  ],
  imports: [
    // BrowserModule,
    // AppRoutingModule
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
    // MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
