import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  template: `
    <footer class="bg-gradient-to-r from-gray-800 to-gray-900 text-white">
      
      <!-- Section principale du footer -->
      <div class="container mx-auto px-4 py-12">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <!-- Colonne 1: Logo et présentation -->
          <div class="lg:col-span-2">
            <div class="flex items-center space-x-3 mb-4">
              <img 
                src="assets/images/logo.png" 
                alt="Logo Au Petit Village" 
                class="h-12 w-12 object-cover rounded-full border-2 border-yellow-400"
                (error)="onLogoError($event)">
              <div>
                <h3 class="text-xl font-bold title-font text-yellow-400">Au Petit Village</h3>
                <p class="text-sm text-gray-300">Figurines Artisanales</p>
              </div>
            </div>
            <p class="text-gray-300 leading-relaxed mb-4 max-w-md">
              Spécialiste de la confection artisanale de figurines inspirées d'Astérix & Obélix. 
              Chaque pièce est sculptée à la main par nos artisans passionnés pour faire revivre 
              la magie du petit village gaulois.
            </p>
          </div>

          <!-- Colonne 2: Navigation -->
          <div>
            <h4 class="text-lg font-semibold title-font text-yellow-400 mb-4">Navigation</h4>
            <ul class="space-y-2">
              <li>
                <a 
                  routerLink="/"
                  class="text-gray-300 hover:text-yellow-400 transition-colors duration-200 flex items-center">
                  <span class="mr-2">🏠</span> Accueil
                </a>
              </li>
              <li>
                <a 
                  routerLink="/about"
                  class="text-gray-300 hover:text-yellow-400 transition-colors duration-200 flex items-center">
                  <span class="mr-2">📖</span> Notre Histoire
                </a>
              </li>
            </ul>
          </div>

          <!-- Colonne 3: Informations -->
          <div>
            <h4 class="text-lg font-semibold title-font text-yellow-400 mb-4">Informations</h4>
            <ul class="space-y-2 text-gray-300">
              <li class="flex items-center">
                <span class="mr-2">🎨</span> Artisanat 100% français
              </li>
              <li class="flex items-center">
                <span class="mr-2">🚚</span> Livraison gratuite
              </li>
              <li class="flex items-center">
                <span class="mr-2">⭐</span> Qualité premium
              </li>
              <li class="flex items-center">
                <span class="mr-2">🔒</span> Paiement sécurisé
              </li>
            </ul>
          </div>
        </div>

        <!-- Section réseaux sociaux et newsletter -->
        <div class="border-t border-gray-700 mt-8 pt-8">
          <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            <!-- Newsletter
            <div class="text-center md:text-left">
              <h4 class="text-lg font-semibold title-font text-yellow-400 mb-2">
                📧 Restez informé !
              </h4>
              <p class="text-gray-300 text-sm">
                Recevez nos actualités et nouveautés en avant-première
              </p>
            </div> -->

            <!-- Réseaux sociaux -->
            <div class="flex items-center space-x-4">
              <span class="text-gray-400 text-sm">Suivez-nous :</span>
              <a 
                href="#"
                class="hover:opacity-80 transition-opacity duration-200"
                title="Facebook">
                <img 
                  src="assets/facebook.png" 
                  alt="Facebook" 
                  class="h-8 w-8 object-contain">
              </a>
              <a 
                href="#"
                class="hover:opacity-80 transition-opacity duration-200"
                title="Instagram">
                <img 
                  src="assets/instagram.jpeg" 
                  alt="Instagram" 
                  class="h-8 w-8 object-contain rounded-lg">
              </a>
              <a 
                href="#"
                class="hover:opacity-80 transition-opacity duration-200"
                title="X (Twitter)">
                <img 
                  src="assets/X.png" 
                  alt="X (Twitter)" 
                  class="h-8 w-8 object-contain">
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Section copyright -->
      <div class="bg-gray-900 border-t border-gray-700">
        <div class="container mx-auto px-4 py-4">
          <div class="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div class="mb-2 md:mb-0">
              © {{ currentYear }} Au Petit Village. Tous droits réservés.
            </div>
            <div class="flex space-x-4">
              <a 
                href="#"
                class="hover:text-yellow-400 transition-colors duration-200">
                Mentions légales
              </a>
              <a 
                href="#"
                class="hover:text-yellow-400 transition-colors duration-200">
                Politique de confidentialité
              </a>
              <a 
                href="#"
                class="hover:text-yellow-400 transition-colors duration-200">
                CGV
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    /* Styles spécifiques au footer */
    .container {
      max-width: 1200px;
      margin: 0 auto;
    }

    /* Style pour les titres */
    .title-font {
      font-family: 'Bubbleboddy neue', 'Comfortaa', sans-serif;
    }

    /* Animation pour les liens */
    a:hover {
      transform: translateY(-1px);
    }

    /* Transitions générales */
    * {
      transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 200ms;
    }

    /* Style pour le logo */
    img {
      transition: transform 0.3s ease;
    }

    img:hover {
      transform: scale(1.05);
    }

    /* Amélioration de la lisibilité */
    ul li {
      margin-bottom: 0.5rem;
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
      .title-font {
        font-size: 1.125rem;
      }
      
      .grid {
        gap: 2rem;
      }
    }

    /* Style pour les séparateurs */
    .border-gray-700 {
      border-color: #374151;
    }

    /* Animation pour les éléments interactifs */
    a:focus {
      outline: 2px solid #fbbf24;
      outline-offset: 2px;
    }

    /* Amélioration du contraste */
    .text-gray-300 {
      color: #d1d5db;
    }

    .text-gray-400 {
      color: #9ca3af;
    }

    /* Style pour les emojis */
    span[class*="mr-2"] {
      display: inline-block;
      width: 1.2em;
    }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  constructor() {}

  /**
   * Gestion des erreurs du logo
   */
  onLogoError(event: any): void {
    event.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4IiBmaWxsPSIjRkJCRjI0IiByeD0iOCIvPgo8dGV4dCB4PSIyNCIgeT0iMjgiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzM3NDE1MSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+QVBWPC90ZXh0Pgo8L3N2Zz4K';
  }
}