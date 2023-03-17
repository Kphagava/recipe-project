import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './pages/details/details.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

const routes: Routes = [
 {path: 'home', component: HomepageComponent},
 {path: 'details', component: DetailsComponent},
 {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

