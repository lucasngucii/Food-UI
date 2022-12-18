import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/pages/home/home.component";
import {ProductDetailComponent} from "./components/pages/product-detail/product-detail.component";


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'search/:searchItem', component: HomeComponent},
  {path:'tag/:tag', component: HomeComponent},
  {path:'product/:id',component: ProductDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
