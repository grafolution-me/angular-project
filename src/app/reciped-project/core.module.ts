import {NgModule} from '@angular/core';
import {RecipeService} from './recipes/recipe.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthIntercepterService} from './auth/auth-intercepter.service';

@NgModule({
  providers: [RecipeService, {provide: HTTP_INTERCEPTORS, useClass: AuthIntercepterService, multi: true}]
})
export class CoreModule {

}
