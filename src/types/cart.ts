import type { Talla } from '../data/products';

export interface CartItem {
  id: string;
  productoId: string;
  nombre: string;
  talla: Talla | null;
  color: string;
  cantidad: number;
  precioUnitario: number;
}
