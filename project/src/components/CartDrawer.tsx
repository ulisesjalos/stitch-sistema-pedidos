import { X, Trash2, MessageCircle, ShoppingBag } from 'lucide-react';
import type { CartItem } from '../types/cart';

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (id: string) => void;
  nombre: string;
  celular: string;
  onValidationFail: () => void;
}

export default function CartDrawer({
  open,
  onClose,
  items,
  onRemove,
  nombre,
  celular,
  onValidationFail,
}: CartDrawerProps) {
  const total = items.reduce((acc, i) => acc + i.precioUnitario * i.cantidad, 0);

  function handleWhatsApp() {
    if (!nombre.trim() || !celular.trim()) {
      onValidationFail();
      onClose();
      return;
    }

    const lista = items
      .map(
        (i) =>
          `• ${i.nombre}${i.talla ? ` | Talla: ${i.talla}` : ''} | Color: ${i.color} | Cant: ${i.cantidad} | $${i.precioUnitario * i.cantidad}`
      )
      .join('\n');

    const mensaje = `Hola STITCH, soy ${nombre.trim()} (${celular.trim()}). Mi pedido es:\n\n${lista}\n\n*TOTAL: $${total} MXN*`;
    const url = `https://wa.me/5214311000255?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  }

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-white z-50 flex flex-col shadow-2xl transition-transform duration-300 ease-in-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <ShoppingBag size={20} strokeWidth={1.5} />
            <h2 className="font-bold text-gray-900 tracking-wide">Tu carrito</h2>
            {items.length > 0 && (
              <span className="bg-gray-100 text-gray-600 text-xs font-semibold px-2 py-0.5 rounded-full">
                {items.reduce((a, i) => a + i.cantidad, 0)} prendas
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center gap-3">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                <ShoppingBag size={28} className="text-gray-300" strokeWidth={1.5} />
              </div>
              <p className="text-gray-400 text-sm">Tu carrito esta vacio</p>
              <p className="text-gray-300 text-xs">Agrega productos para continuar</p>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start gap-3 bg-gray-50 rounded-xl p-3.5 group"
                >
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm text-gray-900 leading-snug truncate">
                      {item.nombre}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-1.5">
                      {item.talla && (
                        <span className="bg-white border border-gray-200 text-gray-600 text-xs px-2 py-0.5 rounded-md font-medium">
                          {item.talla}
                        </span>
                      )}
                      <span className="bg-white border border-gray-200 text-gray-600 text-xs px-2 py-0.5 rounded-md">
                        {item.color}
                      </span>
                      <span className="bg-white border border-gray-200 text-gray-600 text-xs px-2 py-0.5 rounded-md">
                        x{item.cantidad}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <p className="font-bold text-sm text-gray-900">
                      ${item.precioUnitario * item.cantidad}
                    </p>
                    <button
                      onClick={() => onRemove(item.id)}
                      className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-red-50 hover:text-red-400 text-gray-300 transition-colors"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-gray-100 px-5 py-5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-gray-500 font-medium">Gran Total</span>
              <span className="text-2xl font-black text-gray-900">${total} <span className="text-sm font-normal text-gray-400">MXN</span></span>
            </div>
            <button
              onClick={handleWhatsApp}
              className="w-full bg-green-600 hover:bg-green-700 active:scale-95 text-white font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2.5 transition-all duration-200 text-sm tracking-wide"
            >
              <MessageCircle size={18} />
              Enviar Orden por WhatsApp
            </button>
            <p className="text-center text-xs text-gray-400 mt-2.5">
              Se abrira WhatsApp con tu pedido listo
            </p>
          </div>
        )}
      </div>
    </>
  );
}
