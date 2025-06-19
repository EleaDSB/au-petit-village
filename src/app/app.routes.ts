import { Routes } from '@angular/router';
import { AccueilComponent } from './card/accueil.component';
import { ProductComponent } from './card/product.component';
import { AboutComponent } from './card/about.component';

export const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '' }
];
