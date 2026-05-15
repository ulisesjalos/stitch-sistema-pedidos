import { Link, useLocation } from 'react-router-dom';
import { FileText, ShoppingBag } from 'lucide-react'; 

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between print:hidden">
      {/* Logo de la marca (Lado izquierdo) */}
      <div className="font-black text-xl tracking-tighter text-gray-900">
        <Link to="/">STITCH</Link>
      </div>

      {/* Botones de Acción (Lado derecho) */}
      <div className="flex items-center gap-4">
        
        {/* BOTÓN DEL GENERADOR DE INVOICE */}
        <Link 
          to="/invoice" 
          className={`px-3 py-2 rounded-xl text-sm font-semibold flex items-center gap-2 transition-all ${
            location.pathname === '/invoice' 
              ? 'bg-gray-900 text-white' 
              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
          }`}
        >
          <FileText size={16} />
          <span className="hidden sm:inline">Generador de Invoice</span>
        </Link>

        {/* ICONO DE LA BOLSA DE COMPRAS (Ya existente en tu diseño) */}
        <button className="text-gray-900 p-2 hover:bg-gray-50 rounded-xl relative">
          <ShoppingBag size={20} />
          {/* Si tienes un contador de productos en el carrito, va aquí */}
        </button>
        
      </div>
    </nav>
  );
}