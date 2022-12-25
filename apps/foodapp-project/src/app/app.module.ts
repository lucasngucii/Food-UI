import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { StarComponent } from './shared/star/star.component';
import { ConvertToSpacesPipe } from './shared/star/convert-to-spaces.pipe';
import { SearchComponent } from './components/partials/search/search.component';
import { TagComponent } from './components/partials/tag/tag.component';
import { ProductDetailComponent } from './components/pages/product-detail/product-detail.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { NotFoundComponent } from './components/partials/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    StarComponent,
    ConvertToSpacesPipe,
    SearchComponent,
    TagComponent,
    ProductDetailComponent,
    CartPageComponent,
    RegisterComponent,
    NotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
