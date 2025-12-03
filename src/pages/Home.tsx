import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Download, Github, ExternalLink, Cpu, Mountain, BookOpen, Heart, Trophy, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const useIntersectionObserver = (options = {}) => {
  const elementsRef = useRef<Array<HTMLElement | null>>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, ...options });

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [options]);

  const addRef = (el: HTMLElement | null) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  return addRef;
};

interface Project {
  title: string;
  description: string;
  role?: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  learnMoreUrl?: string;
  imageUrl: string;
}

const projects: Project[] = [
  {
    title: "Nissan Wiring Harness Automation",
    description: "Collaborated with a multidisciplinary team of engineers and business students to automate the construction of wiring harnesses using a UR10e robot. Programmed microcontrollers for precise motor control and integrated 3D printed components into the automated workflow. Managed stakeholder communication through regular sponsor meetings, technical presentations, and comprehensive progress reports.",
    tags: ["Robotics", "Microcontrollers", "Automation", "Cross-functional Collaboration", "Systems Integration"],
    imageUrl: "/images/nissan_logo.png",
    learnMoreUrl: "https://design.utk.edu/about/"
  },
  {
    title: "Inkstruct",
    description: "Developed a machine learning pipeline that processes uploaded images through edge detection analysis and decomposes them into individual drawing strokes. Explored deep learning models including DexiNed for edge detection and SAM (Segment Anything Model) for object detection. Applied graph theory algorithms to generate human-like sequential drawing guides for drawing assistance.",
    tags: ["Python", "Computer Vision", "Machine Learning", "Graph Theory", "DexiNed", "SAM"],
    githubUrl: "https://github.com/MattJacobs30/Inkstruct",
    imageUrl: "/images/inkstruct_logo.png"
  },
  {
    title: "Suika Game RL Agent",
    description: "Developed a novel Reinforcement Learning agent using Deep Q-Networks (DQN) with a custom feature-vector state representation to surpass human-level performance. Engineered a stable Gym environment and implemented custom reward structures that significantly outperformed standard score-based approaches through extensive hyperparameter tuning.",
    tags: ["Python", "Reinforcement Learning", "DQN", "Game AI", "Gymnasium"],
    githubUrl: "https://github.com/MattJacobs30/SuikaReinforcement",
    imageUrl: "/images/suika_logo.png"
  },
  {
    title: "Aro Project UI/UX Redesign",
    description: "Collaborated with a multidisciplinary team to redesign the complete user interface for Aro, a digital wellness startup dedicated to helping families reclaim time from their devices. Applied design thinking methodologies and conducted in-depth customer empathy interviews to identify friction points in the user journey. Synthesized research into actionable insights to prototype new product features that seamlessly integrate the physical Aro Box with the app experience.",
    tags: ["UI/UX Design", "Product Strategy", "User Research", "Prototyping"],
    imageUrl: "/images/aro_logo.png",
    learnMoreUrl: "https://reclaimwell.com/#how-it-works"
  },
  {
    title: "Compassion Ministries Inventory System",
    description: "Architected a full-stack inventory management system for a non-profit organization to streamline food distribution operations for low-income communities. Collaborated within an Agile Scrum team to engineer robust frontend interfaces and backend services, significantly improving resource tracking and distribution efficiency.",
    tags: ["Full Stack Development", "React", "Node.js", "Agile/Scrum"],
    githubUrl: "https://github.com/hack4impact-utk/compassion-ministries",
    imageUrl: "/images/compassion_ministries_logo.png"
  },
  {
    title: "UTK ALPR Parking Project",
    description: "Applied Lean Six Sigma and Systems Thinking methodologies to address campus parking inefficiencies. Conducted comprehensive stakeholder analysis and vendor negotiations to evaluate cost-benefit ratios, ultimately designing a digital ALPR integration plan tailored to university requirements.",
    tags: ["Lean Six Sigma", "Systems Thinking", "ALPR", "Stakeholder Analysis", "Vendor Management"],
    imageUrl: "/images/alpr_logo.png",
    learnMoreUrl: "https://eecs.utk.edu/heath-ibep-students-help-campus-parking-problems/"
  }
];

