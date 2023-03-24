import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { NutritionInfoComponent } from './nutrition-info/nutrition-info.component';
import { SuggestionsComponent } from './components/suggestions/suggestions.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { DetailsComponent } from './pages/details/details.component';
import { MyCookBookComponent } from './pages/my-cook-book/my-cook-book.component';
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';
import { ExploreComponent } from './pages/explore/explore.component';
import { AuthorsComponent } from './pages/authors/authors.component';
import { AboutComponent } from './pages/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IngredientsComponent,
    InstructionsComponent,
    NutritionInfoComponent,
    SuggestionsComponent,
    HomepageComponent,
    DetailsComponent,
    MyCookBookComponent,
    RecipeCardComponent,
    ExploreComponent,
    AuthorsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
