import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ContactSection from '../components/sections/ContactSection';

// This would be replaced with actual project data
const projects = [
  {
    id: 1,
    title: 'Modern Living Room',
    category: 'Interior',
    description: 'Complete interior transformation with a modern color palette.',
  },
  {
    id: 2,
    title: 'Victorian Home Exterior',
    category: 'Exterior',
    description: 'Historic home exterior restoration and painting.',
  },
  {
    id: 3,
    title: 'Corporate Office',
    category: 'Commercial',
    description: 'Professional office space painting project.',
  },
  {
    id: 4,
    title: 'Kitchen Cabinets',
    category: 'Interior',
    description: 'Cabinet refinishing and painting.',
  },
  {
    id: 5,
    title: 'Retail Store',
    category: 'Commercial',
    description: 'Complete retail space renovation.',
  },
  {
    id: 6,
    title: 'Coastal Home',
    category: 'Exterior',
    description: 'Weather-resistant exterior painting for beachfront property.',
  },
  {
    id: 7,
    title: 'Master Bedroom',
    category: 'Interior',
    description: 'Luxury bedroom transformation.',
  },
  {
    id: 8,
    title: 'Restaurant Interior',
    category: 'Commercial',
    description: 'Full restaurant interior painting and finishing.',
  },
  {
    id: 9,
    title: 'Contemporary Home',
    category: 'Exterior',
    description: 'Modern home exterior painting project.',
  },
];

const categories = ['All', 'Interior', 'Exterior', 'Commercial'];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projects.filter(
    (project) => selectedCategory === 'All' || project.category === selectedCategory
  );

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-24 sm:py-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="heading-1 mb-6">
              Our Project Gallery
            </h1>
            <p className="text-xl text-gray-300">
              Explore our portfolio of successful projects and see the quality of our work firsthand.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-white">
        <div className="container">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-colors duration-200 ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative aspect-w-4 aspect-h-3 bg-gray-200 rounded-lg overflow-hidden">
                  {/* Project image placeholder */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300" />
                  <div className="absolute inset-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm">{project.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-lg overflow-hidden max-w-4xl w-full"
            >
              <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                {/* Project image placeholder */}
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
                <p className="text-gray-600 mb-4">{selectedProject.description}</p>
                <div className="flex justify-between items-center">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
                    {selectedProject.category}
                  </span>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
} 