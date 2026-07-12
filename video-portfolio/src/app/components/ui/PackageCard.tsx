import { Check } from 'lucide-react';

interface Package {
  name: string;
  price: string;
  period: string;
  description: string;
  highlight: string;
  features: readonly string[];
}

interface PackageCardProps {
  pkg: Package;
  onSelect: () => void;
}

export function PackageCard({ pkg, onSelect }: PackageCardProps) {
  return (
    <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-xl overflow-hidden border-2 border-gray-700 hover:border-red-600 transition-all hover:shadow-2xl flex flex-col">

      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-2xl font-bold">{pkg.name}</h3>
          <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-semibold">
            {pkg.highlight}
          </span>
        </div>
        <p className="text-red-100 text-sm">{pkg.description}</p>
      </div>

      <div className="p-8 flex flex-col flex-1">
        {/* Price */}
        <div className="mb-6 pb-6 border-b border-gray-700">
          <div className="flex items-baseline gap-2">
            <span className="text-5xl font-bold text-white">{pkg.price}</span>
            <span className="text-xl text-gray-400">{pkg.period}</span>
          </div>
        </div>

        {/* Features */}
        <ul className="space-y-3 mb-8 flex-1">
          {pkg.features.map((feature, i) => {
            const isNote = feature.startsWith('Note:');
            return (
              <li key={i} className={`flex items-start gap-3 ${isNote ? 'mt-4 pt-4 border-t border-gray-700' : ''}`}>
                {isNote ? (
                  <span className="text-gray-500 text-xs italic leading-relaxed">{feature}</span>
                ) : (
                  <>
                    <Check className="text-red-500 flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </>
                )}
              </li>
            );
          })}
        </ul>

        <button
          onClick={onSelect}
          className="w-full py-4 rounded-lg font-semibold transition-all bg-red-600 text-white hover:bg-red-700 shadow-lg hover:shadow-xl cursor-pointer"
        >
          Start Monthly Partnership
        </button>
      </div>
    </div>
  );
}