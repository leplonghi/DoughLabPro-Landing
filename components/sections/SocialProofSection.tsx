

import React, { useState } from 'react';
import { TESTIMONIALS_DATA } from '../../constants';
import { useLanguage } from '../../hooks/useLanguage';

interface TestimonialData {
    name: string;
    roleKey: string;
    avatar: string;
    quoteKey: string;
}

// A type to handle the edited quote for the current session
type DisplayTestimonial = TestimonialData & { editedQuote?: string };

// Modal Component for editing a testimonial
const EditModal: React.FC<{
  quote: string;
  onSave: () => void;
  onCancel: () => void;
  setQuote: (quote: string) => void;
  t: (key: string) => string;
}> = ({ quote, onSave, onCancel, setQuote, t }) => {
    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4" aria-modal="true" role="dialog" aria-labelledby="edit-modal-title">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 animate-fade-in-up">
                <h3 id="edit-modal-title" className="text-xl font-bold text-text-main mb-4">
                    {t('socialProof_editModal_title')}
                </h3>
                <div className="mb-4">
                    <label htmlFor="quote" className="block text-sm font-medium text-text-subtle mb-1">
                        {t('socialProof_editModal_label')}
                    </label>
                    <textarea
                        id="quote"
                        value={quote}
                        onChange={(e) => setQuote(e.target.value)}
                        rows={5}
                        className="w-full p-2 border border-gray-300 rounded-md bg-white text-text-main focus:ring-primary focus:border-primary transition-colors"
                    />
                </div>
                <div className="flex justify-end space-x-4">
                    <button
                        onClick={onCancel}
                        className="px-4 py-2 rounded-md text-text-subtle hover:bg-gray-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                    >
                        {t('socialProof_editModal_cancel')}
                    </button>
                    <button
                        onClick={onSave}
                        className="px-4 py-2 rounded-md bg-primary hover:bg-primary-hover text-white font-bold transition-all transform active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                    >
                        {t('socialProof_editModal_save')}
                    </button>
                </div>
            </div>
             <style>{`
                @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up {
                    animation: fade-in-up 0.3s ease-out;
                }
            `}</style>
        </div>
    );
};

const SocialProofSection = () => {
  const { t } = useLanguage();
  const [testimonials, setTestimonials] = useState<DisplayTestimonial[]>(TESTIMONIALS_DATA);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [currentQuote, setCurrentQuote] = useState('');

  const handleEditClick = (index: number) => {
    setEditingIndex(index);
    const testimonial = testimonials[index];
    // Use the edited quote if it exists, otherwise use the translated original
    setCurrentQuote(testimonial.editedQuote || t(testimonial.quoteKey));
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setEditingIndex(null);
    setCurrentQuote('');
  };

  const handleSave = () => {
    if (editingIndex === null) return;

    // To handle edits without breaking i18n, we add a new property 'editedQuote'
    // to the testimonial object in the local state. This persists for the session.
    const updatedTestimonials = [...testimonials];
    updatedTestimonials[editingIndex].editedQuote = currentQuote;
    setTestimonials(updatedTestimonials);

    handleCancel();
  };

  return (
    <>
      <section id="social-proof" className="py-20 sm:py-28 bg-secondary/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-main tracking-tight">
              {t('socialProof_title')}
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-text-subtle">
              {t('socialProof_subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center group relative"
              >
                  <img 
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-20 h-20 rounded-full mb-4 border-4 border-primary/50"
                      loading="lazy"
                      decoding="async"
                  />
                  <blockquote className="text-lg text-text-subtle italic flex-grow">
                      <p>“{testimonial.editedQuote || t(testimonial.quoteKey)}”</p>
                  </blockquote>
                  <div className="mt-4">
                      <p className="font-bold text-text-main">{testimonial.name}</p>
                      <p className="text-sm text-text-subtle">{t(testimonial.roleKey)}</p>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <button
                        onClick={() => handleEditClick(index)}
                        className="px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 focus:opacity-100 active:scale-95 transform focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                        aria-label={`Edit ${testimonial.name}'s testimonial`}
                    >
                        {t('socialProof_editButton')}
                    </button>
                  </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {isModalOpen && (
          <EditModal 
              quote={currentQuote}
              setQuote={setCurrentQuote}
              onSave={handleSave}
              onCancel={handleCancel}
              t={t}
          />
      )}
    </>
  );
};

export default SocialProofSection;