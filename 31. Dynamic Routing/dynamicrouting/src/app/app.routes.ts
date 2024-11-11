import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { UserComponent } from './Components/user/user.component';
import { NoPageComponent } from './Components/no-page/no-page.component';
import { CompanyComponent } from './Components/company/company.component';
import { MeComponent } from './Components/me/me.component';

export const routes: Routes = [
  { path: '', component: HomeComponent,},
  { path: 'about', component: AboutComponent,children:[
    {path:'company',component:CompanyComponent},
    {path:'me',component:MeComponent},
  ]},
  { path: 'user/:id', component: UserComponent },
  { path: '**', component: NoPageComponent },

];

