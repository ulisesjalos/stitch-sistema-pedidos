interface ClientFormProps {
  nombre: string;
  celular: string;
  onNombreChange: (v: string) => void;
  onCelularChange: (v: string) => void;
  touched: boolean;
}

export default function ClientForm({
  nombre,
  celular,
  onNombreChange,
  onCelularChange,
  touched,
}: ClientFormProps) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-5 sm:p-6 shadow-sm">
      <h2 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">
        Datos del cliente
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1.5">
            Nombre completo <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => onNombreChange(e.target.value)}
            placeholder="Ej. María González"
            className={`w-full border rounded-lg px-3.5 py-2.5 text-sm text-gray-800 placeholder-gray-300 outline-none transition-colors focus:border-gray-400 ${
              touched && !nombre.trim()
                ? 'border-red-300 bg-red-50'
                : 'border-gray-200 bg-white'
            }`}
          />
          {touched && !nombre.trim() && (
            <p className="text-xs text-red-400 mt-1">Campo requerido</p>
          )}
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1.5">
            Número de celular <span className="text-red-400">*</span>
          </label>
          <input
            type="tel"
            value={celular}
            onChange={(e) => onCelularChange(e.target.value)}
            placeholder="Ej. 4312345678"
            className={`w-full border rounded-lg px-3.5 py-2.5 text-sm text-gray-800 placeholder-gray-300 outline-none transition-colors focus:border-gray-400 ${
              touched && !celular.trim()
                ? 'border-red-300 bg-red-50'
                : 'border-gray-200 bg-white'
            }`}
          />
          {touched && !celular.trim() && (
            <p className="text-xs text-red-400 mt-1">Campo requerido</p>
          )}
        </div>
      </div>
    </div>
  );
}
