'use client';

import { useState } from 'react';
import { PortableText } from '@portabletext/react';
import ApplyForm from './ApplyForm';

interface Job {
  _id: string;
  title: string;
  department?: string;
  location?: string;
  employmentType?: string;
  summary?: string;
  description?: unknown[];
  requirements?: string[];
  postedAt?: string;
}

const TYPE_LABELS: Record<string, string> = {
  'full-time': 'Full-time',
  'part-time': 'Part-time',
  'contract': 'Contract',
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

export default function JobListings({ jobs }: { jobs: Job[] }) {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [applyingId, setApplyingId] = useState<string | null>(null);

  if (jobs.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="w-16 h-16 rounded-2xl bg-brand-50 flex items-center justify-center mx-auto mb-5">
          <svg className="w-8 h-8 text-brand-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.073a2.25 2.25 0 01-2.182 2.25 18.75 18.75 0 01-15.136 0 2.25 2.25 0 01-2.182-2.25v-4.073M16.5 7.5h-9m9 0A2.25 2.25 0 0118.75 9.75v.75M16.5 7.5A2.25 2.25 0 0114.25 5.25h-4.5A2.25 2.25 0 007.5 7.5m9 0v.75M7.5 7.5v.75m0 0A2.25 2.25 0 015.25 10.5v3.75" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">No open roles right now</h3>
        <p className="text-slate-500 text-sm max-w-sm mx-auto">
          We don&apos;t have any active openings at the moment, but we&apos;re always interested in great talent.{' '}
          <a href="/contact" className="text-brand-600 hover:underline font-medium">Send us a note</a>.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {jobs.map((job) => {
        const isExpanded = expandedId === job._id;
        const isApplying = applyingId === job._id;
        const typeLabel = job.employmentType ? TYPE_LABELS[job.employmentType] ?? job.employmentType : null;

        return (
          <div
            key={job._id}
            className="bg-white rounded-2xl border border-slate-200 overflow-hidden transition-shadow hover:shadow-md"
          >
            {/* Header row */}
            <div className="p-6 flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  {job.department && (
                    <span className="px-2.5 py-0.5 rounded-full bg-brand-50 text-brand-700 text-xs font-semibold">
                      {job.department}
                    </span>
                  )}
                  {typeLabel && (
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">
                      {typeLabel}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-slate-900">{job.title}</h3>
                <div className="flex flex-wrap items-center gap-3 mt-1.5 text-sm text-slate-500">
                  {job.location && (
                    <span className="flex items-center gap-1">
                      <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {job.location}
                    </span>
                  )}
                  {job.postedAt && (
                    <span>Posted {formatDate(job.postedAt)}</span>
                  )}
                </div>
              </div>

              <div className="flex gap-2 shrink-0">
                <button
                  onClick={() => {
                    setApplyingId(null);
                    setExpandedId(isExpanded ? null : job._id);
                  }}
                  className="px-4 py-2 rounded-xl border border-slate-200 text-slate-700 text-sm font-medium hover:bg-slate-50 transition-colors"
                >
                  {isExpanded ? 'Less' : 'View Details'}
                </button>
                <button
                  onClick={() => {
                    setExpandedId(null);
                    setApplyingId(isApplying ? null : job._id);
                  }}
                  className="px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-sm font-bold transition-colors"
                >
                  Apply Now
                </button>
              </div>
            </div>

            {/* Expanded details */}
            {isExpanded && (
              <div className="px-6 pb-6 border-t border-slate-100 pt-5 space-y-5">
                {job.summary && (
                  <p className="text-slate-600 leading-relaxed">{job.summary}</p>
                )}
                {job.description && Array.isArray(job.description) && job.description.length > 0 && (
                  <div className="prose prose-sm prose-slate max-w-none">
                    <PortableText value={job.description} />
                  </div>
                )}
                {job.requirements && job.requirements.length > 0 && (
                  <div>
                    <h4 className="font-bold text-slate-900 mb-3 text-sm uppercase tracking-wider">Requirements</h4>
                    <ul className="space-y-2">
                      {job.requirements.map((req, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600">
                          <svg className="w-4 h-4 text-brand-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <button
                  onClick={() => {
                    setExpandedId(null);
                    setApplyingId(job._id);
                  }}
                  className="mt-2 inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors"
                >
                  Apply for this Role
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            )}

            {/* Apply form */}
            {isApplying && (
              <div className="px-6 pb-6 border-t border-slate-100 pt-5 bg-slate-50">
                <ApplyForm
                  jobTitle={job.title}
                  onClose={() => setApplyingId(null)}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
