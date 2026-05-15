import { Link, useLocation } from 'react-router-dom';
import { FileText, ShoppingBag } from 'lucide-react'; 

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between print:hidden">
      {/* Logo (Lado Izquierdo) */}
      <div className="font-black text-xl tracking-tighter text-gray-900">
        <Link to="/">STITCH</Link>
      </div>

      {/* Acciones de Usuario (Lado Derecho) */}
      <div className="flex items-center gap-4">
        
        {/* NUEVO BOTÓN: GENERADOR DE INVOICE */}
        <Link 
          to="/invoice" 
          className={`px-3 py-2 rounded-xl text-sm font-semibold flex items-center gap-2 transition-all ${
            location.pathname === '/invoice' 
              ? 'bg-gray-900 text-white' 
              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
          }`}
        >
          <FileText size={16} />
          <span className="hidden md:inline">Generador de Invoice</span>
        </Link>

        {/* ICONO DEL CARRITO (Ya lo tienes en tu diseño) */}
        <button className="text-gray-900 p-2 hover:bg-gray-50 rounded-xl relative">
          <ShoppingBag size={20} />
        </button>
        
      </div>
    </nav>
  );
}