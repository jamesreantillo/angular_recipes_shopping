import { NgModule } from '@angular/core';

import { HeaderComponent } from 'src/app/core/header/header.component';
import { HomeComponent } from 'src/app/core/home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { RecipeService } from 'src/app/recipes/recipe.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { AuthService } from 'src/app/auth/auth.service';
import { AuthGuardService } from 'src/app/auth/auth-guard.service';

@NgModule({
  declarations: [HeaderComponent, HomeComponent],
  imports: [SharedModule, AppRoutingModule],
  exports: [AppRoutingModule, HeaderComponent],
  providers: [
    ShoppingListService,
    RecipeService,
    DataStorageService,
    AuthService,
    AuthGuardService
  ]
})
export class CoreModule {}
