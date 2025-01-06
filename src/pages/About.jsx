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
      <section className="relative bg-gray-900 text-white">
        {/* Background image with multiple overlays */}
        <div className="absolute inset-0">
          {/* Base image with initial overlay */}
          <div 
            className="absolute inset-0 opacity-75"
            style={{
              backgroundImage: `url('https://media.istockphoto.com/id/1213883647/photo/efficient-renovation-crew-painting-white-walls-of-new-build-home.jpg?s=1024x1024&w=is&k=20&c=YjK90SKh4x0wJX_kdn-9dqMH3Ec7HBo0GwyE2zu_sqM=')`,
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
              About Mellings
            </h1>
            <p className="text-xl mb-8 text-gray-100 text-shadow-sm font-medium">
              Crafting beautiful spaces with precision and care.
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
              <h2 className="heading-2 mb-6">Our Commitment</h2>
              <div className="space-y-6 text-gray-600">
                <p className="text-lg leading-relaxed">
                  At Mellings, we've built our reputation on three fundamental principles: quality, service, and expertise. As a proud family-owned business serving Brisbane, we understand that every project is more than just a job – it's an opportunity to transform your space into something extraordinary.
                </p>
                <p className="text-lg leading-relaxed">
                  What sets us apart is our deeply personal approach to every project. We believe in putting ourselves in our clients' shoes, delivering the same level of care and attention to detail that we would expect for our own homes. This empathetic approach, combined with our technical expertise, ensures that every project receives the dedication it deserves.
                </p>
                <p className="text-lg leading-relaxed">
                  Whether it's a residential makeover or a commercial transformation, our commitment remains unwavering: to provide exceptional results tailored precisely to your needs, executed with the utmost care and precision.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=2071&auto=format&fit=crop"
                alt="Professional painter at work"
                className="object-cover w-full h-full"
              />
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