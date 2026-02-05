import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Smile, Menu, X } from 'lucide-react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
            <Smile className="h-8 w-8 text-teal-600" />
            <span className="ml-2 text-2xl font-bold text-gray-900">Dental Klinik</span>
          </Link>
          <nav className="hidden lg:flex space-x-8">
            <a href="#anasayfa" className="text-gray-700 hover:text-teal-600 transition-colors">Anasayfa</a>
            <a href="#hizmetler" className="text-gray-700 hover:text-teal-600 transition-colors">Hizmetlerimiz</a>
            <a href="#hakkimizda" className="text-gray-700 hover:text-teal-600 transition-colors">Hakkımızda</a>
            <a href="#iletisim" className="text-gray-700 hover:text-teal-600 transition-colors">İletişim</a>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="#iletisim"
              className="bg-teal-600 text-white px-4 sm:px-6 py-2 rounded-full hover:bg-teal-700 transition-colors text-sm sm:text-base"
            >
              Randevu Al
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-teal-600 transition-colors"
              aria-label="Menüyü aç"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="lg:hidden pb-6 border-t border-gray-200">
            <div className="space-y-3 pt-6">
              <a
                href="#anasayfa"
                className="block text-gray-700 hover:text-teal-600 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Anasayfa
              </a>
              <a
                href="#hizmetler"
                className="block text-gray-700 hover:text-teal-600 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Hizmetlerimiz
              </a>
              <a
                href="#hakkimizda"
                className="block text-gray-700 hover:text-teal-600 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Hakkımızda
              </a>
              <a
                href="#iletisim"
                className="block text-gray-700 hover:text-teal-600 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                İletişim
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
