import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Header/Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 py-20 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
              Anamika Singh
            </h1>
            <p className="text-xl text-gray-100 mb-4">
              Business Leader & Strategic Growth Consultant
            </p>
            <div className="flex justify-center items-center gap-4 mb-8 text-gray-100">
              <a href="mailto:anamika.s4001@gmail.com" className="hover:text-white">
                anamika.s4001@gmail.com
              </a>
              <span>|</span>
              <a href="tel:+919663843187" className="hover:text-white">
                +91 96638 43187
              </a>
              <span>|</span>
              <span>Bangalore, India</span>
            </div>
            <div className="flex justify-center gap-4">
              <a
                href="#contact"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Contact Me
              </a>
              <a
                href="#experience"
                className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
              >
                View Experience
              </a>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-blue-600/20 to-transparent"></div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Professional Summary
          </h2>
          <div className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto space-y-6">
            <p className="leading-relaxed">
              Results-driven business leader with over 15 years of experience in driving strategic growth and
              managing partner ecosystems. Extensive background in sales, marketing, and strategic business
              development across leading organizations including ABB, Saint-Gobain, Schneider Electric, and
              multinational corporations.
            </p>
            <p className="leading-relaxed">
              Key achievements include collaborating with Bain & Company and Global ABB for implementing
              Full Potential Service Strategy in ABB India, developing Saint-Gobain Ecophon businesses from
              scratch in Bangalore, and enhancing Schneider wiring device awareness in the architect community.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300 rounded-full text-sm">Strategic Planning</span>
              <span className="px-4 py-2 bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300 rounded-full text-sm">Business Development</span>
              <span className="px-4 py-2 bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300 rounded-full text-sm">Market Analysis</span>
              <span className="px-4 py-2 bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300 rounded-full text-sm">Partner Management</span>
              <span className="px-4 py-2 bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300 rounded-full text-sm">Sales Leadership</span>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Projects Section */}
      <section id="projects" className="py-16 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Latest Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Portfolio Website</h3>
                  <span className="text-sm text-blue-600 dark:text-blue-400">2024</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Modern, responsive portfolio website built with Next.js and Tailwind CSS. Features include:
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Responsive design with dark mode support</li>
                  <li>Beautiful gradient color schemes</li>
                  <li>Optimized performance and SEO</li>
                  <li>Interactive UI elements</li>
                </ul>
                <div className="mt-4 flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300 rounded-full text-sm">Next.js</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300 rounded-full text-sm">Tailwind CSS</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300 rounded-full text-sm">TypeScript</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Coming Soon</h3>
                  <span className="text-sm text-blue-600 dark:text-blue-400">2024</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Space reserved for our next exciting project. Some potential ideas:
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Personal blog platform</li>
                  <li>Project management dashboard</li>
                  <li>E-commerce solution</li>
                  <li>AI-powered application</li>
                </ul>
                <div className="mt-4 flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300 rounded-full text-sm">Coming Soon</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Competencies Section */}
      <section className="py-16 bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Core Competencies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                Partner Development
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Building strategic alliances, enabling high-impact co-sell initiatives, and driving revenue growth.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                Cloud & SaaS Expertise
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Deep understanding of cloud infrastructure and SaaS-based solutions.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                Technical Skills
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Python, SQL, HubSpot, IoT, Power BI, and various SaaS platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Professional Experience
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Consultant</h3>
                  <p className="text-blue-600 dark:text-blue-400">electrific.net, Saudi Arabia</p>
                </div>
                <p className="text-gray-600 dark:text-gray-400">October 2024 - Present</p>
              </div>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Enabled high-value partnerships with major construction firms, including NEOM The Line</li>
                <li>Spearheaded cross-functional team efforts, optimizing supply chain and project logistics</li>
                <li>Achieved 40% increase in customer acquisition through targeted campaigns</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Prescription Manager</h3>
                  <p className="text-blue-600 dark:text-blue-400">Schneider Electric</p>
                </div>
                <p className="text-gray-600 dark:text-gray-400">October 2015 - January 2016</p>
              </div>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Enhanced Schneider Electric brand image through strategic initiatives and relationship building</li>
                <li>Led promotional activities and demos for residential, commercial, hotel & healthcare segments</li>
                <li>Expertise in Wiring Devices, Lighting & Room Control, and Final Distribution</li>
                <li>Promoted IOT-based solutions to Marketing, Sales and Strategy managers</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Key Account Manager</h3>
                  <p className="text-blue-600 dark:text-blue-400">Ecophon Saint Gobain</p>
                </div>
                <p className="text-gray-600 dark:text-gray-400">July 2014 - September 2015</p>
              </div>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Established Ecophon segment in Bangalore and provided support across South India</li>
                <li>Created database of 400+ architects and 70+ dealers in Bangalore</li>
                <li>Generated ₹40 lakhs in sales with ₹5 Cr projects in pipeline</li>
                <li>Organized 7 concept development acoustic awareness events at key accounts</li>
                <li>Participated in global sales meet in Sweden</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Business Development Specialist</h3>
                  <p className="text-blue-600 dark:text-blue-400">ABB India Limited (CSO)</p>
                </div>
                <p className="text-gray-600 dark:text-gray-400">March 2012 - June 2014</p>
              </div>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Collaborated with Bain & Company to implement full potential service strategy across India, Middle East, and Africa</li>
                <li>Provided ServIS training to 1000+ employees including Engineers, Product Managers, and VPs</li>
                <li>Coordinated financial planning for 26 business units across India</li>
                <li>Achieved 4th rank among 100 ABB countries in targeted KPIs for Market Transparency and Service Portfolio initiatives</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Marketing Engineer</h3>
                  <p className="text-blue-600 dark:text-blue-400">ABB Drives</p>
                </div>
                <p className="text-gray-600 dark:text-gray-400">June 2011 - March 2012</p>
              </div>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Generated 0.5 MINR quarter sales with 1 MINR in pipeline for key account Danieli</li>
                <li>Coordinated projects with internal teams for key account deliveries</li>
                <li>Provided ACS800, ACS550 product training to 20+ Guest engineer trainees</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Junior Engineer</h3>
                  <p className="text-blue-600 dark:text-blue-400">New Delhi Municipal Council</p>
                </div>
                <p className="text-gray-600 dark:text-gray-400">March 2010 - May 2011</p>
              </div>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Managed procurement of electrical fixtures for Commonwealth Games 2010 stadiums</li>
                <li>Led electrical store inventory management and system modernization</li>
                <li>Trained electrical division staff on new online inventory management tool</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Guest Faculty</h3>
                  <p className="text-blue-600 dark:text-blue-400">Dr. B.R. Ambedkar Polytechnic College</p>
                </div>
                <p className="text-gray-600 dark:text-gray-400">July 2009 - January 2010</p>
              </div>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Taught Network Analysis and Electronic subjects to diploma students</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Additional Achievements
          </h2>
          <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-4">
              <li>NCC-B certified: Completed two-year rigorous course as a National Cadet Corps</li>
              <li>Silver medal recipient for highest marks in MP state at All India Environmental awareness competition by Jim Corbett</li>
              <li>Successfully organized multiple client events for promoting application-specific drive solutions at ABB Nelamangala</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education & Languages Section */}
      <section className="py-16 bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
              <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">Education</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white">Strategic Management</h3>
                  <p className="text-gray-600 dark:text-gray-300">IIT Delhi, 2013</p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white">B.E. in Electrical Engineering</h3>
                  <p className="text-gray-600 dark:text-gray-300">Madhav Institute of Technology and Science, 2009</p>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
              <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">Languages</h2>
              <div className="space-y-2">
                <p className="text-gray-600 dark:text-gray-300">English - Full Professional Proficiency</p>
                <p className="text-gray-600 dark:text-gray-300">Hindi - Native Proficiency</p>
                <p className="text-gray-600 dark:text-gray-300">German - Elementary Proficiency</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bhangra Aerobics Section */}
      <section className="py-16 bg-gradient-to-r from-pink-50 via-purple-50 to-blue-50 dark:from-pink-900/20 dark:via-purple-900/20 dark:to-blue-900/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 text-transparent bg-clip-text">
            Bhangra Aerobics Enthusiast
          </h2>
          <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
            <div className="text-center space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Passionate about combining the energetic rhythms of Bhangra with modern aerobic exercises.
                As an enthusiastic practitioner, I blend traditional Punjabi dance with fitness routines,
                creating an engaging and fun way to stay active and healthy!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="px-4 py-2 bg-gradient-to-r from-pink-100 to-pink-200 dark:from-pink-900 dark:to-pink-800 text-pink-700 dark:text-pink-300 rounded-full text-sm font-medium">
                  Dance Enthusiast
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
                  Bhangra Dance
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                  Fitness Enthusiast
                </span>
              </div>
              <div className="pt-6">
                <p className="text-gray-600 dark:text-gray-300 italic">
                  "Sharing the joy of Bhangra and fitness with fellow enthusiasts!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Get In Touch
          </h2>
          <div className="flex justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/anamikai"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-800 px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105 text-blue-600 dark:text-blue-400"
            >
              LinkedIn
            </a>
            <a
              href="mailto:anamika.s4001@gmail.com"
              className="bg-white dark:bg-gray-800 px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105 text-blue-600 dark:text-blue-400"
            >
              Email
            </a>
            <a
              href="tel:+919663843187"
              className="bg-white dark:bg-gray-800 px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105 text-blue-600 dark:text-blue-400"
            >
              Phone
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
