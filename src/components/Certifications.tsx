import { motion } from 'framer-motion'
import { HiExternalLink } from 'react-icons/hi'

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: 'Machine Learning Specialization',
      issuer: 'Coursera',
      date: 'May 2024',
      credential: 'EV5XKQZ7XYZ',
      image: '📜',
      link: 'https://coursera.org',
    },
    {
      id: 2,
      title: 'Data Science with Python',
      issuer: 'Udemy',
      date: 'March 2024',
      credential: 'UC-ABC123XYZ',
      image: '📚',
      link: 'https://udemy.com',
    },
    {
      id: 3,
      title: 'Advanced SQL',
      issuer: 'DataCamp',
      date: 'January 2024',
      credential: 'DC-SQL-2024',
      image: '🗄️',
      link: 'https://datacamp.com',
    },
    {
      id: 4,
      title: 'Full Stack Web Development',
      issuer: 'Udemy',
      date: 'November 2023',
      credential: 'UC-MERN-2023',
      image: '🌐',
      link: 'https://udemy.com',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  }

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
            <span className="gradient-text">Certifications</span> & Achievements
          </h2>
          <p className="text-gray-600 dark:text-gray-400">Credentials and recognitions earned</p>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {certifications.map((cert) => (
            <motion.a
              key={cert.id}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dark-800 dark:to-dark-700 rounded-2xl p-6 shadow-soft hover:shadow-lg smooth-transition group"
            >
              <div className="text-5xl mb-4">{cert.image}</div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary smooth-transition">
                {cert.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{cert.issuer}</p>
              <p className="text-xs text-gray-500 dark:text-gray-500 mb-4">{cert.date}</p>
              <p className="text-xs font-mono text-primary bg-blue-100 dark:bg-blue-900/20 px-3 py-2 rounded mb-4">
                {cert.credential}
              </p>
              <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                View Credential <HiExternalLink />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications