import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product.model';

/**
 * Pipe pour filtrer les produits par nom ou personnage
 * Utilisation: products | filterByName:'astérix' ou products | filterByName:searchTerm
 */
@Pipe({
  name: 'filterByName',
  standalone: true,
  pure: true // Optimisation : le pipe ne se recalcule que si les entrées changent
})
export class FilterByNamePipe implements PipeTransform {

  /**
   * Transforme la liste de produits en la filtrant par terme de recherche
   * @param products - Liste des produits à filtrer
   * @param searchTerm - Terme de recherche (recherche dans name et character)
   * @returns Liste des produits filtrée
   */
  transform(products: Product[], searchTerm: string): Product[] {
    // Vérification des paramètres d'entrée
    if (!products || !Array.isArray(products)) {
      console.warn('FilterByNamePipe: products doit être un tableau');
      return [];
    }

    if (!searchTerm || searchTerm.trim() === '') {
      return products; // Retourne tous les produits si pas de terme de recherche
    }

    // Normalisation du terme de recherche
    const normalizedSearchTerm = this.normalizeString(searchTerm);

    if (normalizedSearchTerm === '') {
      return products;
    }

    // Filtrage des produits
    return products.filter((product: Product) => {
      // Vérification que le produit a les propriétés requises
      if (!product.name) {
        console.warn('FilterByNamePipe: Produit sans nom détecté');
        return false;
      }

      // Normalisation des champs du produit
      const normalizedName = this.normalizeString(product.name);
      const normalizedDescription = this.normalizeString(product.description);
      
      // Recherche dans le nom ET dans la description
      return normalizedName.includes(normalizedSearchTerm) || 
             normalizedDescription.includes(normalizedSearchTerm);
    });
  }

  /**
   * Normalise une chaîne de caractères pour la recherche
   * - Convertit en minuscules
   * - Supprime les espaces en début et fin
   * - Supprime les accents
   * @param str - Chaîne à normaliser
   * @returns Chaîne normalisée
   */
  private normalizeString(str: string): string {
    if (!str || typeof str !== 'string') {
      return '';
    }

    return str
      .toLowerCase()
      .trim()
      .normalize('NFD') // Décompose les caractères accentués
      .replace(/[\u0300-\u036f]/g, ''); // Supprime les diacritiques (accents)
  }
}