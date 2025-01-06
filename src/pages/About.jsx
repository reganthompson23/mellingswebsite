import { motion } from 'framer-motion';
import ContactSection from '../components/sections/ContactSection';

const values = [
  {
    title: 'Quality',
    description: 'We never compromise on the quality of our work, using only the finest materials and techniques.',
  },
  {
    title: 'Integrity',
    description: 'We conduct our business with honesty, transparency, and ethical practices.',
  },
  {
    title: 'Reliability',
    description: 'Count on us to deliver on our promises and meet deadlines consistently.',
  },
  {
    title: 'Customer Focus',
    description: 'Your satisfaction is our priority. We listen, adapt, and exceed expectations.',
  },
];

const team = [
  {
    name: 'John Smith',
    role: 'Founder & Master Painter',
    description: '25+ years of experience in residential and commercial painting.',
  },
  {
    name: 'Sarah Johnson',
    role: 'Project Manager',
    description: 'Ensures smooth operation and timely completion of all projects.',
  },
  {
    name: 'Mike Wilson',
    role: 'Lead Painter',
    description: 'Specialist in custom finishes and detailed work.',
  },
  {
    name: 'Emily Brown',
    role: 'Customer Relations',
    description: 'Your point of contact for questions and support.',
  },
];

export default function About() {
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
              Our Story of Excellence in Painting
            </h1>
            <p className="text-xl text-gray-300">
              For over two decades, we've been bringing color and life to homes and businesses 
              in our community. Our journey is built on trust, quality, and craftsmanship.
            </p>
          </motion.div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="heading-2 mb-6">Our History</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2000, our painting company began with a simple mission: 
                  to provide exceptional painting services with unmatched attention to detail.
                </p>
                <p>
                  What started as a small team of dedicated painters has grown into a 
                  full-service painting company, serving both residential and commercial clients.
                </p>
                <p>
                  Today, we're proud to be one of the most trusted names in painting, 
                  known for our professional approach, skilled craftsmanship, and commitment 
                  to customer satisfaction.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg"
            >
              {/* Placeholder for company history image */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="heading-2 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600">
              These core values guide everything we do and help us deliver 
              exceptional service to our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <h3 className="text-xl font-bold mb-2 text-primary-600">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="heading-2 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600">
              Our experienced team of professionals is dedicated to delivering 
              exceptional results on every project.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-48 h-48 mx-auto mb-4 bg-gray-200 rounded-full" />
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
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