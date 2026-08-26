'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Loader2, Mail, Building2 } from 'lucide-react';
import { joinWaitlist } from '@/actions/waitlist';
import { useTranslations } from 'next-intl';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  planName?: string;
}

export default function WaitlistModal({ isOpen, onClose, planName = 'Enterprise Subscription' }: WaitlistModalProps) {
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [interest, setInterest] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const t = useTranslations('Waitlist');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    setErrorMessage('');
    
    const result = await joinWaitlist(email, planName, company, interest);
    
    if (result.success) {
      setStatus('success');
    } else {
      setStatus('error');
      setErrorMessage(result.error || t('errorDefault'));
    }
  };

  const handleClose = () => {
    setStatus('idle');
    setEmail('');
    setCompany('');
    setInterest('');
    setErrorMessage('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="w-full max-w-md bg-background border border-border shadow-2xl rounded-2xl p-6 pointer-events-auto relative overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              <button 
                onClick={handleClose}
                className="absolute right-4 top-4 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              {status === 'success' ? (
                <div className="py-8 text-center flex flex-col items-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", bounce: 0.5 }}
                  >
                    <CheckCircle2 className="h-16 w-16 text-emerald-500 mb-4" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-2">{t('successTitle')}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('successDesc1', { planName })}<br/>
                    {t('successDesc2')}
                  </p>
                  <button
                    onClick={handleClose}
                    className="mt-8 w-full bg-brand-600 hover:bg-brand-500 text-white font-medium py-2.5 rounded-xl transition-colors"
                  >
                    {t('close')}
                  </button>
                </div>
              ) : (
                <div>
                  <h3 className="text-2xl font-bold mb-2">{t('formTitle')}</h3>
                  <p className="text-muted-foreground mb-6">
                    {t('formDesc', { planName })}
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={t('placeholder')}
                        className="w-full pl-10 pr-4 py-3 bg-muted/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/50 transition-shadow"
                      />
                    </div>
                    
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Building2 className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder={t('companyPlaceholder')}
                        className="w-full pl-10 pr-4 py-3 bg-muted/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/50 transition-shadow"
                      />
                    </div>

                    <div className="space-y-2 pb-2">
                      <label className="text-sm font-medium text-muted-foreground px-1">{t('interestLabel')}</label>
                      <select 
                        value={interest}
                        onChange={(e) => setInterest(e.target.value)}
                        className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/50 transition-shadow appearance-none cursor-pointer"
                      >
                        <option value="">-- {t('interestLabel')} --</option>
                        <option value="k8s">{t('interestOptions.k8s')}</option>
                        <option value="openstack">{t('interestOptions.openstack')}</option>
                        <option value="both">{t('interestOptions.both')}</option>
                        <option value="other">{t('interestOptions.other')}</option>
                      </select>
                    </div>

                    {status === 'error' && (
                      <p className="text-sm text-red-500 font-medium px-1">
                        {errorMessage}
                      </p>
                    )}
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full bg-foreground text-background font-medium py-3 rounded-xl transition-all hover:bg-foreground/90 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2 mt-2"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="h-5 w-5 animate-spin" />
                          {t('loading')}
                        </>
                      ) : (
                        t('submit')
                      )}
                    </button>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
