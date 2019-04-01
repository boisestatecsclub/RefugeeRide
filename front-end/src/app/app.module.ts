import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AccountCreationComponent } from './account-creation/account-creation.component';
import { AdminPendingBCheckComponent } from './admin-pending-b-check/admin-pending-b-check.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { RouterModule, Routes } from '@angular/router';
const appRoutes: Routes = [

  { path: 'home', component: LandingPageComponent },
  { path: '', redirectTo:'/home', pathMatch:'full'}

];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AccountCreationComponent,
    AdminPendingBCheckComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
  appRoutes,
  { enableTracing: true } // <-- debugging purposes only
)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
