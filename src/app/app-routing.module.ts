import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExploreComponent } from './pages/explore/explore.component';
import { DetailsComponent } from './pages/details/details.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { MyCookBookComponent } from './pages/my-cook-book/my-cook-book.component';
import { AboutComponent } from './pages/about/about.component';
import { AuthorsComponent } from './pages/authors/authors.component';

const routes: Routes = [
 {path: 'home', component: HomepageComponent},
 {path: 'details', component: DetailsComponent},
 {path: 'mycookbook', component: MyCookBookComponent},
 {path: 'explore', component: ExploreComponent},
 {path: 'authors', component: AuthorsComponent},
 {path: 'about', component: AboutComponent},
 {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

