import React, { useState, useRef } from 'react';
import { Producto } from '.data/productos'; // Ajusta la ruta según tus archivos

interface GaleriaProductoProps {
  producto: Producto;
}

export const GaleriaProducto: React.FC<GaleriaProductoProps> = ({ producto }) => {
  // Aseguramos que si 'imagenes' viene vacío, use al menos la foto principal
  const listaImagenes = producto.imagenes && producto.imagenes.length > 0 
    ? producto.imagenes 
    : [producto.imagen];

  const [imagenActiva, setImagenActiva] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Detecta en qué imagen está el usuario cuando desliza con el dedo en el móvil
  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const indexElemento = Math.round(scrollLeft / clientWidth);
      setImagenActiva(indexElemento);
    }
  };

  // Cambia la imagen al dar clic en las miniaturas (escritorio) o puntitos
  const cambiarImagen = (index: number) => {
    setImagenActiva(index);
    if (scrollRef.current) {
      const width = scrollRef.current.clientWidth;
      scrollRef.current.scrollTo({
        left: width * index,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="w-full flex flex-col gap-3">
      {/* Contenedor Principal del Carrusel */}
      <div className="relative w-full aspect-square bg-gray-50 rounded-2xl overflow-hidden shadow-sm border border-gray-100">
        
        {/* Vista deslizable (Mobile Friendly) */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex w-full h-full overflow-x-auto snap-x snap-mandatory scrollbar-none scroll-smooth"
          style={{ WebkitOverflowScrolling: 'touch' }} // Scroll ultra fluido en iOS
        >
          {listaImagenes.map((img, index) => (
            <div 
              key={index} 
              className="w-full h-full flex-shrink-0 snap-center p-4 flex items-center justify-center"
            >
              <img
                src={img}
                alt={`${producto.nombre} - Vista ${index + 1}`}
                className="max-w-full max-h-full object-contain select-none"
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>

        {/* Indicadores de bolitas de posición (Solo visibles si hay más de 1 imagen) */}
        {listaImagenes.length > 1 && (
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10 md:hidden">
            {listaImagenes.map((_, index) => (
              <button
                key={index}
                onClick={() => cambiarImagen(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  imagenActiva === index ? 'w-6 bg-black' : 'w-2 bg-gray-300'
                }`}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Miniaturas inferiores para Escritorio (Desktop) */}
      {listaImagenes.length > 1 && (
        <div className="hidden md:flex gap-2 overflow-x-auto pb-1 grid grid-cols-4">
          {listaImagenes.map((img, index) => (
            <button
              key={index}
              onClick={() => cambiarImagen(index)}
              className={`aspect-square rounded-lg p-1 bg-white border-2 overflow-hidden transition-all ${
                imagenActiva === index ? 'border-black scale-95' : 'border-gray-200 hover:border-gray-400'
              }`}
            >
              <img 
                src={img} 
                alt="Miniatura" 
                className="w-full h-full object-contain" 
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};