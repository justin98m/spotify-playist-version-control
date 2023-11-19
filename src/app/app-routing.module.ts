import { ViewPlaylistComponent }  from './view-playlist/view-playlist.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: 'view-playlist', component: ViewPlaylistComponent},
  //How come whe I set this manually none of the pages render?
  //{path: '/', component: HomeComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
