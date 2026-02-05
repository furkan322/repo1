import { Smile } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-teal-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <Smile className="h-8 w-8 text-white" />
              <span className="ml-2 text-lg sm:text-xl font-bold">Dental Klinik</span>
            </div>
            <p className="text-sm sm:text-base text-teal-200">
              Gülüşünüz bizim işimiz. Modern diş hekimliği çözümleriyle hizmetinizdeyiz.
            </p>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4">Hızlı Bağlantılar</h4>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <a href="#anasayfa" className="text-teal-200 hover:text-white transition-colors">Anasayfa</a>
              </li>
              <li>
                <a href="#hizmetler" className="text-teal-200 hover:text-white transition-colors">Hizmetlerimiz</a>
              </li>
              <li>
                <a href="#hakkimizda" className="text-teal-200 hover:text-white transition-colors">Hakkımızda</a>
              </li>
              <li>
                <a href="#iletisim" className="text-teal-200 hover:text-white transition-colors">İletişim</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4">Çalışma Saatleri</h4>
            <div className="space-y-1 text-sm sm:text-base text-teal-200">
              <p>Pazartesi - Cumartesi</p>
              <p className="font-semibold text-white">10:00 - 20:00</p>
              <p className="mt-2">Pazar</p>
              <p className="font-semibold text-white">KAPALI</p>
            </div>
          </div>
        </div>

        <div className="border-t border-teal-800 pt-8 text-center">
          <p className="text-sm sm:text-base text-teal-200">
            © 2026 Dental Klinik. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
