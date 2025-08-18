'use client';

import { useState } from 'react';

export default function ResumeSection() {
  const [open, setOpen] = useState(false);

  return (
    <section id="resume" className="mx-auto max-w-6xl px-6 py-24"> 
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Resume</h2>

      <div className="border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm overflow-hidden">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="w-full flex items-center justify-between p-5 md:p-6 text-left"
        >
          <span className="text-lg md:text-xl font-medium">View my resume</span>
          <span className="ml-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15">
            <svg
              className={`h-5 w-5 transition-transform ${open ? 'rotate-180' : ''}`}
              viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>

        {open && (
          <div className="px-5 md:px-6 pb-6">
            <div className="rounded-xl overflow-hidden border border-white/10">
              <iframe
                src="/resume.pdf#toolbar=0&navpanes=0&scrollbar=0"
                title="Kyle Poage Resume"
                className="w-full h-[70vh] bg-black/20"
              />
            </div>

            <div className="mt-4 flex gap-3">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-medium bg-blue-600 text-white hover:bg-blue-500"
              >
                Download PDF
              </a>
              <a
                href="/resume.pdf"
                target="_blank" rel="noreferrer"
                className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-medium border border-white/15 hover:bg-white/5"
              >
                Open in new tab
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
