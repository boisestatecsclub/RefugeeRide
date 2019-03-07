import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AccountCreationComponent } from './account-creation/account-creation.component';
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
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
