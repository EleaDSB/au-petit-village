/**
 * Interface définissant la structure d'un produit (figurine)
 */
export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    inStock: boolean;
  }