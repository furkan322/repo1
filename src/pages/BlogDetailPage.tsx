import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blog';
import { ArrowLeft } from 'lucide-react';

export function BlogDetailPage() {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Yazı Bulunamadı</h1>
          <p className="text-gray-600 mb-8">Aradığınız blog yazısı mevcut değil.</p>
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

      {/* Blog Post */}
      <article className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Image */}
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-96 object-cover rounded-2xl shadow-lg mb-8"
          />

          {/* Metadata */}
          <div className="mb-8 pb-8 border-b border-gray-200">
            <p className="text-teal-600 text-sm font-semibold mb-2">Yayın Tarihi: {post.date}</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              {post.title}
            </h1>
            <p className="text-lg text-gray-600">{post.description}</p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {post.fullContent.split('\n\n').map((paragraph, index) => (
              <p
                key={index}
                className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Related Posts */}
          <div className="mt-16 pt-16 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Diğer Yazılar</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts
                .filter(p => p.id !== post.id)
                .slice(0, 2)
                .map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    to={`/blog/${relatedPost.id}`}
                    className="bg-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                  >
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="p-6">
                      <p className="text-teal-600 text-sm font-semibold mb-2">{relatedPost.date}</p>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{relatedPost.title}</h4>
                      <p className="text-gray-600 text-sm">{relatedPost.description}</p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 bg-gradient-to-r from-teal-50 to-teal-100 rounded-2xl p-8 sm:p-12 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Daha Fazla Bilgi Almak İster misiniz?</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Diş sağlığınız hakkında detaylı bilgi ve danışmanlık için bize ulaşın.
            </p>
            <a
              href="/#iletisim"
              className="inline-block bg-teal-600 text-white px-8 py-4 rounded-full hover:bg-teal-700 transition-colors font-semibold"
            >
              Randevu Al
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}
