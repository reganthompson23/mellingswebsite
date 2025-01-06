import { motion } from 'framer-motion';
import ContactSection from '../components/sections/ContactSection';

const reviews = [
  {
    id: 1,
    name: 'David C.',
    date: 'December, 2023',
    rating: 5,
    review: 'Couldn\'t be happier with the professionalism displayed by Shane. He was quick to provide a detailed quote, not only did he answer my many questions with ease he was also very reliable throughout the entire process. Our cafe has never looked better!',
  },
  {
    id: 2,
    name: 'Sariah P.',
    date: 'February, 2024',
    rating: 5,
    review: 'Highly impressed with the customer service. Shane and his team delivered on their promise of a quote within 24 hours and were quick to address a minor issue after completion. We will be recommending for all future works.',
  },
  {
    id: 3,
    name: 'Michael J.',
    date: 'November, 2023',
    rating: 5,
    review: 'I am an out of State investor and needed my property painted and a few handyman items attended to whilst in-between tenants. My property manager recommended Melling\'s services. I flew down before the new tenants were due to move in to inspect my property and I was extremely impressed with not only the painting but the repairs around the property. Thanks Team, great work.',
  },
  {
    id: 4,
    name: 'Judith G.',
    date: 'February, 2024',
    rating: 5,
    review: 'We have been using Shane and the team\'s services for over a year now. I am a part of a body corporate and our building has been undergoing frequent renovations. We have had issues with tradespeople in the past so it was a breath of fresh air when we found Shane! He has been on time, highly communicative and professional. Thanks Shane!',
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
                  <p className="text-sm text-gray-500">{review.date}</p>
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