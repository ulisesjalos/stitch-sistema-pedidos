import React, { useState } from 'react';
import { Printer, Clipboard, Trash, CheckCircle2 } from 'lucide-react';

interface InvoiceItem {
  nombre: string;
  talla: string;
  color: string;
  cantidad: string;
  total: string;
}

export default function InvoiceTool() {
  const [inputText, setInputText] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [items, setItems] = useState<InvoiceItem[]>([]);
  const [grandTotal, setGrandTotal] = useState('');

  const procesarMensaje = () => {
    try {
      // Extraer Nombre (Hola STITCH, soy ...)
      const nombreMatch = inputText.match(/soy\s+([^(\n]+)/i);
      if (nombreMatch) setCustomerName(nombreMatch[1].trim());

      // Extraer Total
      const totalMatch = inputText.match(/TOTAL:\s*(\$[\d,.]+)/i);
      if (totalMatch) setGrandTotal(totalMatch[1]);

      // Extraer líneas de productos
      const lineas = inputText.split('\n');
      const nuevosItems: InvoiceItem[] = [];

      lineas.forEach(linea => {
        if (linea.includes('|')) {
          const partes = linea.replace('*', '').split('|').map(p => p.trim());
          
          // Formato: PRODUCTO | Talla: X | Color: X | Cant: X | $X
          const item: InvoiceItem = {
            nombre: partes[0] || '',
            talla: partes.find(p => p.toLowerCase().includes('talla'))?.split(':')[1]?.trim() || 'N/A',
            color: partes.find(p => p.toLowerCase().includes('color'))?.split(':')[1]?.trim() || 'N/A',
            cantidad: partes.find(p => p.toLowerCase().includes('cant'))?.split(':')[1]?.trim() || '0',
            total: partes.find(p => p.includes('$')) || ''
          };
          nuevosItems.push(item);
        }
      });

      setItems(nuevosItems);
    } catch (error) {
      alert("Hubo un error al leer el mensaje. Asegúrate de copiar el pedido completo.");
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      {/* SECCIÓN DE ENTRADA (No se imprime) */}
      <div className="max-w-4xl mx-auto mb-8 print:hidden">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Clipboard className="text-gray-900" />
            Pegar pedido de WhatsApp
          </h2>
          <textarea
            className="w-full h-40 p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none text-sm font-mono"
            placeholder="Pega aquí todo el mensaje que recibiste..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <div className="flex gap-3 mt-4">
            <button
              onClick={procesarMensaje}
              className="flex-1 bg-gray-900 text-white py-3 rounded-xl font-bold hover:bg-gray-800 transition-all"
            >
              Generar Invoice Visual
            </button>
            <button
              onClick={() => { setInputText(''); setItems([]); setCustomerName(''); }}
              className="px-6 py-3 border border-gray-200 rounded-xl hover:bg-gray-50"
            >
              <Trash size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* INVOICE VISUAL (Lo que el equipo verá) */}
      {items.length > 0 && (
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 invoice-card">
          {/* Encabezado */}
          <div className="bg-gray-900 p-8 text-white flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-black tracking-tighter">STITCH</h1>
              <p className="text-gray-400 text-sm">SISTEMA DE SEPARACIÓN DE PEDIDOS</p>
            </div>
            <div className="text-right">
              <p className="text-xs uppercase tracking-widest text-gray-400">Cliente</p>
              <p className="text-xl font-bold">{customerName || 'Cliente General'}</p>
            </div>
          </div>

          <div className="p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Lista de Empaque</h2>
              <button 
                onClick={handlePrint}
                className="print:hidden flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-green-700"
              >
                <Printer size={18} /> Imprimir para Taller
              </button>
            </div>

            {/* TABLA DE ALTA VISIBILIDAD */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-900">
                    <th className="py-4 text-left text-sm font-black uppercase text-gray-400">Listo</th>
                    <th className="py-4 text-left text-sm font-black uppercase">Cant.</th>
                    <th className="py-4 text-left text-sm font-black uppercase">Producto</th>
                    <th className="py-4 text-left text-sm font-black uppercase">Color</th>
                    <th className="py-4 text-left text-sm font-black uppercase">Talla</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {items.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <td className="py-6">
                        <div className="w-8 h-8 border-2 border-gray-200 rounded-md flex items-center justify-center">
                          <div className="w-4 h-4 rounded-sm bg-gray-50 print:border print:border-gray-300"></div>
                        </div>
                      </td>
                      <td className="py-6">
                        <span className="text-3xl font-black text-gray-900">
                          {item.cantidad}
                        </span>
                      </td>
                      <td className="py-6">
                        <p className="font-bold text-lg text-gray-900">{item.nombre}</p>
                        <p className="text-xs text-gray-400 font-mono">{item.total}</p>
                      </td>
                      <td className="py-6">
                        <span className="px-3 py-1 bg-gray-100 rounded-full font-bold text-gray-700 border border-gray-200">
                          {item.color.toUpperCase()}
                        </span>
                      </td>
                      <td className="py-6">
                        <span className={`text-xl font-bold ${item.talla === 'XXG' ? 'text-red-600' : 'text-blue-600'}`}>
                          {item.talla}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Resumen Final */}
            <div className="mt-10 pt-6 border-t-4 border-gray-900 flex justify-between items-end">
              <div className="text-gray-400 text-sm">
                <p>Favor de revisar costuras y etiquetas antes de empacar.</p>
                <p>Envío vía: **Vía Jalos**</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-gray-400 uppercase">Total del Pedido</p>
                <p className="text-4xl font-black text-gray-900">{grandTotal}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 text-center text-xs text-gray-400 italic">
            Documento generado por STITCH Pedidos - Jalostotitlán, Jal.
          </div>
        </div>
      )}
    </div>
  );
}