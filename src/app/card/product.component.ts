import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProductsService } from '../products.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  template: `
    <div class="bg-gradient-to-br from-yellow-50 to-orange-50 min-h-screen">
      
      <!-- Navigation de retour -->
      <section class="py-4 px-4 bg-white/90 backdrop-blur-sm shadow-sm">
        <div class="container mx-auto flex justify-between items-center">
          <button 
            (click)="goBack()"
            class="flex items-center text-gray-600 hover:text-red-600 transition-colors duration-200">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            Retour au catalogue
          </button>
          
          <a 
            routerLink="/about"
            class="text-gray-600 hover:text-red-600 transition-colors duration-200 font-medium">
            📖 Notre Histoire
          </a>
        </div>
      </section>

      <!-- Loading State -->
      <div *ngIf="loading" class="flex justify-center items-center py-32">
        <div class="animate-spin w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full"></div>
        <span class="ml-4 text-xl text-gray-600">Chargement du produit...</span>
      </div>

      <!-- Product Not Found -->
      <div *ngIf="!loading && !product" class="text-center py-32">
        <div class="mb-8">
          <svg class="w-32 h-32 text-gray-400 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.175-5.5-2.709"></path>
          </svg>
          <h2 class="text-3xl font-bold text-gray-600 mb-4 title-font">Figurine introuvable</h2>
          <p class="text-gray-500 mb-8">La figurine que vous recherchez n'existe pas ou n'est plus disponible.</p>
          <button 
            (click)="goBack()"
            class="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
            Retour au catalogue
          </button>
        </div>
      </div>

      <!-- Product Details -->
      <div *ngIf="!loading && product" class="py-12 px-4">
        <div class="container mx-auto">
          
          <!-- Titre principal -->
          <div class="text-center mb-12">
            <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4 title-font">
              {{ product.name }}
            </h1>
            <div class="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium" 
                 [ngClass]="product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'">
              <span class="w-2 h-2 rounded-full mr-2" 
                    [ngClass]="product.inStock ? 'bg-green-500' : 'bg-red-500'"></span>
              {{ product.inStock ? 'Disponible en stock' : 'Temporairement indisponible' }}
            </div>
          </div>

          <!-- Contenu principal -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            <!-- Image du produit -->
            <div class="flex justify-center">
              <div class="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl p-8 shadow-xl max-w-md w-full">
                <img 
                  [src]="product.imageUrl" 
                  [alt]="product.name"
                  class="w-full h-96 object-contain drop-shadow-lg hover-scale"
                  (error)="onImageError($event)">
              </div>
            </div>

            <!-- Informations du produit -->
            <div class="flex flex-col justify-center">
              
              <!-- Prix -->
              <div class="mb-8">
                <div class="text-5xl font-bold text-red-600 mb-2">
                  {{ product.price | currency:'EUR':'symbol':'1.2-2' }}
                </div>
                <p class="text-gray-500">Prix TTC, livraison gratuite en France métropolitaine</p>
              </div>

              <!-- Description -->
              <div class="mb-8">
                <h2 class="text-2xl font-bold text-gray-800 mb-4 title-font">Description</h2>
                <p class="text-lg text-gray-700 leading-relaxed">
                  {{ product.description }}
                </p>
              </div>

              <!-- Caractéristiques -->
              <div class="mb-8">
                <h3 class="text-xl font-bold text-gray-800 mb-4 title-font">Caractéristiques</h3>
                <div class="bg-white/80 backdrop-blur-sm rounded-lg p-6 space-y-3">
                  <div class="flex justify-between border-b border-gray-200 pb-2">
                    <span class="text-gray-600">Référence</span>
                    <span class="font-semibold">#APV{{ product.id.toString().padStart(3, '0') }}</span>
                  </div>
                  <div class="flex justify-between border-b border-gray-200 pb-2">
                    <span class="text-gray-600">Matériau</span>
                    <span class="font-semibold">Résine haute qualité</span>
                  </div>
                  <div class="flex justify-between border-b border-gray-200 pb-2">
                    <span class="text-gray-600">Finition</span>
                    <span class="font-semibold">Peinte à la main</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-600">Disponibilité</span>
                    <span class="font-semibold" [ngClass]="product.inStock ? 'text-green-600' : 'text-red-600'">
                      {{ product.inStock ? 'En stock' : 'Rupture de stock' }}
                    </span>
                  </div>
                </div>
              </div>

              <!-- Boutons d'action -->
              <div class="space-y-4">
                <button 
                  [disabled]="!product.inStock"
                  [ngClass]="product.inStock ? 'bg-red-600 hover:bg-red-700 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'"
                  class="w-full font-bold py-4 px-8 rounded-lg transition-all duration-200 text-lg">
                  {{ product.inStock ? 'Ajouter au panier' : 'Produit indisponible' }}
                </button>
                
                <div class="grid grid-cols-2 gap-4">
                  <button 
                    class="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                    ❤️ Ajouter aux favoris
                  </button>
                  <button 
                    class="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                    📧 Partager
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Section complémentaire -->
          <div class="mt-16 max-w-4xl mx-auto">
            <div class="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <h3 class="text-2xl font-bold text-gray-800 mb-6 title-font text-center">
                🎨 Savoir-faire artisanal
              </h3>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div class="text-3xl mb-3">🏺</div>
                  <h4 class="font-semibold text-gray-800 mb-2">Fabrication artisanale</h4>
                  <p class="text-gray-600 text-sm">Chaque figurine est sculptée et peinte à la main par nos artisans passionnés</p>
                </div>
                <div>
                  <div class="text-3xl mb-3">✨</div>
                  <h4 class="font-semibold text-gray-800 mb-2">Qualité premium</h4>
                  <p class="text-gray-600 text-sm">Résine haute qualité et finitions soignées pour une durabilité exceptionnelle</p>
                </div>
                <div>
                  <div class="text-3xl mb-3">🚚</div>
                  <h4 class="font-semibold text-gray-800 mb-2">Livraison soignée</h4>
                  <p class="text-gray-600 text-sm">Emballage sécurisé et livraison gratuite pour protéger votre figurine</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    /* Styles spécifiques au composant product */

    /* Animation de hover pour l'image */
    .hover-scale {
      transition: transform 0.3s ease;
    }

    .hover-scale:hover {
      transform: scale(1.05);
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

    /* Amélioration des transitions */
    * {
      transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 200ms;
    }

    /* Style pour les boutons */
    button:hover:not(:disabled) {
      transform: translateY(-1px);
      box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    }

    button:active:not(:disabled) {
      transform: translateY(0);
    }

    /* Container responsive */
    .container {
      max-width: 1200px;
      margin: 0 auto;
    }

    /* Effet glassmorphism */
    .bg-white80 {
      background-color: rgba(255, 255, 255, 0.8);
      backdrop-filter: blur(8px);
    }

    .bg-white90 {
      background-color: rgba(255, 255, 255, 0.9);
      backdrop-filter: blur(10px);
    }

    /* Responsive adjustments */
    @media (max-width: 640px) {
      .title-font {
        font-size: 2rem;
        line-height: 1.2;
      }
      
      .grid {
        gap: 2rem;
      }
    }
  `]
})
export class ProductComponent implements OnInit {
  product: Product | null = null;
  loading = true;
  productId: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.productId = +id;
        this.loadProduct(this.productId);
      } else {
        this.loading = false;
      }
    });
  }

  /**
   * Charge les détails du produit
   */
  private loadProduct(id: number): void {
    this.loading = true;
    this.productsService.getProduct(id).subscribe({
      next: (product) => {
        this.product = product || null;
        this.loading = false;
      },
      error: (error) => {
        console.error('Erreur lors du chargement du produit:', error);
        this.product = null;
        this.loading = false;
      }
    });
  }

  /**
   * Navigation de retour
   */
  goBack(): void {
    this.router.navigate(['/']);
  }

  /**
   * Gestion des erreurs d'images
   */
  onImageError(event: any): void {
    event.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzg0IiBoZWlnaHQ9IjM4NCIgdmlld0JveD0iMCAwIDM4NCAzODQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzODQiIGhlaWdodD0iMzg0IiBmaWxsPSIjRjlEMEEzIi8+Cjx0ZXh0IHg9IjE5MiIgeT0iMjAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiMxNTEyMTciIHRleHQtYW5jaG9yPSJtaWRkbGUiPkZpZ3VyaW5lPC90ZXh0Pgo8dGV4dCB4PSIxOTIiIHk9IjIzMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjMTUxMjE3IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5JbWFnZTwvdGV4dD4KPC9zdmc+';
  }
}