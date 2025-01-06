import { motion } from 'framer-motion';
import ContactSection from '../components/sections/ContactSection';

const reviews = [
  {
    id: 1,
    name: 'Sarah Thompson',
    location: 'Local Homeowner',
    rating: 5,
    review: 'Absolutely amazing work! They transformed our entire home with their professional painting services. The attention to detail was impressive, and the team was courteous and clean.',
    project: 'Interior Home Painting',
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    location: 'Business Owner',
    rating: 5,
    review: 'Outstanding commercial painting service. They worked after hours to minimize disruption to our business and completed the project ahead of schedule. Highly recommend!',
    project: 'Office Space Renovation',
  },
  {
    id: 3,
    name: 'Emily Chen',
    location: 'Homeowner',
    rating: 5,
    review: 'The team did an excellent job painting our exterior. They were professional, punctual, and the quality of work exceeded our expectations. Our house looks brand new!',
    project: 'Exterior House Painting',
  },
  {
    id: 4,
    name: 'David Wilson',
    location: 'Restaurant Owner',
    rating: 5,
    review: 'Great experience working with this team. They understood our vision and executed it perfectly. The new paint job has completely transformed our restaurant.',
    project: 'Restaurant Interior',
  },
  {
    id: 5,
    name: 'Jennifer Parker',
    location: 'Local Resident',
    rating: 5,
    review: 'Exceptional service from start to finish. The color consultation was incredibly helpful, and the final result is exactly what we wanted. Will definitely use them again!',
    project: 'Kitchen and Living Room',
  },
  {
    id: 6,
    name: 'Robert Martinez',
    location: 'Property Manager',
    rating: 5,
    review: 'We\'ve used their services for multiple properties, and they consistently deliver high-quality work. Their team is reliable, professional, and detail-oriented.',
    project: 'Multi-Unit Property',
  },
];

const stats = [
  { label: 'Years of Experience', value: '20+' },
  { label: 'Completed Projects', value: '1000+' },
  { label: 'Satisfied Clients', value: '950+' },
  { label: '5-Star Reviews', value: '500+' },
];

function StarRating({ rating }) {
  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`w-5 h-5 ${
            index < rating ? 'text-yellow-400' : 'text-gray-300'
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
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
              Client Reviews & Testimonials
            </h1>
            <p className="text-xl text-gray-300">
              Don't just take our word for it. See what our satisfied clients have to say about our painting services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary-600">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center text-white"
              >
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-primary-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-24 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="heading-2 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600">
              Read testimonials from our satisfied customers about their experience with our painting services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="mb-4">
                  <StarRating rating={review.rating} />
                </div>
                <p className="text-gray-600 mb-4">{review.review}</p>
                <div className="border-t pt-4">
                  <p className="font-bold">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.location}</p>
                  <p className="text-sm text-primary-600 mt-1">{review.project}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="heading-2 mb-4">Ready to Transform Your Space?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Join our growing list of satisfied customers and experience our professional painting services firsthand.
            </p>
            <a href="/contact" className="btn">
              Get Your Free Quote
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
} 