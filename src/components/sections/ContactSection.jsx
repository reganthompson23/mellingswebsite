import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: 'Interior Painting',
  });
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending...' });

    try {
      // You'll need to replace these with your EmailJS credentials
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
          service: formData.service,
        },
        'YOUR_PUBLIC_KEY'
      );

      setStatus({
        type: 'success',
        message: 'Thank you! We will get back to you soon.',
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        service: 'Interior Painting',
      });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Oops! Something went wrong. Please try again later.',
      });
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="heading-2 mb-4">Get Your Free Quote Today</h2>
          <p className="text-lg text-gray-600 mb-8">
            Transform your space with our professional painting services. Contact us now for a free, no-obligation quote.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-xl mx-auto mt-12"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700">
                  Service Interested In
                </label>
                <select
                  name="service"
                  id="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                >
                  <option>Interior Painting</option>
                  <option>Exterior Painting</option>
                  <option>Commercial Painting</option>
                  <option>Residential Painting</option>
                  <option>Other Services</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                placeholder="Tell us about your project..."
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full btn"
                disabled={status.type === 'loading'}
              >
                {status.type === 'loading' ? 'Sending...' : 'Get Your Free Quote'}
              </button>
            </div>

            {status.message && (
              <div
                className={`mt-4 p-4 rounded-md ${
                  status.type === 'success'
                    ? 'bg-green-50 text-green-800'
                    : status.type === 'error'
                    ? 'bg-red-50 text-red-800'
                    : 'bg-gray-50 text-gray-800'
                }`}
              >
                {status.message}
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
} 