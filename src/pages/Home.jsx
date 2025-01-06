import { motion } from 'framer-motion';
import ContactSection from '../components/sections/ContactSection';
import { Link } from 'react-router-dom';

const features = [
  {
    title: 'QBCC Licensed and Insured',
    description: 'We operate with an up-to-date Queensland building construction and commission license, coupled with comprehensive insurance coverage.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Clean up',
    description: 'We take pride in our cleanup process. Beyond meticulously covering floors and appliances, we diligently vacuum up any residue from the painting process, leaving your space immaculate and ready to enjoy.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 3h6v6" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 21H3v-6" />
      </svg>
    ),
  },
  {
    title: 'After Hours Service',
    description: 'We understand that not all spaces can be transformed during normal business hours. Our after-hours service ensures that whether it is a bustling office or a busy retail space, we accommodate your unique scheduling needs for exceptional results.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Fast Quotes',
    description: 'From inspection to your inbox, expect a detailed quote within 24 hours, ensuring swift and efficient service tailored to your needs.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Exceptional Coverage and Prep',
    description: 'Longevity is our priority. Through meticulous sanding, priming, and multiple coats, we ensure our work stands the test of time, delivering lasting beauty and quality craftsmanship to every project.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    title: 'Satisfaction Guarantee',
    description: 'Your satisfaction is our priority. Notify us of any imperfections within 48 hours, and we will swiftly return to repair or repaint, ensuring your space meets our high standards without compromise.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        {/* Background image with multiple overlays */}
        <div className="absolute inset-0">
          {/* Base image with initial overlay */}
          <div 
            className="absolute inset-0 opacity-75"
            style={{
              backgroundImage: `url('https://media.istockphoto.com/id/1221306297/photo/man-pours-paint-into-the-tray-and-dips-roller-professional-interior-construction-worker.jpg?s=1024x1024&w=is&k=20&c=dr5J47iopHLq5-0MDwyE0wxkal8NK-EgCTv_slxwtWk=')`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              filter: 'brightness(0.85)',
            }}
          />
          {/* Additional gradient overlay */}
          <div 
            className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/40 to-black/50"
          />
        </div>
        
        <div className="relative container py-32 sm:py-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="heading-1 mb-6 text-shadow-lg font-display text-blue-50">
              Transform Your Space with Professional Painting Services
            </h1>
            <p className="text-xl mb-8 text-gray-100 text-shadow-sm font-medium">
              We bring color to life with expert interior and exterior painting services. 
              Quality workmanship, attention to detail, and customer satisfaction guaranteed.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn">
                Get Free Quote
              </Link>
              <Link to="/services" className="btn btn-secondary">
                Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="heading-2 mb-4">Why Choose Us</h2>
            <p className="text-lg text-gray-600">
              Experience the difference with our professional painting services. 
              We take pride in delivering exceptional results that exceed expectations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects Section */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="heading-2 mb-4">Recent Projects</h2>
            <p className="text-lg text-gray-600">
              Take a look at some of our recent transformations. 
              Each project showcases our commitment to quality and attention to detail.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Heritage Queenslander Revival",
                description: "Complete exterior restoration of a classic Queenslander home in Brisbane, bringing back its original charm while adding modern protection.",
                image: "https://media.istockphoto.com/id/157329407/photo/house-painter.jpg?s=1024x1024&w=is&k=20&c=xRaLCGnE1u-4Z7h_DUZa7CYyfgKkRHouWnwg1Vq6_Yo="
              },
              {
                title: "Modern Office Transformation",
                description: "After-hours commercial project transforming a 500sqm office space with a contemporary color scheme and premium finishes.",
                image: "https://media.istockphoto.com/id/1035101190/photo/renovating-office.jpg?s=1024x1024&w=is&k=20&c=QP1ltjuvL7P8AmH84rdDrwvYcdJtZlpr1_v-9tuOr9c="
              },
              {
                title: "Coastal Home Refresh",
                description: "Full interior and exterior painting of a beachfront property, using specialized marine-grade coatings for lasting protection.",
                image: "https://media.istockphoto.com/id/186529926/photo/beach-house.jpg?s=1024x1024&w=is&k=20&c=ClUin0-TXfhY-B4jBy1LXb_ToHhplznk6acvbpA_hgM="
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="aspect-w-16 aspect-h-9 relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black/10"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600">
                    {project.description}
                  </p>
                  <Link 
                    to="/gallery" 
                    className="inline-flex items-center mt-4 text-primary-600 hover:text-primary-500"
                  >
                    View Details
                    <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
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