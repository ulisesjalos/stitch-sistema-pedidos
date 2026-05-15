import { useState } from 'react';
import { ShoppingBag } from 'lucide-react';
import ClientForm from '../components/ClientForm';
import FilterTabs from '../components/FilterTabs';
import ProductCard from '../components/ProductCard';
import CartDrawer from '../components/CartDrawer';
import { productosPorCategoria, generosPorCategoria, categorias } from '../data/products';
import type { Categoria, Talla } from '../data/products';
import type { CartItem } from '../types/cart';

export default function CatalogPage() {
  const [nombre, setNombre] = useState('');
  const [celular, setCelular] = useState('');
  const [touched, setTouched] = useState(false);
  const [categoria, setCategoria] = useState<Categoria>('Playeras');
  const [filtro, setFiltro] = useState('Todos');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  const productosActuales = productosPorCategoria[categoria];
  const generosActuales = generosPorCategoria[categoria];

  const productosFiltrados =
    filtro === 'Todos'
      ? productosActuales
      : productosActuales.filter((p) => p.genero === filtro);

  const cartCount = cart.reduce((a, i) => a + i.cantidad, 0);

  function handleCategoriaChange(cat: Categoria) {
    setCategoria(cat);
    setFiltro('Todos');
  }

  function handleAdd(item: {
    productoId: string;
    nombre: string;
    talla: Talla | null;
    color: string;
    cantidad: number;
    precioUnitario: number;
  }) {
    const tallaKey = item.talla ?? 'U';
    const id = `${item.productoId}-${tallaKey}-${item.color.toLowerCase()}-${Date.now()}`;
    setCart((prev) => [...prev, { ...item, id }]);
  }

  function handleRemove(id: string) {
    setCart((prev) => prev.filter((i) => i.id !== id));
  }

  function handleValidationFail() {
    setTouched(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="fixed top-0 left-0 right-0 z-40 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between">
            <div className="font-black text-xl tracking-tighter text-gray-900">STITCH</div>
            <button
              onClick={() => setCartOpen(true)}
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

          <div className="flex gap-1 -mb-px overflow-x-auto whitespace-nowrap scrollbar-hide">
            {categorias.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoriaChange(cat)}
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

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="mb-10">
          <p className="text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase mb-1">
            Catalogo
          </p>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
            {categoria}
          </h1>
        </div>

        <div className="mb-8">
          <ClientForm
            nombre={nombre}
            celular={celular}
            onNombreChange={setNombre}
            onCelularChange={setCelular}
            touched={touched}
          />
        </div>

        <div className="mb-6">
          <FilterTabs generos={generosActuales} active={filtro} onChange={setFiltro} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {productosFiltrados.map((p) => (
            <ProductCard key={p.id} producto={p} onAdd={handleAdd} />
          ))}
        </div>

        {productosFiltrados.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            <p className="text-sm">No hay productos en esta categoria.</p>
          </div>
        )}
      </main>

      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cart}
        onRemove={handleRemove}
        nombre={nombre}
        celular={celular}
        onValidationFail={handleValidationFail}
      />
    </div>
  );
}
