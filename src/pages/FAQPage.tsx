import { Link } from 'react-router-dom';
import { allFAQs } from '../data/blog';
import { FAQAccordion } from '../components/FAQAccordion';
import { ArrowLeft } from 'lucide-react';

export function FAQPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center text-teal-600 hover:text-teal-700 transition-colors font-semibold"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Geri Dön
          </Link>
        </div>
      </div>

      {/* FAQ Page */}
      <div className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Sıkça Sorulan Sorular
            </h1>
            <p className="text-lg text-gray-600">
              Diş sağlığı hakkında merak ettiğiniz soruların cevaplarını burada bulabilirsiniz.
            </p>
          </div>

          <FAQAccordion faqs={allFAQs} showAllLink={false} />

          {/* Contact CTA */}
          <div className="mt-16 bg-gradient-to-r from-teal-50 to-teal-100 rounded-2xl p-8 sm:p-12 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Sorunuza Cevap Bulamadınız mı?</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Herhangi bir sorunuz varsa, bizimle iletişime geçmekten çekinmeyin. Ekibimiz size yardımcı olmaktan mutlu olacak.
            </p>
            <a
              href="/#iletisim"
              className="inline-block bg-teal-600 text-white px-8 py-4 rounded-full hover:bg-teal-700 transition-colors font-semibold"
            >
              İletişime Geç
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
