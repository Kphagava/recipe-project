import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeVideoComponent } from './recipe-video/recipe-video.component';
import { QuickInfoComponent } from './quick-info/quick-info.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { NutritionInfoComponent } from './nutrition-info/nutrition-info.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeDetailsComponent,
    RecipeVideoComponent,
    QuickInfoComponent,
    IngredientsComponent,
    InstructionsComponent,
    NutritionInfoComponent,
    SuggestionsComponent,
    FooterComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
