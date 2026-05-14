import { ShoppingBag } from 'lucide-react';
import StitchLogo from './StitchLogo';
import type { Categoria } from '../data/products';
import { categorias } from '../data/products';

interface HeaderProps {
  cartCount: number;
  onCartOpen: () => void;
  categoria: Categoria;
  onCategoriaChange: (c: Categoria) => void;
}

export default function Header({ cartCount, onCartOpen, categoria, onCategoriaChange }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <StitchLogo />
          <button
            onClick={onCartOpen}
            className="relative flex items-center gap-1.5 text-gray-700 hover:text-gray-900 transition-colors"
            aria-label="Abrir carrito"
          >
            <ShoppingBag size={24} strokeWidth={1.5} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-gray-900 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center leading-none">
                {cartCount > 99 ? '99+' : cartCount}
              </span>
            )}
          </button>
        </div>
        
        {/* Contenedor corregido para scroll horizontal en móvil */}
        <div className="flex gap-1 -mb-px overflow-x-auto whitespace-nowrap scrollbar-hide">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => onCategoriaChange(cat)}
              className={`px-4 py-2 text-sm font-semibold transition-colors relative flex-shrink-0 ${
                categoria === cat
                  ? 'text-gray-900'
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              {cat}
              {categoria === cat && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gray-900 rounded-full" />
              )}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}