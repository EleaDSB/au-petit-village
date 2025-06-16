import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product.model';

/**
 * Pipe pour trier les produits par prix
 * Utilisation: products | sortByPrice:'asc' ou products | sortByPrice:'desc'
 */
@Pipe({
  name: 'sortByPrice',
  standalone: true,
  pure: true // Optimisation : le pipe ne se recalcule que si les entrées changent
})
export class SortByPricePipe implements PipeTransform {

  /**
   * Transforme la liste de produits en la triant par prix
   * @param products - Liste des produits à trier
   * @param direction - Direction du tri ('asc' pour croissant, 'desc' pour décroissant, '' pour aucun tri)
   * @returns Liste des produits triée ou la liste originale si pas de direction
   */
  transform(products: Product[], direction: string): Product[] {
    // Vérification des paramètres d'entrée
    if (!products || !Array.isArray(products)) {
      console.warn('SortByPricePipe: products doit être un tableau');
      return [];
    }

    if (!direction || direction === '') {
      return products; // Retourne la liste originale si pas de tri demandé
    }

    // Validation de la direction
    if (direction !== 'asc' && direction !== 'desc') {
      console.warn(`SortByPricePipe: direction '${direction}' non supportée. Utilisez 'asc' ou 'desc'`);
      return products;
    }

    // Création d'une copie du tableau pour éviter de modifier l'original
    const sortedProducts = [...products];

    return sortedProducts.sort((productA: Product, productB: Product) => {
      // Vérification que les produits ont une propriété price valide
      if (typeof productA.price !== 'number' || typeof productB.price !== 'number') {
        console.warn('SortByPricePipe: Certains produits n\'ont pas de prix valide');
        return 0;
      }

      if (direction === 'asc') {
        // Tri croissant : prix le plus bas en premier
        return productA.price - productB.price;
      } else {
        // Tri décroissant : prix le plus élevé en premier
        return productB.price - productA.price;
      }
    });
  }
}