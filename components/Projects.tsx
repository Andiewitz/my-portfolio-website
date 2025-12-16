import React from 'react';
import { ArrowUpRight, Globe, Terminal } from 'lucide-react';

// Types for Project Data
interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
  year: string;
}

const webProjects: Project[] = [
  {
    id: 'w1',
    title: 'Drift Theory',
    description: 'An immersive travel platform featuring cinematic visuals and fluid scroll interactions. Optimized for high engagement to inspire modern exploration.',
    tech: ['React', 'Framer Motion', 'Tailwind'],
    year: '2024',
    link: 'https://drift-theory.vercel.app/',
    github: '#'
  },
  {
    id: 'w2',
    title: 'Bloom and Co.',
    description: 'A boutique digital presence for a floral business. Focuses on aesthetic minimalism, visual storytelling, and accessible navigation structures.',
    tech: ['Next.js', 'React', 'Design Systems'],
    year: '2024',
    link: 'https://stitch-to-spark.vercel.app/',
    github: '#'
  },
  {
    id: 'w3',
    title: 'Luxury Construct Utah',
    description: 'High-end architectural portfolio for residential construction. Implements advanced image optimization and gallery interactions to showcase craftsmanship.',
    tech: ['React', 'Typescript', 'Responsive'],
    year: '2024',
    link: 'https://luxury-construct-utah.vercel.app/',
    github: '#'
  },
  {
    id: 'w4',
    title: 'Strategic Consulting',
    description: 'Corporate identity platform designed to build authority. Features clean information architecture and optimized lead generation flows.',
    tech: ['React', 'Tailwind', 'UX Design'],
    year: '2024',
    link: 'https://business-consultant-6z2m.vercel.app/',
    github: '#'
  }
];

const softwareProjects: Project[] = [
  {
    id: 's1',
    title: 'Log Parser CLI',
    description: 'A high-performance command line tool written in Rust to parse and aggregate gigabytes of server logs in seconds. Outputs JSON reports for ingestion into ELK stack.',
    tech: ['Rust', 'Clap', 'Serde'],
    year: '2024',
    github: '#'
  },
  {
    id: 's2',
    title: 'Image Processing Pipeline',
    description: 'Automated Python pipeline for resizing, compressing, and watermarking image assets triggered by S3 uploads. Deployed as AWS Lambda functions.',
    tech: ['Python', 'AWS Lambda', 'Pillow'],
    year: '2023',
    github: '#'
  }
];

const ProjectCard: React.FC<{ project: Project; type: 'web' | 'software' }> = ({ project, type }) => {
  return (
    <div className="group border border-white/10 bg-sanity-black hover:border-sanity-orange/50 transition-all duration-300 p-6 flex flex-col h-full relative overflow-hidden">
      
      {/* Hover Background Effect */}
      <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-6">
          <div className="p-3 bg-white/5 rounded-full border border-white/10 group-hover:border-white/30 transition-colors">
            {type === 'web' ? <Globe size={20} className="text-gray-300" /> : <Terminal size={20} className="text-gray-300" />}
          </div>
          <span className="font-mono text-xs text-gray-500">{project.year}</span>
        </div>

        <h3 className="text-xl font-bold mb-3 group-hover:text-sanity-orange transition-colors">{project.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>

        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map(t => (
              <span key={t} className="text-[10px] uppercase font-mono px-2 py-1 bg-white/5 text-gray-400 border border-white/5 rounded">
                {t}
              </span>
            ))}
          </div>

          {project.link && (
            <div className="flex items-center gap-4 pt-4 border-t border-white/10">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider hover:text-sanity-orange transition-colors">
                Visit <ArrowUpRight size={14} />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="bg-sanity-black text-white border-t border-white/10 py-24 md:py-32 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-20">
          <h2 className="text-sanity-orange font-mono text-xs md:text-sm uppercase tracking-[0.2em] mb-4 font-bold">
            Selected Work
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tighter-custom">
            Engineering & <br className="hidden md:block" /> Design.
          </h3>
        </div>

        {/* Web Projects Section */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-8">
             <div className="h-px bg-white/20 w-12"></div>
             <h4 className="text-xl font-bold tracking-tight">Web Platforms</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {webProjects.map(p => (
              <ProjectCard key={p.id} project={p} type="web" />
            ))}
          </div>
        </div>

        {/* Software Projects Section */}
        <div>
           <div className="flex items-center gap-4 mb-8">
             <div className="h-px bg-white/20 w-12"></div>
             <h4 className="text-xl font-bold tracking-tight">Software Engineering</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softwareProjects.map(p => (
              <ProjectCard key={p.id} project={p} type="software" />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};