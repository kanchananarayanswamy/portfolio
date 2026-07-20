import { motion } from 'framer-motion'
import { FaLeetcode, FaCodepen } from 'react-icons/fa'
import { SiCodechef, SiHackerrank, SiGithub, SiLinkedin } from 'react-icons/si'

const CodingProfiles = () => {
  const profiles = [
    {
      id: 1,
      name: 'LeetCode',
      icon: FaLeetcode,
      color: '#ffa116',
      link: 'https://leetcode.com',
      username: 'your_username',
      description: 'Problem-solving and coding interview prep',
    },
    {
      id: 2,
      name: 'CodeChef',
      icon: SiCodechef,
      color: '#b92b27',
      link: 'https://codechef.com',
      username: 'your_username',
      description: 'Competitive programming challenges',
    },
    {
      id: 3,
      name: 'HackerRank',
      icon: SiHackerrank,
      color: '#2ec866',
      link: 'https://hackerrank.com',
      username: 'your_username',
      description: 'Coding challenges and certifications',
    },
    {
      id: 4,
      name: 'GitHub',
      icon: SiGithub,
      color: '#181717',
      link: 'https://github.com',
      username: 'kanchananarayanswamy',
      description: 'Open source projects and repositories',
    },
    {
      id: 5,
      name: 'LinkedIn',
      icon: SiLinkedin,
      color: '#0a66c2',
      link: 'https://linkedin.com',
      username: 'your_profile',
      description: 'Professional networking profile',
    },
    {
      id: 6,
      name: 'CodePen',
      icon: FaCodepen,
      color: '#000000',
      link: 'https://codepen.io',
      username: 'your_username',
      description: 'Frontend projects and experiments',
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-dark-800">
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
            Coding <span className="gradient-text">Profiles</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400">Connect with me on these platforms</p>
        </motion.div>

        {/* Profiles Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {profiles.map((profile) => (
            <motion.a
              key={profile.id}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-dark-700 rounded-2xl p-8 shadow-soft hover:shadow-lg smooth-transition group"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="mb-4"
              >
                <profile.icon
                  size={64}
                  style={{ color: profile.color }}
                  className="mb-4"
                />
              </motion.div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {profile.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                @{profile.username}
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm leading-relaxed">
                {profile.description}
              </p>

              {/* Visit Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-2 rounded-lg font-semibold text-white smooth-transition"
                style={{ backgroundColor: profile.color }}
              >
                Visit Profile
              </motion.button>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default CodingProfiles