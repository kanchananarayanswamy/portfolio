import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'your.email@example.com',
      link: 'mailto:your.email@example.com',
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: 'Your City, Country',
      link: '#',
    },
  ]

  return (
    <section className="py-20 px-4 bg-white dark:bg-dark-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400">Let's connect and discuss opportunities</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                whileHover={{ x: 10 }}
                className="flex items-start gap-4 smooth-transition"
              >
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <info.icon size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {info.label}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">{info.value}</p>
                </div>
              </motion.a>
            ))}

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="pt-8 border-t border-gray-200 dark:border-dark-700"
            >
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Follow me on social media</p>
              <div className="flex gap-4">
                {['LinkedIn', 'GitHub', 'Twitter'].map((social, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-gray-200 dark:bg-dark-700 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white smooth-transition font-semibold text-sm"
                  >
                    {social.charAt(0)}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-gray-50 dark:bg-dark-800 rounded-2xl p-8 shadow-soft"
          >
            {/* Name Input */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-lg focus:outline-none focus:border-primary text-gray-900 dark:text-white smooth-transition"
                placeholder="Enter your name"
              />
            </div>

            {/* Email Input */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-lg focus:outline-none focus:border-primary text-gray-900 dark:text-white smooth-transition"
                placeholder="Enter your email"
              />
            </div>

            {/* Message Input */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-white dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-lg focus:outline-none focus:border-primary text-gray-900 dark:text-white smooth-transition resize-none"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-primary hover:bg-blue-700 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 smooth-transition"
            >
              Send Message
              <HiArrowRight size={20} />
            </motion.button>

            {/* Success Message */}
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg text-center font-semibold"
              >
                ✓ Message sent successfully!
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact