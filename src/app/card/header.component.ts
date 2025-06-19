import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  template: `
    <header class="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-yellow-200">
      <div class="container mx-auto px-4">
        <nav class="flex items-center justify-between py-4">
          
          <!-- Logo et nom -->
          <div class="flex items-center space-x-3">
            <button 
              (click)="navigateToHome()"
              class="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200">
              <img 
                src="assets/images/logo.png" 
                alt="Logo Au Petit Village" 
                class="h-12 w-12 object-cover rounded-full border-2 border-black drop-shadow-md"
                (error)="onLogoError($event)">
              <div class="flex flex-col">
                <span class="text-xl md:text-2xl font-bold text-gray-800 title-font">
                  Au Petit Village
                </span>
                <span class="text-xs text-gray-500 hidden md:block">
                  Figurines Artisanales
                </span>
              </div>
            </button>
          </div>

          <!-- Navigation principale -->
          <div class="hidden md:flex items-center space-x-8">
            <a 
              routerLink="/"
              routerLinkActive="active"
              [routerLinkActiveOptions]="{exact: true}"
              class="nav-link text-gray-700 hover:text-red-600 font-medium transition-colors duration-200">
              🏠 Accueil
            </a>
            <a 
              routerLink="/about"
              routerLinkActive="active"
              class="nav-link text-gray-700 hover:text-red-600 font-medium transition-colors duration-200">
              📖 Notre Histoire
            </a>
          </div>

          <!-- Bouton menu mobile -->
          <button 
            (click)="toggleMobileMenu()"
            class="md:hidden flex items-center justify-center w-10 h-10 text-gray-700 hover:text-red-600 transition-colors duration-200">
            <svg 
              class="w-6 h-6" 
              [class.hidden]="isMobileMenuOpen"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
            <svg 
              class="w-6 h-6" 
              [class.hidden]="!isMobileMenuOpen"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </nav>

        <!-- Menu mobile -->
        <div 
          class="md:hidden overflow-hidden transition-all duration-300 ease-in-out"
          [class.max-h-0]="!isMobileMenuOpen"
          [class.max-h-96]="isMobileMenuOpen"
          [class.pb-0]="!isMobileMenuOpen"
          [class.pb-4]="isMobileMenuOpen">
          <div class="flex flex-col space-y-3 pt-4 border-t border-gray-200">
            <a 
              routerLink="/"
              routerLinkActive="active"
              [routerLinkActiveOptions]="{exact: true}"
              (click)="closeMobileMenu()"
              class="mobile-nav-link text-gray-700 hover:text-red-600 font-medium py-2 px-4 rounded-lg transition-colors duration-200">
              🏠 Accueil
            </a>
            <a 
              routerLink="/about"
              routerLinkActive="active"
              (click)="closeMobileMenu()"
              class="mobile-nav-link text-gray-700 hover:text-red-600 font-medium py-2 px-4 rounded-lg transition-colors duration-200">
              📖 Notre Histoire
            </a>
          </div>
        </div>
      </div>
    </header>
  `,
  styles: [`
    /* Styles spécifiques au header */
    .container {
      max-width: 1200px;
      margin: 0 auto;
    }

    /* Style pour les liens de navigation */
    .nav-link {
      position: relative;
      text-decoration: none;
    }

    .nav-link:hover {
      transform: translateY(-1px);
    }

    .nav-link.active {
      color: #dc2626;
      font-weight: 600;
    }

    .nav-link.active::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 0;
      right: 0;
      height: 2px;
      background-color: #dc2626;
      border-radius: 1px;
    }

    /* Style pour les liens mobile */
    .mobile-nav-link {
      text-decoration: none;
    }

    .mobile-nav-link:hover {
      background-color: rgba(254, 240, 138, 0.3);
    }

    .mobile-nav-link.active {
      color: #dc2626;
      font-weight: 600;
      background-color: rgba(254, 240, 138, 0.5);
    }

    /* Animation pour le logo */
    .title-font {
      font-family: 'Bubbleboddy neue', 'Comfortaa', sans-serif;
    }

    /* Effet glassmorphism pour le header */
    header {
      background-color: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
    }

    /* Transitions générales */
    * {
      transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 200ms;
    }

    /* Animation pour les boutons */
    button:hover:not(:disabled) {
      transform: translateY(-1px);
    }

    button:active:not(:disabled) {
      transform: translateY(0);
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
      .title-font {
        font-size: 1.25rem;
      }
    }

    /* Style pour l'ombre du header */
    header {
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }

    /* Animation pour le menu mobile */
    .max-h-0 {
      max-height: 0;
    }

    .max-h-96 {
      max-height: 24rem;
    }

    /* Amélioration de l'accessibilité */
    button:focus,
    a:focus {
      outline: 2px solid #fbbf24;
      outline-offset: 2px;
    }
  `]
})
export class HeaderComponent {
  isMobileMenuOpen = false;

  constructor(private router: Router) {}

  /**
   * Navigation vers la page d'accueil
   */
  navigateToHome(): void {
    this.router.navigate(['/']);
    this.closeMobileMenu();
  }

  /**
   * Basculer l'affichage du menu mobile
   */
  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  /**
   * Fermer le menu mobile
   */
  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }

  /**
   * Gestion des erreurs du logo
   */
  onLogoError(event: any): void {
    event.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4IiBmaWxsPSIjRkREOTBCIiByeD0iOCIvPgo8dGV4dCB4PSIyNCIgeT0iMjgiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzE1MTIxNyIgdGV4dC1hbmNob3I9Im1pZGRsZSI+QVBWPC90ZXh0Pgo8L3N2Zz4K';
  }
}