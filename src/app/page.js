import Link from "next/link";
import ResumeSection from '@/components/ResumeSection';

export default function Home() {
  return (
    <main>
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-gray-900/70 bg-gray-900/80">
        <nav className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <Link href="/" className="font-semibold tracking-tight">Kyle Poage</Link>
          <div className="flex items-center gap-6 text-gray-300">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#resume" className="hover:text-white">Resume</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </nav>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-5xl font-bold">
            Hi, I’m Kyle 👋
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            I’m a CS + Econ student with a Certificate in Mathematics, aspiring to become a software engineer.
          </p>
          <div className="mt-6 flex space-x-4 justify-center md:justify-start">
            <button className="bg-blue-600 px-4 py-2 rounded-md text-white"><a href="#resume">View my Resume</a></button>
            <button className="border px-4 py-2 rounded-md"><a href="#contact">Get in touch</a></button>
          </div>
        </div>

        {/* Right side: Photo */}
        <div className="mt-10 md:mt-0 md:w-1/3 flex justify-center">
          <img
            src="/headshot.jpg"
            alt="Kyle Poage"
            className="w-56 h-56 rounded-full object-cover shadow-lg"
          />
        </div>
      </section>


      {/* subtle divider */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
      </div>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-3xl md:text-4xl font-semibold">About Me</h2>
        <p className="mt-4 text-gray-300 leading-relaxed">
          I’m a junior at the University of Wisconsin–Madison studying Computer Science,
          Economics, and a Certificate in Mathematics. I’ve been a Software Engineering Intern at Whova and
          an Undergraduate Teaching Assistant for Programming III at The University of Wisconsin–Madison. I like building
          thoughtful, reliable software and working across the stack—from APIs and data
          models to clean, responsive UIs.
        </p>

        {/* Optional: quick facts grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-gray-800 p-5">
            <h3 className="font-medium">Education</h3>
            <p className="mt-2 text-gray-300">
              UW–Madison · B.S. CS & Econ · GPA 3.81 · Certificate in Mathematics
            </p>
          </div>
          <div className="rounded-2xl border border-gray-800 p-5">
            <h3 className="font-medium">Focus</h3>
            <p className="mt-2 text-gray-300">
              Full-stack, APIs (Django/Flask), Python, Java, React
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
      </div>
      

      <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-3xl md:text-4xl font-semibold">Projects</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-gray-800 p-6 hover:border-gray-600 transition">
            <h3 className="text-xl font-semibold">Poker Emulator</h3>
            <p className="mt-2 text-gray-300">
              Online poker with Node.js + WebSockets; custom game logic with HTML/CSS UI.
            </p>
            <div className="mt-3 flex items-center gap-3 ">
              <a
                href="https://kpoage12.github.io/Poker/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View my Project"
                className="group inline-flex items-center"
              >
                Go to site
              </a>

              <a
                href="https://github.com/kpoage12/Poker"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View my GitHub"
                className="group inline-flex items-center pl-3"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-8 w-8 opacity-80 transition-transform duration-200 group-hover:scale-110 group-hover:opacity-100"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.302 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.084-.73.084-.73 1.205.084 1.84 1.24 1.84 1.24 1.07 1.833 2.807 1.303 3.492.996.108-.775.418-1.303.76-1.603-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.803 5.625-5.475 5.921.43.372.823 1.103.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .319.216.694.825.576C20.565 21.796 24 17.298 24 12 24 5.37 18.63 0 12 0z"/>
                </svg>
            </a>
          </div>
          </article>

          <article className="rounded-2xl border border-gray-800 p-6 hover:border-gray-600 transition">
            <h3 className="text-xl font-semibold">TEL Real Estate</h3>
            <p className="mt-2 text-gray-300">
              Flask APIs to verify disability accessibility for short-term rentals:
              listing, applying for validation, confirmation workflow.
            </p>
            <div className="mt-3 flex items-center gap-3 ">
              <a
                  href="https://github.com/lxtung0/TEL-Real-Estate"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View my GitHub"
                  className="group inline-flex items-center pl-3"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-8 w-8 opacity-80 transition-transform duration-200 group-hover:scale-110 group-hover:opacity-100"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.302 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.084-.73.084-.73 1.205.084 1.84 1.24 1.84 1.24 1.07 1.833 2.807 1.303 3.492.996.108-.775.418-1.303.76-1.603-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.803 5.625-5.475 5.921.43.372.823 1.103.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .319.216.694.825.576C20.565 21.796 24 17.298 24 12 24 5.37 18.63 0 12 0z"/>
                  </svg>
              </a>
            </div>
          </article>

          <article className="rounded-2xl border border-gray-800 p-6 hover:border-gray-600 transition">
            <h3 className="text-xl font-semibold">Flight Router</h3>
            <p className="mt-2 text-gray-300">
              Dijkstra-based routing over airport graph to minimize mileage.
            </p>
            <div className="mt-3 flex items-center gap-3 ">
              <a
                  href="https://github.com/kpoage12/Flight_Router"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View my GitHub"
                  className="group inline-flex items-center pl-3"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-8 w-8 opacity-80 transition-transform duration-200 group-hover:scale-110 group-hover:opacity-100"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.302 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.084-.73.084-.73 1.205.084 1.84 1.24 1.84 1.24 1.07 1.833 2.807 1.303 3.492.996.108-.775.418-1.303.76-1.603-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.803 5.625-5.475 5.921.43.372.823 1.103.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .319.216.694.825.576C20.565 21.796 24 17.298 24 12 24 5.37 18.63 0 12 0z"/>
                  </svg>
              </a>
            </div>
          </article>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
      </div>
      <section id="resume">
        <ResumeSection />
      </section>

      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
      </div>


      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-3xl md:text-4xl font-semibold">Contact</h2>
        <p className="mt-4 text-gray-300">
          Want to chat about an opportunity or a project?
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="mailto:kpoage@wisc.edu"
            className="rounded-xl bg-blue-600 px-6 py-3 font-medium hover:bg-blue-500 transition"
          >
            Email Me
          </a>
          <a href="https://www.linkedin.com/in/kyle-poage-6978a4237/" target="_blank" className="rounded-xl border border-gray-700 px-6 py-3 hover:border-gray-500 transition">LinkedIn</a>
          <a href="https://github.com/kpoage12" target="_blank" className="rounded-xl border border-gray-700 px-6 py-3 hover:border-gray-500 transition">GitHub</a>
        </div>
      </section>

      <footer className="pb-10">
        <div className="mx-auto max-w-6xl px-6 text-sm text-gray-400">
          © {new Date().getFullYear()} Kyle Poage
        </div>
      </footer>
    </main>
  );
}
