import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProfileCardComponent } from '../app/home/profile-card/profile-card.component';
import { AboutMeComponent } from '../app/home/about-me/about-me.component';
import { ProyectsComponent } from '../app/home/proyects/proyects.component';
import { EducationComponent } from '../app/home/education/education.component';
import { ExperienceComponent } from '../app/home/experience/experience.component';
import { SkillsComponent } from '../app/home/skills/skills.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { Page404Component } from './page404/page404.component';
import { LanguagesComponent } from './home/languages/languages.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProfileCardComponent,
    AboutMeComponent,
    ProyectsComponent,
    EducationComponent,
    ExperienceComponent,
    SkillsComponent,
    LoginComponent,
    HomeComponent,
    Page404Component,
    LanguagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