const interests = [
  {
    title: "Academic Focus",
    description: "I'm a senior Computer Engineering student at UTK with a passion for giving machines the ability to see and understand the world. I am interested in robotics, LIDAR, and computer vision.",
    image: "/images/matthew.jpg",
    icon: <Cpu size={24} />
  },
  {
    title: "Active Lifestyle",
    description: "I love to stay active. Whether it's hiking in the Smokies, hitting the gym, or playing any sport I can get into. A major life goal of mine is to complete a full triathlon.",
    image: "/images/hiking.png",
    icon: <Mountain size={24} />
  },
  {
    title: "Hobbies",
    description: "You can usually find me cheering on the Dodgers, playing the piano, or training for my next race. I've completed several 5Ks and a half marathon, with a full marathon on the horizon.",
    image: "/images/dodgers.png",
    icon: <BookOpen size={24} />
  },
  {
    title: "Interests",
    description: "I have a huge soft spot for Pokémon, The Peanuts, and absolutely any epic story by Brandon Sanderson.",
    image: "/images/favorites.png",
    icon: <Heart size={24} />
  },
  {
    title: "My Values",
    description: "I see myself as a hard worker, naturally curious, and willing to serve others. I believe in using my skills to help those around me succeed.",
    image: "/images/torchbearer.png",
    icon: <Trophy size={24} />
  }
];

