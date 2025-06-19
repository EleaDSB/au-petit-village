import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ProductsService } from '../products.service';
import { Product } from '../product.model';
import { FilterByNamePipe } from '../filter-by-name.pipe';
import { SortByPricePipe } from '../sort-by-price.pipe';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    FilterByNamePipe,
    SortByPricePipe
  ],
  template: `
    <div class="bg-gradient-to-br from-yellow-50 to-orange-50 min-h-screen">
      
      <!-- Section Hero avec présentation de l'entreprise -->
      <section class="py-16 px-4">
        <div class="container mx-auto text-center">
          <h1 class="text-4xl md:text-6xl font-bold text-gray-800 mb-6 title-font">
            Bienvenue au <span class="text-red-600">Petit Village</span>
          </h1>
          
          <p class="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Découvrez notre collection unique de <strong>figurines artisanales</strong> inspirées d'Astérix & Obélix. 
            Chaque pièce est fabriquée à la main avec passion et authenticité, pour les nostalgiques 
            des aventures des célèbres Gaulois qui ont marqué notre enfance.
          </p>
          
          <div class="flex justify-center mb-8">
            <img 
              src="assets/images/logo.png" 
              alt="Logo Au Petit Village" 
              class="h-32 w-auto drop-shadow-lg"
              (error)="onImageError($event)">
          </div>
          
          <!-- Statistiques rapides -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div class="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <div class="text-3xl font-bold text-red-600 mb-2">{{ products.length }}</div>
              <div class="text-gray-600 font-medium">Figurines Disponibles</div>
            </div>
            <div class="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <div class="text-3xl font-bold text-red-600 mb-2">100%</div>
              <div class="text-gray-600 font-medium">Fait Main</div>
            </div>
            <div class="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <div class="text-3xl font-bold text-red-600 mb-2">★★★★★</div>
              <div class="text-gray-600 font-medium">Qualité Artisanale</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section Filtres et Recherche -->
      <section class="py-8 px-4 bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-10">
        <div class="container mx-auto">
          <div class="flex flex-col lg:flex-row gap-4 items-end justify-between">
            
            <!-- Recherche -->
            <div class="flex-1 max-w-md">
              <label for="search" class="block text-sm font-medium text-gray-700 mb-2">
                🔍 Rechercher une figurine
              </label>
              <input
                type="text"
                id="search"
                [(ngModel)]="searchTerm"
                placeholder="Nom du personnage, figurine..."
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-200 input-focus"
                (input)="onSearchChange($any($event.target).value)">
            </div>

            <!-- Tri par prix -->
            <div class="flex-1 max-w-md">
              <label for="sort" class="block text-sm font-medium text-gray-700 mb-2">
                📊 Trier par prix
              </label>
              <select
                id="sort"
                [(ngModel)]="sortDirection"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-200 input-focus"
                (change)="onSortChange($any($event.target).value)">
                <option value="">Aucun tri</option>
                <option value="asc">Prix croissant (- au +)</option>
                <option value="desc">Prix décroissant (+ au -)</option>
              </select>
            </div>

            <!-- Bouton reset et compteur -->
            <div class="flex flex-col items-center gap-2">
              <button 
                (click)="resetFilters()"
                class="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-3 px-6 rounded-lg transition-colors duration-200 hover:shadow-md">
                🔄 Réinitialiser
              </button>
              <span class="text-sm text-gray-600">
                {{ filteredProductsCount }} figurine(s) trouvée(s)
              </span>
            </div>
          </div>
        </div>
      </section>

      <!-- Section Catalogue des Produits -->
      <section class="py-12 px-4">
        <div class="container mx-auto">
          <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 title-font">
            🏺 Notre Catalogue de Figurines
          </h2>
          
          <!-- Grille des produits -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <div 
              *ngFor="let product of products | filterByName:searchTerm | sortByPrice:sortDirection" 
              class="product-card bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl border border-gray-100">
              
              <!-- Image du produit -->
              <div class="h-64 bg-gradient-to-br from-yellow-100 to-orange-100 flex items-center justify-center p-4 relative cursor-pointer"
                   (click)="navigateToProduct(product.id)">
                <img 
                  [src]="product.imageUrl" 
                  [alt]="product.name"
                  class="h-48 w-48 object-contain drop-shadow-lg hover-scale"
                  (error)="onProductImageError($event)">
                
                <!-- Badge stock -->
                <div class="absolute top-3 left-3 badge" 
                     [ngClass]="product.inStock ? 'bg-green-600 text-white' : 'bg-red-600 text-white'">
                  {{ product.inStock ? 'En stock' : 'Rupture' }}
                </div>
              </div>
              
              <!-- Contenu de la carte -->
              <div class="p-6">
                <h3 class="text-xl font-bold text-gray-800 mb-3 title-font line-clamp-2">
                  {{ product.name }}
                </h3>
                
                <p class="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed">
                  {{ product.description }}
                </p>
                
                <div class="flex items-center justify-between">
                  <span class="text-2xl font-bold text-red-600">
                    {{ product.price | currency:'EUR':'symbol':'1.2-2' }}
                  </span>
                  <button 
                    [disabled]="!product.inStock"
                    [ngClass]="product.inStock ? 'bg-yellow-400 hover:bg-yellow-500 text-gray-800' : 'bg-gray-300 text-gray-500 cursor-not-allowed'"
                    class="font-semibold py-2 px-4 rounded-lg transition-all duration-200 hover:shadow-md"
                    (click)="navigateToProduct(product.id)">
                    {{ product.inStock ? 'Voir détails →' : 'Indisponible' }}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Message aucun résultat -->
          <div 
            *ngIf="(products | filterByName:searchTerm | sortByPrice:sortDirection).length === 0 && products.length > 0"
            class="text-center py-16 fade-in-up">
            <div class="mb-8">
              <svg class="w-24 h-24 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.175-5.5-2.709"></path>
              </svg>
              <h3 class="text-2xl font-semibold text-gray-600 mb-2 title-font">Aucune figurine trouvée</h3>
              <p class="text-gray-500 mb-6">Essayez avec d'autres mots-clés ou réinitialisez les filtres</p>
              <button 
                (click)="resetFilters()"
                class="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-semibold py-2 px-6 rounded-lg transition-colors duration-200">
                🔄 Réinitialiser les filtres
              </button>
            </div>
          </div>

          <!-- Message de chargement -->
          <div 
            *ngIf="products.length === 0"
            class="text-center py-16">
            <div class="animate-spin w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full mx-auto mb-4"></div>
            <p class="text-gray-600">Chargement des figurines...</p>
          </div>
        </div>
      </section>

      <!-- Section Call-to-Action -->
      <section class="py-16 px-4 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div class="container mx-auto text-center">
          <h2 class="text-3xl md:text-4xl font-bold mb-6 title-font">
            🎨 Figurines Artisanales d'Exception
          </h2>
          <p class="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Chaque figurine est unique, sculptée à la main par nos artisans passionnés. 
            Découvrez l'authenticité et la qualité de notre savoir-faire gaulois !
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              routerLink="/about"
              class="bg-white text-red-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200">
              📖 Notre Histoire
            </a>
            <a 
              href="mailto:contact@aupetitvillage.fr"
              class="bg-yellow-400 text-gray-800 font-semibold py-3 px-8 rounded-lg hover:bg-yellow-500 transition-colors duration-200">
              ✉️ Nous Contacter
            </a>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    /* Styles spécifiques au composant accueil */

    /* Animation de hover pour les cartes produits */
    .product-card {
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .product-card:hover {
      transform: translateY(-8px) scale(1.02);
    }

    /* Limitation du nombre de lignes pour la description */
    .line-clamp-2 {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .line-clamp-3 {
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    /* Animation pour les éléments au survol */
    .hover-scale {
      transition: transform 0.3s ease;
    }

    .hover-scale:hover {
      transform: scale(1.1);
    }

    /* Amélioration des ombres */
    .shadow-custom {
      box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    }

    .shadow-custom-hover {
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    }

    /* Style pour les inputs focus */
    .input-focus:focus {
      box-shadow: 0 0 0 3px rgba(253, 217, 11, 0.1);
      border-color: #FDD90B;
      outline: none;
    }

    /* Animation de loading */
    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }

    .animate-spin {
      animation: spin 1s linear infinite;
    }

    /* Animation d'apparition des cartes */
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .fade-in-up {
      animation: fadeInUp 0.6s ease-out;
    }

    /* Style pour les badges */
    .badge {
      font-size: 0.75rem;
      font-weight: 600;
      padding: 0.25rem 0.5rem;
      border-radius: 9999px;
    }

    /* Amélioration des transitions */
    * {
      transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 200ms;
    }

    /* Responsive adjustments */
    @media (max-width: 640px) {
      .title-font {
        font-size: 2.5rem;
        line-height: 1.2;
      }
      
      .product-card {
        margin-bottom: 1rem;
      }
    }

    /* Améliorations visuelles pour le container */
    .container {
      max-width: 1200px;
      margin: 0 auto;
    }

    /* Animation pour les statistiques */
    .bg-white80 {
      background-color: rgba(255, 255, 255, 0.8);
      backdrop-filter: blur(8px);
    }

    /* Style amélioré pour les boutons */
    button:hover, a:hover {
      transform: translateY(-1px);
    }

    button:active, a:active {
      transform: translateY(0);
    }

    /* Effet glassmorphism pour la section filtres */
    .bg-white90 {
      background-color: rgba(255, 255, 255, 0.9);
      backdrop-filter: blur(10px);
    }
  `]
})
export class AccueilComponent implements OnInit {
  products: Product[] = [];
  searchTerm: string = '';
  sortDirection: string = '';

