import { Routes } from '@angular/router';
import { HomeComponent } from './card/home.component';
import { ProductComponent } from './card/product.component';
import { AboutComponent } from './card/about.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '' }
];