const Home: React.FC = () => {
  const addRef = useIntersectionObserver();
  const [currentInterestIndex, setCurrentInterestIndex] = useState(0);

  const nextInterest = () => {
    setCurrentInterestIndex((prev) => (prev + 1) % interests.length);
  };

  const prevInterest = () => {
    setCurrentInterestIndex((prev) => (prev - 1 + interests.length) % interests.length);
  };

  return (
    <div className="space-y-12 pb-8">
      {/* Hero Section */}
      <section ref={addRef} className="min-h-[calc(100vh-5rem)] flex flex-col md:flex-row justify-center items-center gap-12 opacity-0 translate-y-8 transition-all duration-700 ease-out -mt-8 px-4">
        <div className="w-64 h-64 md:w-96 md:h-96 flex-shrink-0 relative">
          <img 
            src="/images/waving.png" 
            alt="Matthew Waving" 
            className="w-full h-full object-contain" 
          />
        </div>
        <div className="text-center md:text-left space-y-8 max-w-2xl">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold text-stone-900 tracking-tight">
              Hi, I'm <span className="text-amber-600">Matthew Jacobs</span>.
            </h1>
            <p className="text-xl md:text-2xl text-stone-600 font-light leading-relaxed">
              Thank you for taking the time to visit my website.
            </p>
            <p className="text-lg text-stone-500">
              Here's a glimpse into who I am and what I love to do.
            </p>
          </div>
          <div className="flex justify-center md:justify-start gap-4">
            <a href="#about" className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-amber-600 hover:bg-amber-700 transition-all hover:scale-105 shadow-lg hover:shadow-amber-200">
              About Me
              <ArrowRight className="ml-2" size={20} />
            </a>
            <a 
              href="/resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 border border-stone-200 text-lg font-medium rounded-full text-stone-700 bg-[#FFFBF7] hover:bg-[#FDF8F5] transition-all hover:scale-105 shadow-sm hover:shadow-md"
            >
              Resume
              <Download className="ml-2" size={20} />
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto space-y-12">
        {/* About Me Section - Carousel */}
        <section id="about" className="space-y-8 scroll-mt-24">
          <h2 ref={addRef} className="text-2xl font-bold text-stone-900 flex items-center gap-2 opacity-0 translate-y-8 transition-all duration-700 ease-out">
            About Me
          </h2>
          <div ref={addRef} className="opacity-0 translate-y-8 transition-all duration-700 ease-out">
            <div className="relative bg-[#FFFBF7] rounded-2xl overflow-hidden shadow-lg border border-stone-200">
              <div className="flex flex-col md:flex-row">
                {/* Image Section */}
                <div className="md:w-1/2 h-64 md:h-96 relative bg-stone-100 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 w-full h-full">
                    {/* Background blurred version for fill */}
                    <img 
                      src={interests[currentInterestIndex].image} 
                      alt=""
                      className="w-full h-full object-cover blur-md opacity-50 scale-110"
                    />
                  </div>
                  <img 
                    src={interests[currentInterestIndex].image} 
                    alt={interests[currentInterestIndex].title}
                    className="relative w-full h-full object-contain p-4 z-10"
                  />
                </div>

                {/* Content Section */}
                <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center relative">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 text-amber-600">
                      {interests[currentInterestIndex].icon}
                      <h3 className="text-2xl font-bold text-stone-900">
                        {interests[currentInterestIndex].title}
                      </h3>
                    </div>
                    
                    <p className="text-lg text-stone-600 leading-relaxed min-h-[100px]">
                      {interests[currentInterestIndex].description}
                    </p>

                    <div className="flex items-center gap-4 pt-4">
                      <button 
                        onClick={prevInterest}
                        className="p-2 rounded-full border border-stone-200 text-stone-600 hover:bg-stone-50 hover:text-amber-600 transition-colors"
                        aria-label="Previous interest"
                      >
                        <ChevronLeft size={24} />
                      </button>
                      <div className="flex gap-2">
                        {interests.map((_, idx) => (
                          <div 
                            key={idx}
                            className={`w-2 h-2 rounded-full transition-colors ${
                              idx === currentInterestIndex ? 'bg-amber-600' : 'bg-stone-300'
                            }`}
                          />
                        ))}
                      </div>
                      <button 
                        onClick={nextInterest}
                        className="p-2 rounded-full border border-stone-200 text-stone-600 hover:bg-stone-50 hover:text-amber-600 transition-colors"
                        aria-label="Next interest"
                      >
                        <ChevronRight size={24} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section - Restructured */}
        <section id="education" className="space-y-8 scroll-mt-24">
          <h2 ref={addRef} className="text-2xl font-bold text-stone-900 flex items-center gap-2 opacity-0 translate-y-8 transition-all duration-700 ease-out">
            Education
          </h2>
          
          <div ref={addRef} className="group relative bg-[#FFFBF7] p-6 rounded-xl border border-stone-200 shadow-sm hover:shadow-md transition-all duration-700 ease-out opacity-0 translate-y-8">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-24 h-24 bg-[#FFFBF7] rounded-xl p-2 border border-stone-100 flex items-center justify-center overflow-hidden shadow-sm flex-shrink-0">
                <img src="/images/utk_logo.png" alt="University of Tennessee" className="w-full h-full object-contain" />
              </div>
              
              <div className="flex-1 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-stone-900">University of Tennessee</h3>
                  <div className="text-stone-500 text-lg">Knoxville, TN</div>
                </div>

                <div className="space-y-4">
                  <div className="bg-[#FDF8F5] p-4 rounded-lg border border-stone-100">
                    <div className="font-bold text-lg text-stone-900">B.S. Computer Engineering</div>
                    <div className="text-amber-600 font-medium">Minor in Integrated Business and Engineering</div>
                    <div className="text-stone-500 mt-1 font-medium">Expected May 2026 • GPA: 3.92 / 4.00</div>
                  </div>

                  <div className="pl-2 border-l-2 border-amber-100 space-y-2">
                    <div className="text-sm font-semibold text-stone-400 uppercase tracking-wider pl-2">Programs & Honors</div>
                    <ul className="space-y-2 pl-2">
                      <li className="text-stone-700 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                        Heath Integrated Business and Engineering Program
                      </li>
                      <li className="text-stone-700 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                        Cook Grand Challenge Honors
                      </li>
                      <li className="text-stone-700 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                        Chancellor's Honors Program
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="space-y-8 scroll-mt-24">
          <h2 ref={addRef} className="text-2xl font-bold text-stone-900 flex items-center gap-2 opacity-0 translate-y-8 transition-all duration-700 ease-out">
            Experience
          </h2>
          
          <div className="space-y-8">
            <div ref={addRef} className="group relative bg-[#FFFBF7] p-6 rounded-xl border border-stone-200 shadow-sm hover:shadow-md transition-all duration-700 ease-out opacity-0 translate-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-20 h-20 flex-shrink-0 bg-[#FFFBF7] rounded-lg p-1 border border-stone-100 flex items-center justify-center overflow-hidden">
                   <img src="/images/sentinel_logo.png" alt="Sentinel Devices" className="w-full h-full object-contain" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-stone-900">Software Engineer / Application Engineer</h3>
                  <div className="text-amber-600 font-medium mb-2">Sentinel Devices • Feb 2024 - Present</div>
                  <ul className="list-disc list-outside ml-4 space-y-2 text-stone-600">
                    <li>Built complete frontend platform from scratch using React and TypeScript for an IoT-based PLC anomaly detection system.</li>
                    <li>Architected and developed machine learning models for real-time anomaly detection on embedded devices.</li>
                    <li>Engineered robust backend infrastructure including REST APIs, Docker/Balena containerization, and nginx configuration.</li>
                    <li>Developed custom Modbus protocol simulator for client presentations.</li>
                    <li>Conducted extensive data analysis on industrial PLC datasets to optimize ML model training.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div ref={addRef} className="group relative bg-[#FFFBF7] p-6 rounded-xl border border-stone-200 shadow-sm hover:shadow-md transition-all duration-700 ease-out opacity-0 translate-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-20 h-20 flex-shrink-0 bg-[#FFFBF7] rounded-lg p-1 border border-stone-100 flex items-center justify-center overflow-hidden">
                  <img src="/images/epic_lab_logo.png" alt="EPIC Lab" className="w-full h-full object-contain" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-stone-900">Undergraduate Researcher</h3>
                  <div className="text-amber-600 font-medium mb-2">EPIC Lab UTK • Sep 2023 - Feb 2024</div>
                  <ul className="list-disc list-outside ml-4 space-y-2 text-stone-600">
                    <li>Developed microcontroller-based sensing systems using Arduino IDE to control impedance measurement components for advanced materials characterization and self-sensing asphalt research.</li>
                    <li>Implemented machine learning algorithms on analog sensor datasets and created comprehensive data visualizations of electrical current flow patterns through cement-based materials.</li>
                    <li>Designed and fabricated complete electronic circuits through precision soldering techniques, ensuring reliable signal transmission and data acquisition across interconnected sensor networks.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div ref={addRef} className="group relative bg-[#FFFBF7] p-6 rounded-xl border border-stone-200 shadow-sm hover:shadow-md transition-all duration-700 ease-out opacity-0 translate-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-20 h-20 flex-shrink-0 bg-[#FFFBF7] rounded-lg p-1 border border-stone-100 flex items-center justify-center overflow-hidden">
                  <img src="/images/oak_ridge_logo.png" alt="ORNL" className="w-full h-full object-contain" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-stone-900">Power Systems Engineering Intern</h3>
                  <div className="text-amber-600 font-medium mb-2">Oak Ridge National Laboratory • May 2023 - Jul 2023</div>
                  <ul className="list-disc list-outside ml-4 space-y-2 text-stone-600">
                    <li>Systematically analyzed and documented over 600 critical electrical components across nuclear facilities, establishing comprehensive asset management protocols and ensuring regulatory compliance.</li>
                    <li>Leveraged ETAP and AutoCAD software to model and categorize complex electrical systems in three major national nuclear facilities, and delivered technical presentations showcasing power systems analysis findings.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div ref={addRef} className="group relative bg-[#FFFBF7] p-6 rounded-xl border border-stone-200 shadow-sm hover:shadow-md transition-all duration-700 ease-out opacity-0 translate-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-20 h-20 flex-shrink-0 bg-[#FFFBF7] rounded-lg p-1 border border-stone-100 flex items-center justify-center overflow-hidden">
                  <img src="/images/subway.png" alt="Subway" className="w-full h-full object-contain" />
                </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-stone-900">Sandwich Artist</h3>
                    <div className="text-amber-600 font-medium mb-2">Subway • May 2022 - Aug 2022</div>
                    <ul className="list-disc list-outside ml-4 space-y-2 text-stone-600">
                      <li>Optimized daily food preparation workflows to serve over 150 customers daily, maintaining high standards of quality and efficiency in a fast-paced environment.</li>
                      <li>Processed financial transactions with precision while delivering exceptional customer service to ensure repeat business and operational excellence.</li>
                    </ul>
                  </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section - Moved to Home */}
        <section id="projects" className="space-y-8 scroll-mt-24">
          <div ref={addRef} className="space-y-2 opacity-0 translate-y-8 transition-all duration-700 ease-out">
            <h2 className="text-2xl font-bold text-stone-900">Projects</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <article key={index} ref={addRef} className="bg-[#FFFBF7] rounded-xl shadow-sm border border-stone-200 overflow-hidden hover:shadow-md transition-all duration-700 ease-out flex flex-col group opacity-0 translate-y-8">
                <div className="aspect-video w-full overflow-hidden relative bg-stone-50">
                  <div 
                    className="absolute inset-0 bg-cover bg-center blur-xl opacity-50 scale-110 transition-transform duration-500 group-hover:scale-125"
                    style={{ backgroundImage: `url(${project.imageUrl})` }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title}
                      className="w-full h-full object-contain drop-shadow-sm transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
                <div className="p-6 space-y-4 flex-1 flex flex-col relative bg-[#FFFBF7]">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold text-stone-900">{project.title}</h3>
                  </div>
                  
                  <p className="text-stone-600 text-sm">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 pt-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-amber-50 text-amber-700 text-xs font-medium rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {(project.githubUrl || project.demoUrl || project.learnMoreUrl) && (
                    <div className="flex gap-4 pt-4 mt-auto border-t border-stone-100">
                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center gap-2 text-sm font-medium text-stone-600 hover:text-amber-600 transition-colors"
                        >
                          <Github size={18} />
                          View Code
                        </a>
                      )}
                      {project.demoUrl && (
                        <a 
                          href={project.demoUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center gap-2 text-sm font-medium text-stone-600 hover:text-amber-600 transition-colors"
                        >
                          <ExternalLink size={18} />
                          Live Demo
                        </a>
                      )}
                      {project.learnMoreUrl && (
                        <a 
                          href={project.learnMoreUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center gap-2 text-sm font-medium text-stone-600 hover:text-amber-600 transition-colors"
                        >
                          <ExternalLink size={18} />
                          Learn More
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Clubs & Leadership Section */}
        <section id="leadership" className="space-y-8 scroll-mt-24">
          <h2 ref={addRef} className="text-2xl font-bold text-stone-900 flex items-center gap-2 opacity-0 translate-y-8 transition-all duration-700 ease-out">
            Clubs & Leadership
          </h2>
          
          <div className="space-y-8">
            <div ref={addRef} className="group relative bg-[#FFFBF7] p-6 rounded-xl border border-stone-200 shadow-sm hover:shadow-md transition-all duration-700 ease-out opacity-0 translate-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-20 h-20 flex-shrink-0 bg-[#FFFBF7] rounded-lg p-1 border border-stone-100 flex items-center justify-center overflow-hidden">
                  <img src="/images/aaiv_logo.png" alt="AAIV" className="w-full h-full object-contain" />
                </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-stone-900">Asian American Intervarsity</h3>
                    <div className="text-amber-600 font-medium mb-2">Vice President • Aug 2023 - Present</div>
                    <ul className="list-disc list-outside ml-4 space-y-2 text-stone-600">
                      <li>Directed bi-weekly large-scale community events and Bible studies for student members, managing all logistical aspects from content creation to venue coordination.</li>
                      <li>Engineered a robust transportation coordination system to facilitate weekly off-campus travel for student members, optimizing driver schedules and route planning.</li>
                      <li>Mentored emerging student leaders through a structured servant leadership framework, fostering long-term community growth and development.</li>
                    </ul>
                  </div>
              </div>
            </div>

            <div ref={addRef} className="group relative bg-[#FFFBF7] p-6 rounded-xl border border-stone-200 shadow-sm hover:shadow-md transition-all duration-700 ease-out opacity-0 translate-y-8">
               <div className="flex gap-6 items-start">
                <div className="w-20 h-20 flex-shrink-0 bg-[#FFFBF7] rounded-lg p-1 border border-stone-100 flex items-center justify-center overflow-hidden">
                  <img src="/images/h4i_logo.png" alt="Hack4Impact" className="w-full h-full object-contain" />
                </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-stone-900">Hack4Impact Developer</h3>
                    <div className="text-amber-600 font-medium mb-2">Developer • Aug 2023 - May 2025</div>
                    <ul className="list-disc list-outside ml-4 space-y-2 text-stone-600">
                      <li>Developed full-stack web applications for non-profit organizations using React and Node.js, delivering production-ready solutions that solved critical business needs.</li>
                      <li>Operated within an Agile development environment, utilizing Scrum methodologies to ensure rapid iteration and continuous delivery of software features.</li>
                    </ul>
                  </div>
              </div>
            </div>

            <div ref={addRef} className="group relative bg-[#FFFBF7] p-6 rounded-xl border border-stone-200 shadow-sm hover:shadow-md transition-all duration-700 ease-out opacity-0 translate-y-8">
               <div className="flex gap-6 items-start">
                <div className="w-20 h-20 flex-shrink-0 bg-[#FFFBF7] rounded-lg p-1 border border-stone-100 flex items-center justify-center overflow-hidden">
                  <img src="/images/makers_club_logo.png" alt="Maker's Club" className="w-full h-full object-contain" />
                </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-stone-900">Maker’s Club</h3>
                    <div className="text-amber-600 font-medium mb-2">Treasurer • Aug 2023 - May 2024</div>
                    <ul className="list-disc list-outside ml-4 space-y-2 text-stone-600">
                      <li>Managed club finances and strategically allocated funds to support diverse student engineering projects and technical workshops.</li>
                      <li>Architected project development timelines and successfully secured external funding grants to expand club capabilities and member resources.</li>
                    </ul>
                  </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
