import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Header/Hero Section */}
      <header className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 py-20 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h1 className="hero-title text-4xl md:text-6xl font-bold mb-4 text-white">
              Anamika Singh
            </h1>
            <p className="text-xl text-blue-100 mb-4 font-medium">
              Business Leader & Strategic Growth Consultant
            </p>
            <div className="flex justify-center items-center gap-4 mb-8 text-blue-100">
              <a href="mailto:anamika.s4001@gmail.com" className="hover:text-white transition-colors">
                anamika.s4001@gmail.com
              </a>
              <span>|</span>
              <a href="tel:+919663843187" className="hover:text-white transition-colors">
                +91 96638 43187
              </a>
              <span>|</span>
              <span>Bangalore, India</span>
            </div>
            <div className="flex justify-center gap-4">
              <a
                href="#contact"
                className="bg-white text-blue-700 px-8 py-3 rounded-lg hover:bg-blue-50 transition-all font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Contact Me
              </a>
              <a
                href="#experience"
                className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-all font-semibold"
              >
                View Experience
              </a>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-blue-700/20 to-transparent"></div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Professional Summary
          </h2>
          <div className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="font-bold text-gray-900 dark:text-white mb-3">15+ Years Experience</h3>
                <p className="text-sm leading-relaxed mb-3">
                  Strategic business leader driving corporate communications, brand marketing, and business development across B2B/enterprise organizations globally.
                </p>
                <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                  Applied at: electrific.net, Cidaas, MTAP, ABB
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="font-bold text-gray-900 dark:text-white mb-3">Global Impact</h3>
                <p className="text-sm leading-relaxed mb-3">
                  Implemented Full Potential Service Strategy with Bain & Company and ABB across India/Middle East/Africa, achieving 4th rank among 100 countries.
                </p>
                <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                  Applied at: ABB India (with Bain & Company)
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="font-bold text-gray-900 dark:text-white mb-3">Platform Leadership</h3>
                <p className="text-sm leading-relaxed mb-3">
                  Led product strategy for enterprise platforms, launched partner ecosystems, and drove significant customer acquisition growth across B2B environments.
                </p>
                <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                  Applied at: MTAP (Safetrax), Cidaas, electrific.net
                </div>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300 rounded-full text-sm">Strategic Implementation</span>
              <span className="px-4 py-2 bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300 rounded-full text-sm">Business Development</span>
              <span className="px-4 py-2 bg-indigo-100 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-300 rounded-full text-sm">Team Leadership</span>
              <span className="px-4 py-2 bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-300 rounded-full text-sm">Product Marketing</span>
              <span className="px-4 py-2 bg-teal-100 text-teal-600 dark:bg-teal-900 dark:text-teal-300 rounded-full text-sm">Partner Ecosystems</span>
              <span className="px-4 py-2 bg-pink-100 text-pink-600 dark:bg-pink-900 dark:text-pink-300 rounded-full text-sm">Content Strategy</span>
              <span className="px-4 py-2 bg-cyan-100 text-cyan-600 dark:bg-cyan-900 dark:text-cyan-300 rounded-full text-sm">B2B Marketing</span>
              <span className="px-4 py-2 bg-violet-100 text-violet-600 dark:bg-violet-900 dark:text-violet-300 rounded-full text-sm">Digital Transformation</span>
              <span className="px-4 py-2 bg-amber-100 text-amber-600 dark:bg-amber-900 dark:text-amber-300 rounded-full text-sm">Cross-functional Leadership</span>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Projects Section */}
      <section id="projects" className="py-16 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Recent Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">11sari.com</h3>
                <span className="text-xs text-blue-600 dark:text-blue-400">2025</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 leading-relaxed">
                Blockchain-authenticated saree e-commerce platform connecting customers with master weavers through NFT certificates.
              </p>
              <div className="flex gap-2 flex-wrap mb-3">
                <span className="px-2 py-1 bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300 rounded-full text-xs">Blockchain</span>
                <span className="px-2 py-1 bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300 rounded-full text-xs">NFT</span>
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                <strong>Visit:</strong> <a href="https://11sari.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">11sari.com</a>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">FitnessFirst</h3>
                <span className="text-xs text-green-600 dark:text-green-400">Feb 2025</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 leading-relaxed">
                Health and wellness consultancy empowering personalized fitness plans and corporate wellness programs.
              </p>
              <div className="flex gap-2 flex-wrap mb-3">
                <span className="px-2 py-1 bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300 rounded-full text-xs">Wellness</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300 rounded-full text-xs">Content</span>
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                <strong>Visit:</strong> <a href="https://www.linkedin.com/company/1fitness/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">LinkedIn</a>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">HotelDropBot</h3>
                <span className="text-xs text-purple-600 dark:text-purple-400">Apr 2025</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 leading-relaxed">
                Telegram bot for automated hotel price tracking with instant alerts when prices drop for smart bookings.
              </p>
              <div className="flex gap-2 flex-wrap mb-3">
                <span className="px-2 py-1 bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300 rounded-full text-xs">Bot</span>
                <span className="px-2 py-1 bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300 rounded-full text-xs">Travel</span>
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                <strong>Try:</strong> <a href="https://t.me/hoteldropbot" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">@hoteldropbot</a>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">PlexusAI</h3>
                <span className="text-xs text-indigo-600 dark:text-indigo-400">May 2025</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 leading-relaxed">
                Healthcare innovation accelerator with ₹1Cr+ portfolio valuation across 3+ MedTech, AI, and FinTech startups.
              </p>
              <div className="flex gap-2 flex-wrap mb-3">
                <span className="px-2 py-1 bg-indigo-100 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-300 rounded-full text-xs">Healthcare</span>
                <span className="px-2 py-1 bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300 rounded-full text-xs">Accelerator</span>
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                <strong>Visit:</strong> <a href="https://plexusai.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">plexusai.in</a>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">
                Strategic Implementation
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm">
                Full Potential Service Strategy implementation across global regions with proven KPI achievements.
              </p>
              <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                Applied at: ABB India (with Bain & Company), MTAP, Cidaas
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">
                Business Development
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm">
                Strategic partnerships, market expansion, and revenue growth across B2B enterprise environments.
              </p>
              <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                Applied at: electrific.net, ABB India, Ecophon Saint Gobain
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">
                Team Leadership
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm">
                Leading cross-functional teams of 15+ members across development, QA, and design with proven results.
              </p>
              <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                Applied at: MTAP (15+ members), ABB India (1000+ training), Cidaas
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">
                Product Marketing
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm">
                Strategic product positioning, messaging, and go-to-market strategies for enterprise platforms.
              </p>
              <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                Applied at: Cidaas, MTAP (Safetrax), Schneider Electric
              </div>
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
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Freelance Consultant</h3>
                  <p className="text-blue-600 dark:text-blue-400">
                    <a href="https://electrific.net/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      electrific.net
                    </a>, Saudi Arabia
                  </p>
                </div>
                <p className="text-gray-600 dark:text-gray-400">October 2023 - April 2024</p>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 text-sm">
                Electrical solutions provider for mega-infrastructure projects including NEOM's flagship futuristic city project.
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Enabled partnerships with NEOM The Line - Saudi Arabia's flagship futuristic city project</li>
                <li>Delivered significant customer acquisition growth through strategic campaigns</li>
                <li>Positioned company as key electrical solutions partner for smart city developments</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Full Time Consultant</h3>
                  <p className="text-blue-600 dark:text-blue-400">
                    <a href="https://www.cidaas.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      Cidaas
                    </a>
                  </p>
                </div>
                <p className="text-gray-600 dark:text-gray-400">July 2021 - March 2023</p>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 text-sm">
                Leading European Identity & Access Management (IAM) platform serving enterprise clients globally.
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Launched Cidaas Partner Portal with compelling value propositions and onboarding materials</li>
                <li>Increased customer satisfaction score by 35% through strategic product messaging</li>
                <li>Created comprehensive Partner Catalogue positioning Cidaas as platform leader</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Freelance Sales Advisor</h3>
                  <p className="text-blue-600 dark:text-blue-400">
                    <a href="https://www.safetrax.in/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      MTAP Technologies
                    </a>
                  </p>
                </div>
                <p className="text-gray-600 dark:text-gray-400">April 2019 - June 2021</p>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 text-sm">
                All-in-One Employee Transport Automation Software (Safetrax) - cloud-based ETS system serving 100K+ daily users.
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Led cross-functional team of 15+ members across development, QA, and UI/UX design</li>
                <li>Achieved significant reduction in customer churn through strategic communication improvements</li>
                <li>Created multi-channel notification systems for enterprise-scale user engagement</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Marketing Consultant</h3>
                  <p className="text-blue-600 dark:text-blue-400">
                    <a href="https://shaktihormann.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      Shakti Hormann Door Manufacturer
                    </a>
                  </p>
                </div>
                <p className="text-gray-600 dark:text-gray-400">February 2016 - April 2016</p>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 text-sm">
                Pioneer in high-performance doors since 1935, No.1 Door brand in Europe serving diverse markets including residential, commercial, and industrial sectors.
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Developed marketing strategies and brand positioning for premium door manufacturing solutions</li>
                <li>Created promotional campaigns targeting residential and commercial segments</li>
                <li>Established dealer networks and channel partnerships for market expansion</li>
                <li>Conducted market research and competitive analysis for product positioning</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Prescription Manager</h3>
                  <p className="text-blue-600 dark:text-blue-400">
                    <a href="https://www.se.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      Schneider Electric
                    </a>
                  </p>
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
                  <p className="text-blue-600 dark:text-blue-400">
                    <a href="https://www.ecophon.com/in/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      Ecophon Saint Gobain
                    </a>
                  </p>
                </div>
                <p className="text-gray-600 dark:text-gray-400">July 2014 - September 2015</p>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 text-sm">
                Acoustic solutions specialist developing acoustic panels, baffles and ceiling systems for enhanced workplace wellbeing and performance.
              </p>
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
                  <p className="text-blue-600 dark:text-blue-400">
                    <a href="https://global.abb/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      ABB India Limited
                    </a>
                  </p>
                </div>
                <p className="text-gray-600 dark:text-gray-400">March 2012 - June 2014</p>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 text-sm">
                Full Potential Service Strategy with Bain & Company across India/Middle East/Africa regions.
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Achieved 4th rank among 100 ABB countries in targeted KPIs and service initiatives</li>
                <li>Led implementation across 26 business units coordinating with global teams</li>
                <li>Provided training to 1000+ employees including Engineers, PMs, and VPs</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Marketing Engineer</h3>
                  <p className="text-blue-600 dark:text-blue-400">
                    <a href="https://global.abb/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      ABB Drives
                    </a>
                  </p>
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
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Assistant Engineer</h3>
                  <p className="text-blue-600 dark:text-blue-400">
                    <a href="https://www.ndmc.gov.in/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      New Delhi Municipal Council
                    </a>
                  </p>
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
                  <p className="text-blue-600 dark:text-blue-400">
                    <a href="https://www.abrpolytechnic.edu.in/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      Dr. B.R. Ambedkar Polytechnic College
                    </a>
                  </p>
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

      {/* Hobbies Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 via-green-50 to-purple-50 dark:from-blue-900/20 dark:via-green-900/20 dark:to-purple-900/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 via-green-600 to-purple-600 text-transparent bg-clip-text">
            Personal Interests & Hobbies
          </h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
              <div className="text-center space-y-6">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">
                  Technology
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Passionate about exploring emerging technologies, staying updated with the latest tech trends,
                  and understanding how digital innovations can transform business processes and user experiences.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                    Tech Innovation
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-cyan-100 to-cyan-200 dark:from-cyan-900 dark:to-cyan-800 text-cyan-700 dark:text-cyan-300 rounded-full text-sm font-medium">
                    Digital Trends
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-indigo-100 to-indigo-200 dark:from-indigo-900 dark:to-indigo-800 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium">
                    Future Tech
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
              <div className="text-center space-y-6">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-800 text-transparent bg-clip-text">
                  Fitness
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Committed to maintaining physical and mental well-being through regular exercise,
                  exploring various fitness routines, and promoting a healthy work-life balance.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <span className="px-4 py-2 bg-gradient-to-r from-green-100 to-green-200 dark:from-green-900 dark:to-green-800 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
                    Health & Wellness
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-emerald-100 to-emerald-200 dark:from-emerald-900 dark:to-emerald-800 text-emerald-700 dark:text-emerald-300 rounded-full text-sm font-medium">
                    Active Lifestyle
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-teal-100 to-teal-200 dark:from-teal-900 dark:to-teal-800 text-teal-700 dark:text-teal-300 rounded-full text-sm font-medium">
                    Work-Life Balance
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 dark:text-gray-300 italic max-w-2xl mx-auto">
              "Combining my passion for technology with a commitment to fitness helps me stay innovative,
              energized, and ready to tackle new challenges in both personal and professional spheres."
            </p>
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
