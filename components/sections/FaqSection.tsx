

import React, { useState } from 'react';
import { FAQ_ITEMS_KEYS_DATA } from '../../constants';
import { useLanguage } from '../../hooks/useLanguage';

interface FaqItemData {
    questionKey: string;
    answerKey: string;
}

interface FaqItemComponentProps {
    item: FaqItemData;
    isOpen: boolean;
    onClick: () => void;
}

const FaqItem: React.FC<FaqItemComponentProps> = ({ item, isOpen, onClick }) => {
    const { t } = useLanguage();
    const panelId = `faq-panel-${item.questionKey.replace(/\./g, '-')}`;
    
    return (
        <div className="border-b border-gray-200 py-6">
            <button
                onClick={onClick}
                className="w-full flex justify-between items-center text-left p-1 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
                aria-expanded={isOpen}
                aria-controls={panelId}
            >
                <h3 className="text-lg font-semibold text-text-main">
                    {t(item.questionKey)}
                </h3>
                <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                    <svg className="w-6 h-6 text-text-subtle" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </span>
            </button>
            <div
                id={panelId}
                role="region"
                aria-hidden={!isOpen}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}
            >
                <p className="text-text-subtle leading-relaxed pl-1">
                    {t(item.answerKey)}
                </p>
            </div>
        </div>
    );
};

const FaqSection = () => {
    const { t } = useLanguage();
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-20 sm:py-28 bg-secondary/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-text-main tracking-tight">
                        {t('faq_title')}
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-text-subtle">
                        {t('faq_subtitle')}
                    </p>
                </div>
                <div className="max-w-3xl mx-auto">
                    {FAQ_ITEMS_KEYS_DATA.map((item, index) => (
                        <FaqItem
                            key={item.questionKey}
                            item={item}
                            isOpen={openIndex === index}
                            onClick={() => toggleFaq(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FaqSection;