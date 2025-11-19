
import React, { useState } from 'react';
import { useLanguage } from '../../hooks/useLanguage';

const ChevronDown = ({ isOpen }: { isOpen: boolean }) => (
    <svg 
        className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
    >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
);

interface FaqItemProps {
    questionKey: string;
    answerKey: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ questionKey, answerKey }) => {
    const { t } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200 last:border-0">
            <button 
                className="flex w-full items-center justify-between py-6 text-left focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-lg font-medium text-text-main pr-8">{t(questionKey)}</span>
                <ChevronDown isOpen={isOpen} />
            </button>
            <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}
            >
                <p className="text-text-subtle leading-relaxed">
                    {t(answerKey)}
                </p>
            </div>
        </div>
    );
}

const FaqSection = () => {
  const { t } = useLanguage();
  const faqs = [1, 2, 3, 4, 5, 6, 7];

  return (
    <section id="faq" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-extrabold text-text-main tracking-tight">
            {t('faq_title')}
          </h2>
        </div>
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm px-8 border border-gray-100">
            {faqs.map(num => (
                <FaqItem key={num} questionKey={`faq_q${num}`} answerKey={`faq_a${num}`} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;