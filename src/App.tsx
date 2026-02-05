import { MessageCircle, Smile, Award, Users, Shield, Clock, Phone, Mail, MapPin } from 'lucide-react';

const WHATSAPP_NUMBER = '905XXXXXXXXX';
const WHATSAPP_MESSAGE = 'Merhaba, randevu almak istiyorum.';

function App() {
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Smile className="h-8 w-8 text-teal-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Dental Klinik</span>
            </div>

            <div className="hidden md:flex space-x-8">
              <a href="#anasayfa" className="text-gray-700 hover:text-teal-600 transition">Anasayfa</a>
              <a href="#hizmetlerimiz" className="text-gray-700 hover:text-teal-600 transition">Hizmetlerimiz</a>
              <a href="#hakkimizda" className="text-gray-700 hover:text-teal-600 transition">Hakkımızda</a>
              <a href="#iletisim" className="text-gray-700 hover:text-teal-600 transition">İletişim</a>
            </div>

            <button
              onClick={handleWhatsAppClick}
              className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition"
            >
              Randevu Al
            </button>
          </div>
        </nav>
      </header>

      <section id="anasayfa" className="relative bg-gradient-to-br from-teal-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Gülüşünüz Bizim İşimiz
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Modern teknoloji ve uzman kadromuzla sağlıklı, güzel gülüşlere ulaşmanıza yardımcı oluyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#iletisim"
                className="bg-teal-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-teal-700 transition"
              >
                Randevu Al
              </a>
              <button
                onClick={handleWhatsAppClick}
                className="bg-green-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-600 transition flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="hizmetlerimiz" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Hizmetlerimiz</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-teal-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
              <div className="bg-teal-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Smile className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Genel Diş Bakımı</h3>
              <p className="text-gray-600">
                Düzenli kontroller, diş temizliği ve ağız bakımı ile sağlıklı dişlere sahip olun.
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
              <div className="bg-teal-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Estetik Diş Hekimliği</h3>
              <p className="text-gray-600">
                Diş beyazlatma, porselen laminalar ve gülüş tasarımı ile hayalinizdeki gülüşe kavuşun.
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
              <div className="bg-teal-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">İmplant Tedavisi</h3>
              <p className="text-gray-600">
                Eksik dişleriniz için kalıcı ve doğal görünümlü implant çözümleri sunuyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="hakkimizda" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Neden Bizi Seçmelisiniz?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <div className="bg-teal-600 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Uzman Kadro</h3>
                <p className="text-gray-600">
                  Alanında uzman diş hekimleri ve deneyimli ekibimizle yanınızdayız.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-teal-600 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Modern Teknoloji</h3>
                <p className="text-gray-600">
                  En son teknoloji ekipmanlar ve güncel tedavi yöntemleriyle hizmet veriyoruz.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-teal-600 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <Award className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Kaliteli Hizmet</h3>
                <p className="text-gray-600">
                  Hasta memnuniyeti odaklı, kaliteli ve güvenilir sağlık hizmeti sunuyoruz.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-teal-600 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <Smile className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Rahat Ortam</h3>
                <p className="text-gray-600">
                  Konforlu ve hijyenik ortamımızda kendinizi evinizde gibi hissedeceksiniz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="iletisim" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">İletişim</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">İletişim Bilgileri</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Telefon</p>
                    <p className="text-gray-600">+90 (XXX) XXX XX XX</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">E-posta</p>
                    <p className="text-gray-600">info@dentalklinik.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Adres</p>
                    <p className="text-gray-600">Örnek Mahallesi, Dental Caddesi No:123, İstanbul</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Çalışma Saatleri</p>
                    <p className="text-gray-600">Pazartesi - Cumartesi: 10:00 - 20:00</p>
                    <p className="text-gray-600">Pazar: Kapalı</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Randevu Formu</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Adınız Soyadınız"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Telefon Numaranız"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="E-posta Adresiniz"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Mesajınız (İsteğe Bağlı)"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition"
                >
                  Randevu Talebi Gönder
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Smile className="h-8 w-8 text-teal-400" />
                <span className="ml-2 text-xl font-bold">Dental Klinik</span>
              </div>
              <p className="text-gray-400">
                Sağlıklı gülüşler için profesyonel diş bakımı hizmetleri.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Hızlı Bağlantılar</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#anasayfa" className="hover:text-teal-400 transition">Anasayfa</a></li>
                <li><a href="#hizmetlerimiz" className="hover:text-teal-400 transition">Hizmetlerimiz</a></li>
                <li><a href="#hakkimizda" className="hover:text-teal-400 transition">Hakkımızda</a></li>
                <li><a href="#iletisim" className="hover:text-teal-400 transition">İletişim</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Çalışma Saatleri</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Pazartesi - Cumartesi</li>
                <li className="font-semibold text-white">10:00 - 20:00</li>
                <li className="mt-2">Pazar: Kapalı</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Dental Klinik. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>

      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 bg-green-500 text-white w-16 h-16 rounded-full shadow-2xl hover:bg-green-600 transition flex items-center justify-center z-50"
        aria-label="WhatsApp ile iletişim"
      >
        <MessageCircle className="h-8 w-8" />
      </button>
    </div>
  );
}

export default App;
