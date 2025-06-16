import { Routes } from '@angular/router';
import { AccueilComponent } from './card/accueil.component';

export const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: '**', redirectTo: '' }
];
