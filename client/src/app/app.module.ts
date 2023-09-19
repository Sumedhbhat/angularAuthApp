import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { FormsModule } from '@angular/forms';
import {
  HttpClientModule,
  HttpClient,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { GuardedComponent } from './pages/guarded/guarded.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { EmployeesComponent } from './pages/employees/employees.component';
import { EditModalComponent } from './components/edit-modal/edit-modal.component';
import { AddModalComponent } from './components/add-modal/add-modal.component';
import { NavModule } from './components/nav/nav.module';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    GuardedComponent,
    EmployeesComponent,
    EditModalComponent,
    AddModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DialogModule,
    ButtonModule,
    NavModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
