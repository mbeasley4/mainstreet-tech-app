'use client';

import { useState, type FormEvent } from 'react';

interface ApplyFormProps {
  jobTitle: string;
  onClose: () => void;
}

export default function ApplyForm({ jobTitle, onClose }: ApplyFormProps) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    const form = e.currentTarget;
    const data = {
      firstName: (form.elements.namedItem('firstName') as HTMLInputElement).value,
      lastName: (form.elements.namedItem('lastName') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      jobTitle,
      coverLetter: (form.elements.namedItem('coverLetter') as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const json = await res.json();
        throw new Error(json.error || 'Something went wrong.');
      }

      setStatus('success');
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong.');
    }
  }

  const inputClass =
    'w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent bg-white text-sm transition';

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-4">
          <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-slate-900 mb-2">Application submitted!</h3>
        <p className="text-slate-500 text-sm max-w-xs mb-6">
          Thanks for applying for <span className="font-semibold text-slate-700">{jobTitle}</span>. Our HR team will be in touch soon.
        </p>
        <button
          onClick={onClose}
          className="text-brand-600 font-semibold text-sm hover:underline underline-offset-2"
        >
          Back to open roles
        </button>
      </div>
    );
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="flex items-start justify-between mb-1">
        <div>
          <h3 className="text-lg font-bold text-slate-900">Apply for this role</h3>
          <p className="text-brand-600 font-medium text-sm mt-0.5">{jobTitle}</p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
          aria-label="Close form"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">First Name <span className="text-red-500">*</span></label>
          <input name="firstName" type="text" required placeholder="Jane" className={inputClass} />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Last Name <span className="text-red-500">*</span></label>
          <input name="lastName" type="text" required placeholder="Doe" className={inputClass} />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">Email Address <span className="text-red-500">*</span></label>
        <input name="email" type="email" required placeholder="jane@example.com" className={inputClass} />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone <span className="text-slate-400 font-normal">(optional)</span></label>
        <input name="phone" type="tel" placeholder="(555) 000-0000" className={inputClass} />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">Cover Letter / Message <span className="text-slate-400 font-normal">(optional)</span></label>
        <textarea
          name="coverLetter"
          rows={5}
          placeholder="Tell us why you're a great fit for this role..."
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === 'error' && (
        <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-xl px-4 py-3">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-brand-600 hover:bg-brand-700 disabled:opacity-60 text-white font-bold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2"
      >
        {status === 'submitting' ? (
          <>
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
            </svg>
            Sending...
          </>
        ) : (
          <>
            Submit Application
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </>
        )}
      </button>
    </form>
  );
}
