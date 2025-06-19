import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  template: `
    <div class="bg-gradient-to-br from-yellow-50 to-orange-50 min-h-screen">

      <!-- Section Hero -->
      <section class="py-16 px-4">
        <div class="container mx-auto text-center">
          <h1 class="text-4xl md:text-6xl font-bold text-gray-800 mb-6 title-font">
            Notre <span class="text-red-600">Histoire</span>
          </h1>
          
          <p class="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Découvrez l'aventure d'<strong>Au Petit Village</strong>, une entreprise passionnée 
            dédiée à la création de figurines artisanales inspirées de l'univers d'Astérix & Obélix.
          </p>
          
          <div class="flex justify-center mb-8 rounded-lg">
            <img 
              src="assets/images/logo.png" 
              alt="Logo Au Petit Village" 
              class="h-32 w-auto drop-shadow-lg rounded-lg"
              (error)="onImageError($event)">
          </div>
        </div>
      </section>

      <!-- Section Présentation de l'entreprise -->
      <section class="py-12 px-4">
        <div class="container mx-auto">
          <div class="max-w-4xl mx-auto">
            
            <!-- Carte principale de présentation -->
            <div class="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl mb-12">
              <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-8 title-font text-center">
                🏺 Au Petit Village
              </h2>
              
              <div class="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p class="text-xl mb-6">
                  <strong>Au Petit Village</strong> est une entreprise artisanale française spécialisée dans la confection 
                  de figurines de collection inspirées de la célèbre bande dessinée <em>Astérix et Obélix</em>.
                </p>
                
                <p class="mb-6">
                  Née de la passion pour l'univers créé par René Goscinny et Albert Uderzo, notre entreprise 
                  s'adresse à une clientèle nostalgique, qui a grandi avec 
                  les aventures des célèbres Gaulois et souhaite retrouver la magie de ces personnages emblématiques.
                </p>
                
                <p class="mb-6">
                  Chaque figurine est <strong>sculptée à la main</strong> par nos artisans passionnés, dans le respect 
                  des traditions françaises de l'artisanat. Nous privilégions les matériaux nobles comme la résine 
                  haute qualité et les finitions peintes à la main pour garantir une authenticité et une durabilité 
                  exceptionnelles.
                </p>
                
                <p>
                  Notre mission est de faire revivre l'esprit d'Astérix et Obélix à travers des créations uniques 
                  qui capturent l'humour, la bravoure et la convivialité de nos héros gaulois préférés.
                </p>
              </div>
            </div>

            <!-- Section Valeurs -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div class="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg text-center">
                <div class="text-4xl mb-4">🎨</div>
                <h3 class="text-xl font-bold text-gray-800 mb-3 title-font">Artisanat Français</h3>
                <p class="text-gray-600">
                  Chaque figurine est créée dans nos ateliers français par des artisans qualifiés, 
                  perpétuant les traditions du savoir-faire hexagonal.
                </p>
              </div>
              
              <div class="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg text-center">
                <div class="text-4xl mb-4">💝</div>
                <h3 class="text-xl font-bold text-gray-800 mb-3 title-font">Nostalgie & Passion</h3>
                <p class="text-gray-600">
                  Nous comprenons l'attachement émotionnel à ces personnages et créons des pièces 
                  qui réveillent vos plus beaux souvenirs d'enfance.
                </p>
              </div>
              
              <div class="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg text-center">
                <div class="text-4xl mb-4">⭐</div>
                <h3 class="text-xl font-bold text-gray-800 mb-3 title-font">Qualité Premium</h3>
                <p class="text-gray-600">
                  Matériaux nobles, finitions soignées et attention aux détails : 
                  chaque figurine est une œuvre d'art miniature.
                </p>
              </div>
            </div>

            <!-- Section Public cible -->
            <div class="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 md:p-12 text-white mb-12">
              <h2 class="text-3xl md:text-4xl font-bold mb-6 title-font text-center">
                👥 Notre Communauté : les nostalgiques Gaulois
              </h2>
              
              <div class="grid grid-cols-1 md:grid-cols-1 gap-8 items-center">
                <div>
                  <p class="text-lg leading-relaxed opacity-90">
                    Nos figurines s'adressent aux <strong>collectionneurs et amateurs</strong> âgés de 30 à 55 ans, 
                    qui ont découvert Astérix et Obélix dans leur jeunesse et souhaitent aujourd'hui posséder 
                    des pièces de qualité représentant leurs héros d'enfance.
                  </p>
                </div>
              </div>
            </div>

            <!-- Section Équipe -->
            <div class="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl mb-12">
              <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-8 title-font text-center">
                🛠️ Notre Équipe
              </h2>
              
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="text-center">
                  <div class="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span class="text-2xl">👨‍🎨</span>
                  </div>
                  <h4 class="font-bold text-gray-800 mb-2">Maîtres Sculpteurs</h4>
                  <p class="text-gray-600 text-sm">
                    Artisans expérimentés spécialisés dans la sculpture miniature et le modelage
                  </p>
                </div>
                
                <div class="text-center">
                  <div class="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span class="text-2xl">🎨</span>
                  </div>
                  <h4 class="font-bold text-gray-800 mb-2">Peintres d'Art</h4>
                  <p class="text-gray-600 text-sm">
                    Spécialistes de la peinture miniature qui donnent vie à chaque personnage
                  </p>
                </div>
                
                <div class="text-center">
                  <div class="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span class="text-2xl">🔍</span>
                  </div>
                  <h4 class="font-bold text-gray-800 mb-2">Contrôle Qualité</h4>
                  <p class="text-gray-600 text-sm">
                    Équipe dédiée à garantir la perfection de chaque figurine avant expédition
                  </p>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    /* Styles spécifiques au composant about */
    
    /* Container responsive */
    .container {
      max-width: 1200px;
      margin: 0 auto;
    }

    /* Amélioration de la typography */
    .prose p {
      margin-bottom: 1.5rem;
    }

    .prose strong {
      color: #dc2626;
      font-weight: 600;
    }

    .prose em {
      color: #7c2d12;
      font-style: italic;
    }

    /* Animation de hover pour les cartes */
    .bg-white\\/80:hover,
    .bg-white\\/90:hover {
      transform: translateY(-2px);
      box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.1);
    }

    /* Animation pour les boutons */
    button:hover:not(:disabled),
    a:hover {
      transform: translateY(-1px);
      box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
    }

    button:active:not(:disabled),
    a:active {
      transform: translateY(0);
    }

    /* Transitions globales */
    * {
      transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 200ms;
    }

    /* Effet glassmorphism */
    .bg-white\\/80 {
      background-color: rgba(255, 255, 255, 0.8);
      backdrop-filter: blur(8px);
    }

    .bg-white\\/90 {
      background-color: rgba(255, 255, 255, 0.9);
      backdrop-filter: blur(10px);
    }

    /* Responsive adjustments */
    @media (max-width: 640px) {
      .title-font {
        font-size: 2rem;
        line-height: 1.2;
      }
      
      .prose {
        font-size: 1rem;
      }
      
      .grid {
        gap: 1.5rem;
      }
    }

    /* Animation pour les éléments au scroll */
    .bg-white\\/80,
    .bg-white\\/90,
    .bg-gradient-to-r {
      animation: fadeInUp 0.6s ease-out;
    }

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
  `]
})
export class AboutComponent {

  constructor() {}

  /**
   * Gestion des erreurs d'images
   */
  onImageError(event: any): void {
    event.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjRkREOTBCIi8+Cjx0ZXh0IHg9IjUwIiB5PSI1NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjMTUxMjE3IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5BdSBQZXRpdDwvdGV4dD4KPHR4dCB4PSI1MCIgeT0iNzAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzE1MTIxNyIgdGV4dC1hbmNob3I9Im1pZGRsZSI+VmlsbGFnZTwvdGV4dD4KPC9zdmc+';
  }
}