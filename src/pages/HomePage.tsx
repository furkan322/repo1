import { MessageCircle, Smile, Award, Users, Shield, Clock, Phone, Mail, MapPin, Calendar, User, MessageSquare, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts, allFAQs } from '../data/blog';
import { FAQAccordion } from '../components/FAQAccordion';
import { useState } from 'react';

const WHATSAPP_NUMBER = '905XXXXXXXXX';

export function HomePage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form gönderildi:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const whatsappMessage = encodeURIComponent('Merhaba, randevu almak istiyorum.');
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="anasayfa" className="relative bg-gradient-to-br from-teal-50 to-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Gülüşünüz Bizim İşimiz
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Modern teknolojiyi deneyimli ekibimizle birleştirerek size en kaliteli diş sağlığı hizmetini sunuyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#iletisim"
                className="bg-teal-600 text-white px-8 py-4 rounded-full hover:bg-teal-700 transition-all transform hover:scale-105 shadow-lg"
              >
                Randevu Al
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-8 py-4 rounded-full hover:bg-green-600 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="hizmetler" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">Hizmetlerimiz</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">Kapsamlı diş sağlığı çözümleri</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-gradient-to-br from-teal-50 to-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow">
              <div className="bg-teal-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Smile className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Genel Diş Bakımı</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Rutin kontroller, diş temizliği ve koruyucu tedavilerle diş sağlığınızı koruyoruz.
              </p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow">
              <div className="bg-teal-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Estetik Diş Hekimliği</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Diş beyazlatma, porselen laminalar ve gülüş tasarımı ile hayal ettiğiniz gülüşe kavuşun.
              </p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow">
              <div className="bg-teal-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">İmplant Tedavisi</h3>
              <p className="text-sm sm:text-base text-gray-600">
                En son teknoloji implant sistemleri ile eksik dişlerinizi doğal görünümlü şekilde tamamlıyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="hakkimizda" className="py-16 sm:py-20 bg-gradient-to-br from-teal-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">Neden Bizi Seçmelisiniz?</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">Gülüşünüz için en iyisini sunuyoruz</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="bg-white w-16 sm:w-20 h-16 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Users className="h-8 sm:h-10 w-8 sm:w-10 text-teal-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Deneyimli Ekip</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Alanında uzman diş hekimlerimiz ve modern ekipmanlarımızla hizmetinizdeyiz.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white w-16 sm:w-20 h-16 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Shield className="h-8 sm:h-10 w-8 sm:w-10 text-teal-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Güvenli Tedavi</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Sterilizasyon ve hijyen kurallarına azami özen göstererek güvenli tedavi sunuyoruz.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white w-16 sm:w-20 h-16 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Award className="h-8 sm:h-10 w-8 sm:w-10 text-teal-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Kaliteli Hizmet</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Hasta memnuniyetini ön planda tutarak en kaliteli hizmeti vermeyi hedefliyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">En Son Yazılar</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">Diş sağlığı hakkında değerli bilgiler</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6 sm:p-8">
                  <p className="text-teal-600 text-sm font-semibold mb-2">{post.date}</p>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-6">{post.description}</p>
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-block bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition-colors font-semibold text-sm"
                  >
                    Detaylı Bilgi
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">Sıkça Sorulan Sorular</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">Merak ettiğiniz sorulara cevaplar</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <FAQAccordion faqs={allFAQs} showAllLink={true} />
          </div>
        </div>
      </section>

      {/* Contact & Appointment Section */}
      <section id="iletisim" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">İletişim ve Randevu</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">Size en uygun zamanda randevu alın</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            {/* Sol Sütun - Çalışma Saatleri */}
            <div className="bg-gradient-to-br from-teal-50 to-white p-6 sm:p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Çalışma Saatleri</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                  <span className="font-semibold text-gray-900">Pazartesi</span>
                  <span className="text-gray-600">10:00 - 20:00</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                  <span className="font-semibold text-gray-900">Salı</span>
                  <span className="text-gray-600">10:00 - 20:00</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                  <span className="font-semibold text-gray-900">Çarşamba</span>
                  <span className="text-gray-600">10:00 - 20:00</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                  <span className="font-semibold text-gray-900">Perşembe</span>
                  <span className="text-gray-600">10:00 - 20:00</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                  <span className="font-semibold text-gray-900">Cuma</span>
                  <span className="text-gray-600">10:00 - 20:00</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                  <span className="font-semibold text-gray-900">Cumartesi</span>
                  <span className="text-gray-600">10:00 - 20:00</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="font-semibold text-gray-900">Pazar</span>
                  <span className="font-semibold text-red-600">KAPALI</span>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-teal-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Telefon</h4>
                    <p className="text-gray-600">+90 (XXX) XXX XX XX</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-teal-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">E-posta</h4>
                    <p className="text-gray-600">info@dentalklinik.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-teal-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Adres</h4>
                    <p className="text-gray-600">
                      Örnek Mahallesi, Dental Caddesi No:123<br />
                      Kadıköy, İstanbul
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sağ Sütun - Randevu Formu */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Hemen Randevu Alın</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Adınız Soyadınız
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="Ad Soyad"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefon Numaranız
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="0 (5XX) XXX XX XX"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Hizmet Seçimi
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full pl-12 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent appearance-none bg-white"
                      required
                    >
                      <option value="">Hizmet Seçiniz</option>
                      <option value="genel">Genel Diş Bakımı</option>
                      <option value="estetik">Estetik Diş Hekimliği</option>
                      <option value="implant">İmplant Tedavisi</option>
                      <option value="ortodonti">Ortodonti</option>
                      <option value="cocuk">Çocuk Diş Hekimliği</option>
                      <option value="kanal">Kanal Tedavisi</option>
                      <option value="cekim">Diş Çekimi</option>
                      <option value="diger">Diğer</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mesajınız
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
                      placeholder="Ek bilgi veya sorularınızı buraya yazabilirsiniz..."
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-teal-600 text-white py-4 rounded-lg hover:bg-teal-700 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl"
                >
                  Gönder
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all transform hover:scale-110 z-50"
        aria-label="WhatsApp ile iletişime geç"
      >
        <MessageCircle className="h-8 w-8" />
      </a>
    </div>
  );
}
