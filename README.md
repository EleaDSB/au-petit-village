# Au Petit Village 🏺

Une application e-commerce Angular 17 dédiée à la vente de figurines artisanales inspirées d'Astérix & Obélix.

## 🎯 À propos du projet

**Au Petit Village** est une boutique en ligne spécialisée dans la confection artisanale de figurines inspirées de l'univers d'Astérix & Obélix. Chaque pièce est sculptée à la main par nos artisans passionnés pour faire revivre la magie du petit village gaulois.

## ✨ Fonctionnalités

- 🏠 **Page d'accueil** avec catalogue de produits
- 🔍 **Recherche et filtrage** des figurines
- 📊 **Tri par prix** (croissant/décroissant)
- 📱 **Design responsive** adapté mobile et desktop
- 🎨 **Interface moderne** avec Tailwind CSS
- 🧭 **Navigation** entre les pages avec routing Angular
- 📖 **Page À propos** de l'entreprise
- 🦶 **Header et Footer** avec navigation

## 🛠️ Technologies utilisées

- **Angular 17** avec architecture standalone
- **TypeScript 5.4**
- **Tailwind CSS** pour le styling
- **Angular SSR** avec Express server
- **RxJS** pour la programmation réactive
- **Google Fonts** (Comfortaa)

## 🚀 Installation et développement

### Prérequis
- Node.js (version 18+ recommandée)
- npm ou yarn
- Angular CLI 17

### Installation
```bash
# Cloner le repository
git clone [URL_DU_REPO]
cd au-petit-village

# Installer les dépendances
npm install
```

### Serveur de développement
```bash
# Démarrer le serveur de développement
ng serve
# ou
npm start
```

Naviguez vers `http://localhost:4200/`. L'application se rechargera automatiquement lors de modifications.

### Build de production
```bash
# Build pour la production
ng build

# Build avec watch pour le développement
ng build --watch --configuration development
```

### Serveur SSR
```bash
# Démarrer le serveur SSR
npm run serve:ssr:au-petit-village
```

## 📁 Structure du projet

```
src/
├── app/
│   ├── card/
│   │   ├── home.component.ts      # Page d'accueil avec catalogue
│   │   ├── about.component.ts     # Page à propos
│   │   ├── product.component.ts   # Page détail produit
│   │   ├── header.component.ts    # En-tête de navigation
│   │   └── footer.component.ts    # Pied de page
│   ├── products.service.ts        # Service de gestion des produits
│   ├── product.model.ts          # Interface Product
│   ├── filter-by-name.pipe.ts    # Pipe de filtrage par nom
│   ├── sort-by-price.pipe.ts     # Pipe de tri par prix
│   ├── app.routes.ts             # Configuration des routes
│   └── app.component.ts          # Composant racine
├── assets/                       # Images et ressources statiques
└── index.html                   # Template HTML principal
```

## 🎨 Palette de couleurs

- `#F9D0A3` - Crème clair
- `#FDD90B` - Jaune Asterix
- `#151217` - Noir/Gris foncé
- `#DA001E` - Rouge Asterix

## 🧭 Routes disponibles

- `/` - Page d'accueil (catalogue)
- `/about` - Page à propos
- `/product/:id` - Détail d'un produit

## 📦 Génération de code

```bash
# Générer un nouveau composant
ng generate component component-name

# Autres générateurs disponibles
ng generate directive|pipe|service|class|guard|interface|enum
```

## 🔧 Configuration Angular

Le projet utilise l'architecture **standalone** d'Angular 17 :
- Pas de modules (NgModules)
- Components autonomes
- Configuration dans `app.config.ts`
- Routing dans `app.routes.ts`

## 🚀 Déploiement

Le projet est configuré pour le **Server-Side Rendering (SSR)** avec Express pour de meilleures performances et SEO.

## 📝 Scripts disponibles

```bash
npm start          # Serveur de développement
npm run build      # Build de production
npm run watch      # Build avec watch
npm run serve:ssr  # Serveur SSR
```

## 📞 Support

Pour toute question ou aide, consultez la [documentation Angular](https://angular.io/docs) ou utilisez `ng help`.

---

*Projet réalisé avec ❤️ et beaucoup de passion gauloise !*