interface FilterTabsProps {
  generos: string[];
  active: string;
  onChange: (f: string) => void;
}

export default function FilterTabs({ generos, active, onChange }: FilterTabsProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
      {generos.map((g) => (
        <button
          key={g}
          onClick={() => onChange(g)}
          className={`whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
            active === g
              ? 'bg-gray-900 text-white shadow-sm'
              : 'bg-white text-gray-500 border border-gray-200 hover:border-gray-400 hover:text-gray-700'
          }`}
        >
          {g}
        </button>
      ))}
    </div>
  );
}
