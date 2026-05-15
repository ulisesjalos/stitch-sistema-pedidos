import { Link, useLocation } from 'react-router-dom';
import { FileText } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  return (
    <nav className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between">
      <div className="font-black text-xl tracking-tighter text-gray-900">STITCH</div>
      <div className="flex items-center gap-2">
        <Link
          to="/"
          className={`px-3 py-2 rounded-xl text-sm font-semibold transition-all ${
            location.pathname === '/' ? 'bg-gray-900 text-white' : 'text-gray-600 hover:bg-gray-50'
          }`}
        >
          Catálogo
        </Link>
        <Link
          to="/invoice"
          className={`px-3 py-2 rounded-xl text-sm font-semibold flex items-center gap-2 transition-all ${
            location.pathname === '/invoice'
              ? 'bg-gray-900 text-white'
              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
          }`}
        >
          <FileText size={16} />
          Generador de Invoice
        </Link>
      </div>
    </nav>
  );
}
