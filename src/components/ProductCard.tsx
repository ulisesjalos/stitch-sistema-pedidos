import { useState } from 'react';
import { Plus, Minus, ShoppingBag } from 'lucide-react';
import type { Producto, Talla } from '../data/products';
import { TALLAS_ADULTO, TALLAS_NINO, TALLAS_BEBE } from '../data/products';

interface ProductCardProps {
  producto: Producto;
  onAdd: (item: {
    productoId: string;
    nombre: string;
    talla: Talla | null;
    color: string;
    cantidad: number;
    precioUnitario: number;
  }) => void;
}

export default function ProductCard({ producto, onAdd }: ProductCardProps) {
  const isUnitalla = !!producto.unitalla;

  // Si por error un producto no trae colores, dejamos una lista de respaldo ordenada
  const coloresDisponibles = producto.colores && producto.colores.length > 0 
    ? [...producto.colores].sort((a, b) => a.localeCompare(b)) 
    : ['Blanco', 'Negro', 'Marino'];

  // Identificar imágenes
  const imagenPrincipal = producto.imagenes?.[0] || producto.imagen;
  const imagenAlternativa = producto.imagenes?.[1] || null;

  // Determinar tallas por género
  const getTallasDisponibles = () => {
    if (producto.genero === 'Niño') return TALLAS_NINO;
    if (producto.genero === 'Bebé') return TALLAS_BEBE;
    return TALLAS_ADULTO;
  };

  const tallasAMostrar = getTallasDisponibles();

  // Estados del formulario
  const [talla, setTalla] = useState<Talla>(() => {
    if (producto.genero === 'Niño') return 'CH (4 A)';
    if (producto.genero === 'Bebé') return 'T1';
    return 'MD';
  });

  // Estado del color (inicia vacío para forzar la selección manual)
  const [colorSelected, setColorSelected] = useState<string>('');
  const [cantidad, setCantidad] = useState(0); 
  const [added, setAdded] = useState(false);
  const [colorError, setColorError] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [mostrarSegundaImagen, setMostrarSegundaImagen] = useState(false);

  // Lógica de precios
  const precio = isUnitalla
    ? producto.precios.base
    : talla === 'XXG'
      ? producto.precios.XXG
      : producto.precios.base;

  function handleAdd() {
    if (!colorSelected) {
      setColorError(true);
      return;
    }
    
    if (cantidad === 0) return;

    onAdd({
      productoId: producto.id,
      nombre: producto.nombre,
      talla: isUnitalla ? null : talla,
      color: colorSelected,
      cantidad,
      precioUnitario: precio,
    });

    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
    
    // Resetear formulario para la siguiente captura
    setColorSelected('');
    setCantidad(0);
    
    if (producto.genero === 'Niño') setTalla('CH (4 A)');
    else if (producto.genero === 'Bebé') setTalla('T1');
    else setTalla('MD');
    
    setColorError(false);
  }

  return (
    <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden flex flex-col transform transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-xl hover:border-gray-200 group">
      
      {/* Contenedor de Imagen */}
      <div 
        onClick={() => imagenAlternativa && setMostrarSegundaImagen(!mostrarSegImagen)}
        className={`relative aspect-square bg-gray-50 overflow-hidden ${imagenAlternativa ? 'cursor-pointer' : ''}`}
      >
        {imgError ? (
          <div className="w-full h-full flex items-center justify-center bg-gray-100">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-2 bg-gray-200 rounded-full flex items-center justify-center">
                <ShoppingBag size={24} className="text-gray-400" />
              </div>
              <span className="text-xs text-gray-400">Sin imagen</span>
            </div>
          </div>
        ) : (
          <>
            <img
              src={imagenPrincipal}
              alt={producto.nombre}
              onError={() => setImgError(true)}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-out ${
                mostrarSegundaImagen ? 'opacity-0 pointer-events-none' : 'opacity-100'
              } ${!imagenAlternativa ? 'group-hover:scale-105' : ''}`}
            />
            
            {imagenAlternativa && (
              <img
                src={imagenAlternativa}
                alt={`${producto.nombre} vista alternativa`}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-out ${
                  mostrarSegundaImagen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
              />
            )}

            {imagenAlternativa && (
              <div className="absolute bottom-3 right-3 bg-black/50 backdrop-blur-sm text-white text-[10px] px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none select-none">
                {mostrarSegundaImagen ? 'Ver principal' : 'Click para ver otra'}
              </div>
            )}
          </>
        )}
        
        <div className="absolute top-3 left-3 z-10">
          <span className="bg-white/90 backdrop-blur-sm text-gray-500 text-xs font-mono px-2 py-0.5 rounded-md border border-gray-100">
            {producto.id}
          </span>
        </div>
        <div className="absolute top-3 right-3 z-10">
          <span className="bg-white/90 backdrop-blur-sm text-gray-600 text-xs font-medium px-2 py-0.5 rounded-md border border-gray-100">
            {producto.genero}
          </span>
        </div>
      </div>

      {/* Cuerpo de la Tarjeta */}
      <div className="p-4 flex flex-col gap-3 flex-1">
        <div>
          <h3 className="font-bold text-sm text-gray-900 leading-snug">
            {producto.nombre}
          </h3>
          {producto.descripcion && (
            <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">{producto.descripcion}</p>
          )}
          <p className="text-lg font-black text-gray-900 mt-1">
            ${precio}
            <span className="text-xs font-normal text-gray-400 ml-1">MXN</span>
          </p>
          {isUnitalla ? (
            <p className="text-xs text-gray-400 font-medium mt-0.5">Talla única</p>
          ) : (
            talla === 'XXG' && producto.precios.XXG !== producto.precios.base && (
              <p className="text-xs text-amber-600 font-medium mt-0.5">+$20 talla XXG</p>
            )
          )}
        </div>

        {/* Sección de Tallas */}
        {!isUnitalla && (
          <div>
            <p className="text-xs font-medium text-gray-400 mb-1.5 uppercase tracking-wider">Talla</p>
            <div className="flex gap-1.5 flex-wrap">
              {tallasAMostrar.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTalla(t as Talla)}
                  className={`px-2.5 py-1 text-xs font-semibold rounded-lg border transition-all duration-150 ${
                    talla === t
                      ? 'bg-gray-900 text-white border-gray-900'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* SECCIÓN DE COLORES: Menú Desplegable optimizado para más de 30 opciones */}
        <div>
          <p className="text-xs font-medium text-gray-400 mb-1.5 uppercase tracking-wider">Color</p>
          <div className="relative">
            <select
              value={colorSelected}
              onChange={(e) => {
                setColorSelected(e.target.value);
                setColorError(false);
              }}
              className={`w-full bg-gray-50 border rounded-lg px-3 py-2 text-xs font-medium text-gray-800 outline-none transition-all cursor-pointer appearance-none focus:border-gray-400 focus:bg-white ${
                colorError ? 'border-red-300 bg-red-50 text-red-900' : 'border-gray-200'
              }`}
            >
              <option value="" disabled hidden>
                -- Selecciona un color ({coloresDisponibles.length} disponibles) --
              </option>
              {coloresDisponibles.map((col) => (
                <option key={col} value={col}>
                  {col}
                </option>
              ))}
            </select>
            {/* Flecha personalizada del dropdown */}
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
              </svg>
            </div>
          </div>
          {colorError && (
            <p className="text-xs text-red-500 font-semibold mt-1">Por favor elige un color</p>
          )}
        </div>

        {/* Sección de Cantidad */}
        <div>
          <p className="text-xs font-medium text-gray-400 mb-1.5 uppercase tracking-wider">Cantidad</p>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setCantidad((c) => Math.max(0, c - 1))}
              className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:border-gray-400 hover:bg-gray-50 transition-all"
            >
              <Minus size={14} />
            </button>
            
            <input
              type="number"
              min="0"
              value={cantidad}
              onChange={(e) => {
                const val = parseInt(e.target.value);
                setCantidad(isNaN(val) || val < 0 ? 0 : val);
              }}
              className="w-12 text-center text-sm font-bold text-gray-900 border-b border-gray-200 focus:border-gray-900 outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />

            <button
              type="button"
              onClick={() => setCantidad((c) => c + 1)}
              className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:border-gray-400 hover:bg-gray-50 transition-all"
            >
              <Plus size={14} />
            </button>
          </div>
        </div>

        {/* Botón de envío */}
        <button
          type="button"
          onClick={handleAdd}
          disabled={cantidad === 0}
          className={`mt-auto w-full py-2.5 rounded-xl text-sm font-semibold tracking-wide transition-all duration-200 flex items-center justify-center gap-2 ${
            cantidad === 0
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : added
              ? 'bg-green-600 text-white'
              : 'bg-gray-900 text-white hover:bg-gray-700 active:scale-95'
          }`}
        >
          {added ? '¡Agregado!' : (
            <>
              <ShoppingBag size={15} />
              Agregar al carrito
            </>
          )}
        </button>
      </div>
    </div>
  );
}