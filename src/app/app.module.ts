import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner'

import { RouterModule , Router , NavigationStart , NavigationEnd} from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { AddUserComponent } from './add-user/add-user.component';


const router = [
{path:"" , component: HomeComponent},
{path:"add", component:AddUserComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MenuComponent,
    HomeComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng4LoadingSpinnerModule,
    RouterModule.forRoot(router)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
