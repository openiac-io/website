'use client';
import { useState } from 'react';
import { X, CheckCircle2, Loader2, Mail, Building2 } from 'lucide-react';
import { joinWaitlist } from '@/actions/waitlist';

export default function WaitlistModal({ isOpen, onClose, planName }: { isOpen: boolean; onClose: () => void; planName: string; }) {
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [interest, setInterest] = useState('');
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus('loading');
    const result = await joinWaitlist(email, planName, company, interest);
    if (result.success) {
      setStatus('success');
    } else {
      setStatus('error');
      setErrorMsg(result.error || "An error occurred.");
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-0">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-background border border-border rounded-2xl shadow-2xl w-full max-w-md p-6 sm:p-8 overflow-hidden animate-in fade-in zoom-in duration-200">
        <button onClick={onClose} className="absolute right-4 top-4 text-muted-foreground hover:text-foreground"><X className="h-5 w-5" /></button>
        {status === 'success' ? (
          <div className="text-center py-8">
            <CheckCircle2 className="h-16 w-16 text-brand-500 mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-2">Registration Complete!</h3>
            <p className="text-muted-foreground mb-6">The {planName} version is currently in private beta (in development). We'll let you know as soon as it's released!</p>
            <button onClick={onClose} className="w-full rounded-xl bg-muted py-3 font-medium hover:bg-muted/80">Close</button>
          </div>
        ) : (
          <div>
            <h3 className="text-2xl font-bold mb-2">Join the Waitlist</h3>
            <p className="text-muted-foreground mb-8">Be the first to hear about the {planName} release.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Work email address" className="w-full pl-10 pr-4 py-3 bg-muted/50 border border-border rounded-xl outline-none focus:border-brand-500" />
                </div>
              </div>
              <button type="submit" disabled={status === 'loading'} className="w-full rounded-xl bg-brand-600 py-3 font-semibold text-white hover:bg-brand-500 flex items-center justify-center">
                {status === 'loading' ? <Loader2 className="h-5 w-5 animate-spin" /> : "Notify Me"}
              </button>
              {status === 'error' && <p className="text-red-500 text-sm text-center">{errorMsg}</p>}
            </form>
          </div>
        )}
      </div>
    </div>
  );
}