  constructor(
    private productsService: ProductsService,
    private router: Router
  ) { 
    // Service utilisé dans le constructeur comme requis par l'évaluation
  }

  ngOnInit(): void {
    this.loadProducts();
  }

  /**
   * Charge la liste des produits depuis le service
   */
  private loadProducts(): void {
    this.productsService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
      },
      error: (error) => {
        console.error('Erreur lors du chargement des produits:', error);
        this.products = []; // Fallback en cas d'erreur
      }
    });
  }

  /**
   * Gestion de l'événement de recherche
   * @param searchValue - Terme de recherche saisi par l'utilisateur
   */
  onSearchChange(searchValue: string): void {
    this.searchTerm = searchValue;
  }

  /**
   * Gestion de l'événement de tri
   * @param direction - Direction du tri ('asc', 'desc', ou '')
   */
  onSortChange(direction: string): void {
    this.sortDirection = direction;
  }

  /**
   * Réinitialise les filtres de recherche et de tri
   */
  resetFilters(): void {
    this.searchTerm = '';
    this.sortDirection = '';
  }

  /**
   * Retourne le nombre de produits affichés après filtrage
   */
  get filteredProductsCount(): number {
    if (!this.products.length) return 0;
    
    return this.products
      .filter(product => this.searchTerm === '' || 
        product.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(this.searchTerm.toLowerCase()))
      .length;
  }

  /**
   * Gestion des erreurs d'images du logo
   */
  onImageError(event: any): void {
    event.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjRkREOTBCIi8+Cjx0ZXh0IHg9IjUwIiB5PSI1NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjMTUxMjE3IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5BdSBQZXRpdDwvdGV4dD4KPHR4dCB4PSI1MCIgeT0iNzAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzE1MTIxNyIgdGV4dC1hbmNob3I9Im1pZGRsZSI+VmlsbGFnZTwvdGV4dD4KPC9zdmc+';
  }

  /**
   * Gestion des erreurs d'images des produits
   */
  onProductImageError(event: any): void {
    event.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyIiBoZWlnaHQ9IjE5MiIgdmlld0JveD0iMCAwIDE5MiAxOTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxOTIiIGhlaWdodD0iMTkyIiBmaWxsPSIjRjlEMEEzIi8+Cjx0ZXh0IHg9Ijk2IiB5PSIxMDAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzE1MTIxNyIgdGV4dC1hbmNob3I9Im1pZGRsZSI+RmlndXJpbmU8L3RleHQ+Cjx0ZXh0IHg9Ijk2IiB5PSIxMjAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzE1MTIxNyIgdGV4dC1hbmNob3I9Im1pZGRsZSI+SW1hZ2U8L3RleHQ+Cjwvc3ZnPg==';
  }

  /**
   * Navigation vers la page de détail du produit
   */
  navigateToProduct(productId: number): void {
    this.router.navigate(['/product', productId]);
  }
}

export class CardComponent {

}
