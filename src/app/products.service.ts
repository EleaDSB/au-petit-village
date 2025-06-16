import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Product } from './product.model';

/**
 * Service pour gérer les données des produits (figurines)
 * Données intégrées directement dans le service selon products.json
 */
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  private readonly products: Product[] = [
    {
      id: 1,
      name: "Astérix le Gaulois",
      description: "Cette figurine d'Astérix représente le célèbre héros gaulois dans sa tenue traditionnelle avec son casque ailé, son bouclier et son inséparable gourde de potion magique. Fabriquée en résine de haute qualité, chaque détail est soigneusement peint à la main pour capturer l'esprit du personnage.",
      price: 29.99,
      imageUrl: "assets/images/figurines/asterix.png",
      inStock: true
    },
    {
      id: 2,
      name: "Obélix et Idéfix",
      description: "Cette figurine d'Obélix, accompagnée de son fidèle chien Idéfix, est un incontournable pour tout fan. Obélix est représenté portant une montagne de casque romain, fidèle à sa réputation. La figurine est faite de polystone pour un rendu réaliste et durable.",
      price: 39.99,
      imageUrl: "assets/images/figurines/obelix.png",
      inStock: true
    },
    {
      id: 3,
      name: "Panoramix le Duide",
      description: "Panoramix, le druide sage du village, est représenté avec sa serpe d'or. Cette figurine en PVC de haute qualité est parfaite pour les collectionneurs et les fans de la série.",
      price: 24.99,
      imageUrl: "assets/images/figurines/panoramix.png",
      inStock: false
    },
    {
      id: 4,
      name: "Assurancetourix le Barde",
      description: "Le barde Assurancetourix est représenté avec sa lyre, prêt à chanter (ou du moins essayer). Fabriquée en résine, cette figurine capture l'humour et le charme du personnage.",
      price: 19.99,
      imageUrl: "assets/images/figurines/assurancetourix.jpg",
      inStock: true
    },
    {
      id: 5,
      name: "César",
      description: "La figurine de Jules César, l'ennemi juré des Gaulois, est représentée en tenue impériale romaine. Chaque détail, du laurier impérial à la toge, est fidèlement reproduit pour les collectionneurs exigeants.",
      price: 34.99,
      imageUrl: "assets/images/figurines/cesar.png",
      inStock: true
    },
    {
      id: 6,
      name: "Falbala",
      description: "Falbala, la belle Gauloise, est représentée dans sa robe élégante, capturant son charme et sa beauté. Fabriquée en résine, cette figurine est un must pour les fans de la série.",
      price: 27.99,
      imageUrl: "assets/images/figurines/falbala.png",
      inStock: false
    }
  ];

  constructor() { }

  /**
   * Récupère tous les produits
   * Simule un appel asynchrone avec Observable
   * @returns Observable<Product[]>
   */
  getProducts(): Observable<Product[]> {
    // Simule une latence réseau pour un comportement réaliste
    return of(this.products).pipe(
      delay(300) // 300ms de délai pour simuler un appel API
    );
  }

  /**
   * Récupère un produit par son ID
   * @param id - Identifiant du produit
   * @returns Observable<Product | undefined>
   */
  getProduct(id: number): Observable<Product | undefined> {
    const product = this.products.find(p => p.id === id);
    return of(product).pipe(
      delay(200) // 200ms de délai
    );
  }

  /**
   * Recherche des produits par terme
   * @param searchTerm - Terme de recherche
   * @returns Observable<Product[]>
   */
  searchProducts(searchTerm: string): Observable<Product[]> {
    if (!searchTerm.trim()) {
      return this.getProducts();
    }

    const normalizedTerm = searchTerm.toLowerCase().trim();
    const filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(normalizedTerm) ||
      product.description.toLowerCase().includes(normalizedTerm)
    );

    return of(filteredProducts).pipe(delay(250));
  }

  /**
   * Récupère les produits triés par prix
   * @param direction - 'asc' pour croissant, 'desc' pour décroissant
   * @returns Observable<Product[]>
   */
  getProductsSortedByPrice(direction: 'asc' | 'desc'): Observable<Product[]> {
    const sortedProducts = [...this.products].sort((a, b) => {
      return direction === 'asc' ? a.price - b.price : b.price - a.price;
    });

    return of(sortedProducts).pipe(delay(200));
  }

  /**
   * Récupère les produits en stock
   * @returns Observable<Product[]>
   */
  getProductsInStock(): Observable<Product[]> {
    const inStockProducts = this.products.filter(p => p.inStock);
    return of(inStockProducts).pipe(delay(200));
  }

  /**
   * Récupère les produits hors stock
   * @returns Observable<Product[]>
   */
  getProductsOutOfStock(): Observable<Product[]> {
    const outOfStockProducts = this.products.filter(p => !p.inStock);
    return of(outOfStockProducts).pipe(delay(200));
  }
}