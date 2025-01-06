import { motion } from 'framer-motion';
import ContactSection from '../components/sections/ContactSection';

const services = [
  {
    title: 'Interior Painting',
    description: 'Transform your indoor spaces with our expert interior painting services.',
    features: [
      'Wall and ceiling painting',
      'Trim and molding finishing',
      'Cabinet painting and refinishing',
      'Color consultation',
      'Texture and faux finishes',
    ],
  },
  {
    title: 'Exterior Painting',
    description: 'Protect and beautify your property with our comprehensive exterior painting.',
    features: [
      'House painting',
      'Deck and fence staining',
      'Pressure washing',
      'Weather-resistant coatings',
      'Siding repair and painting',
    ],
  },
  {
    title: 'Commercial Painting',
    description: 'Professional painting solutions for businesses and commercial properties.',
    features: [
      'Office spaces',
      'Retail stores',
      'Restaurants',
      'Industrial facilities',
      'After-hours service',
    ],
  },
  {
    title: 'Specialty Finishes',
    description: 'Unique and custom finishes to make your space truly special.',
    features: [
      'Venetian plaster',
      'Metallic finishes',
      'Decorative painting',
      'Murals',
      'Epoxy coatings',
    ],
  },
];

const process = [
  {
    title: 'Initial Consultation',
    description: 'We meet to discuss your vision, requirements, and provide a free quote.',
  },
  {
    title: 'Color Selection',
    description: 'Our experts help you choose the perfect colors for your space.',
  },
  {
    title: 'Surface Preparation',
    description: 'Thorough cleaning, repairs, and priming to ensure the best results.',
  },
  {
    title: 'Professional Painting',
    description: 'Skilled application of premium paints using industry-best techniques.',
  },
  {
    title: 'Quality Check',
    description: 'Detailed inspection to ensure everything meets our high standards.',
  },
  {
    title: 'Final Walkthrough',
    description: 'Review the completed work together to ensure your complete satisfaction.',
  },
];

export default function Services() {
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
              Professional Painting Services
            </h1>
            <p className="text-xl text-gray-300">
              From residential to commercial, interior to exterior, we offer a comprehensive 
              range of painting services tailored to your needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="heading-2 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600">
              Discover our range of professional painting services designed to 
              meet all your residential and commercial needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg overflow-hidden"
              >
                <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                  {/* Service image placeholder */}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-700">
                        <svg
                          className="w-5 h-5 text-primary-600 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="heading-2 mb-4">Our Process</h2>
            <p className="text-lg text-gray-600">
              We follow a systematic approach to ensure the highest quality results 
              for every project.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-4 text-xl font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
} 