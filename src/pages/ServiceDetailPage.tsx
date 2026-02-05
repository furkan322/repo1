import { useParams, Link } from 'react-router-dom';
import { services } from '../data/services';
import { ArrowLeft } from 'lucide-react';

export function ServiceDetailPage() {
  const { id } = useParams();
  const service = services.find(s => s.id === id);

  if (!service) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Hizmet Bulunamadı</h1>
          <p className="text-gray-600 mb-8">Aradığınız hizmet mevcut değil.</p>
          <Link
            to="/"
            className="inline-block bg-teal-600 text-white px-8 py-3 rounded-full hover:bg-teal-700 transition-colors"
          >
            Anasayfaya Dön
          </Link>
        </div>
      </div>
    );
  }

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

      {/* Service Detail */}
      <article className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Image */}
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-96 object-cover rounded-2xl shadow-lg mb-8"
          />

          {/* Title */}
          <div className="mb-8 pb-8 border-b border-gray-200">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              {service.title}
            </h1>
            <p className="text-lg text-gray-600">{service.description}</p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {service.fullContent.split('\n\n').map((paragraph, index) => (
              <p
                key={index}
                className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-teal-50 to-teal-100 rounded-2xl p-8 sm:p-12 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Bu Hizmeti Almak İster misiniz?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Hemen randevu alın ve sağlıklı bir gülüşe kavuşun.
            </p>
            <a
              href="/#iletisim"
              className="inline-block bg-teal-600 text-white px-8 py-4 rounded-full hover:bg-teal-700 transition-colors font-semibold text-lg shadow-lg"
            >
              Randevu Al
            </a>
          </div>

          {/* Related Services */}
          <div className="mt-16 pt-16 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Diğer Hizmetlerimiz</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services
                .filter(s => s.id !== service.id)
                .slice(0, 2)
                .map((relatedService) => (
                  <Link
                    key={relatedService.id}
                    to={`/hizmet/${relatedService.id}`}
                    className="bg-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                  >
                    <img
                      src={relatedService.image}
                      alt={relatedService.title}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="p-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{relatedService.title}</h4>
                      <p className="text-gray-600 text-sm">{relatedService.description}</p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
