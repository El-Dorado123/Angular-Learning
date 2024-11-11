import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'user',component:UserComponent},
    {path:'about',component:AboutComponent}
];
