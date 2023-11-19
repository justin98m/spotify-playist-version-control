import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule } from '@angular/router'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewPlaylistComponent } from './view-playlist/view-playlist.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'view-playlist', component: ViewPlaylistComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ViewPlaylistComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
