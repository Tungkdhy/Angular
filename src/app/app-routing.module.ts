import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MainComponent } from './pages/main/main.component';
import { LoginComponent } from './pages/login/login.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path:'login', component:LoginComponent },
  // { path: 'home', component:HomeComponent },
  { path: '', component:MainComponent,children:[
    { path: 'home', component: HomeComponent },
    { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  
  ] },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
