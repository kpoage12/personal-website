export default function Resume() {
    return (
      <section className="max-w-3xl mx-auto py-12 px-6">
        {/* Education */}
        <h2 className="text-3xl font-bold mb-6">Education</h2>
        <div className="mb-8">
          <h3 className="text-xl font-semibold">
            University of Wisconsin-Madison
            <span className="text-gray-300 text-base ml-2">May 2026</span>
          </h3>
          <p className="text-gray-400">
            B.S. Computer Science, Economics — <span className="font-medium">3.81 GPA</span>
          </p>
          <p className="text-gray-400">Certificate in Mathematics</p>
          <p className="mt-2 text-gray-300">
            <strong>Relevant Coursework:</strong> Operating Systems, Computer Networks, Database Management Systems, Algorithms, Machine Organization, Data Analytics, Linear Algebra, Multivariable Calculus, Combinatorics, Econometrics, Game Theory
          </p>
        </div>
  
        <h2 className="text-3xl font-bold mb-6">Experience</h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold">Software Engineering Intern — Whova, Inc.</h3>
          <p className="text-gray-300">San Diego, CA | May 2025 – Aug 2025</p>
          <ul className="list-disc list-inside text-gray-400 mt-2 space-y-1">
            <li>Developed internal tools using Django and React to streamline Sales Team processes</li>
            <li>Designed RESTful APIs with Django Rest Framework handling authentication, serialization, and pagination</li>
            <li>Managed data with Django ORM; integrated Gmail API to automate lead creation</li>
            <li>Used Redux for state management to support dynamic UI features</li>
          </ul>
        </div>
  
        <div className="mb-6">
          <h3 className="text-xl font-semibold">Undergraduate Teaching Assistant — UW-Madison</h3>
          <p className="text-gray-300">Madison, WI | Sept 2024 – May 2025</p>
          <ul className="list-disc list-inside text-gray-400 mt-2 space-y-1">
            <li>Held weekly office hours to assist Programming III students in Java</li>
            <li>Collaborated with professors/TAs to develop course materials and resources</li>
            <li>Guided students through debugging and problem-solving in Java</li>
          </ul>
        </div>
  
        {/* Projects */}
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold">TEL Real Estate</h3>
          <p className="text-gray-300">Feb 2025 – Apr 2025</p>
          <p className="text-gray-400">
            Designed an accessibility verification feature for Airbnb rentals using Flask APIs to manage listing and validation workflows.
          </p>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-semibold">Poker Emulator</h3>
          <p className="text-gray-300">Jun 2024 – Feb 2025</p>
          <p className="text-gray-400">
            Built an online poker game using Node.js + WebSockets with custom backend game logic and an HTML/CSS frontend.
          </p>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-semibold">Flight Router</h3>
          <p className="text-gray-300">Oct 2023 – Dec 2023</p>
          <p className="text-gray-400">
            Implemented Dijkstra’s algorithm on a graph of airports/flights to find shortest mileage routes.
          </p>
        </div>
  
        {/* Skills */}
        <h2 className="text-3xl font-bold mb-6">Technical Skills</h2>
        <p className="text-gray-400">
          <strong>Languages & Frameworks:</strong> Java, Python, React, SQL, Django ORM, Node.js, Stata
        </p>
        <p className="text-gray-400 mt-2">
          <strong>Tools:</strong> Git, Redux
        </p>
      </section>
    );
  }
  