import { useState } from 'react';
import { DollarSign } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
  showAllLink?: boolean;
}

export function FAQAccordion({ faqs, showAllLink = false }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<number | null>(null);

  const displayFAQs = showAllLink ? faqs : faqs.slice(0, 5);

  return (
    <div className="space-y-4">
      {displayFAQs.map((faq) => (
        <div
          key={faq.id}
          className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
        >
          <button
            onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
            className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors text-left"
          >
            <h4 className="text-base sm:text-lg font-semibold text-gray-900">{faq.question}</h4>
            <div className={`transition-transform duration-300 ${openId === faq.id ? 'rotate-180' : ''}`}>
              <DollarSign className="h-6 w-6 text-teal-600" />
            </div>
          </button>

          {openId === faq.id && (
            <div className="px-6 py-4 bg-teal-50 border-t border-gray-200">
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}

      {showAllLink && (
        <div className="text-center pt-4">
          <a
            href="/sss"
            className="text-teal-600 hover:text-teal-700 font-semibold underline transition-colors"
          >
            Tüm Sorular
          </a>
        </div>
      )}
    </div>
  );
}
