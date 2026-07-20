import { motion } from 'framer-motion'
import { HiCalendar, HiMapPin } from 'react-icons/hi'

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Data Science Intern',
      company: 'Tech Company',
      location: 'San Francisco, CA',
      period: 'Jun 2024 - Aug 2024',
      description: 'Worked on building machine learning models and analyzing large datasets. Contributed to data pipeline optimization.',
      highlights: ['Python', 'SQL', 'Machine Learning', 'Data Analysis'],
    },
    {
      id: 2,
      title: 'Full Stack Developer Intern',
      company: 'Software Solutions Inc.',
      location: 'Remote',
      period: 'Jan 2024 - May 2024',
      description: 'Developed and maintained full-stack web applications. Collaborated with senior developers on API design and implementation.',
      highlights: ['React', 'Node.js', 'MongoDB', 'REST APIs'],
    },
    {
      id: 3,
      title: 'Junior Developer',
      company: 'Startup XYZ',
      location: 'New York, NY',
      period: 'Sep 2023 - Dec 2023',
      description: 'Built responsive web interfaces and worked on database optimization. Participated in code reviews and team meetings.',
      highlights: ['JavaScript', 'React', 'PostgreSQL', 'Tailwind CSS'],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  }

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-dark-800">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            My <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400">Professional journey and accomplishments</p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-blue-400"></div>

          {experiences.map((exp, index) => (
            <motion.div key={exp.id} variants={itemVariants} className="mb-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Timeline Dot */}
                <div className={index % 2 === 0 ? 'md:col-span-1' : 'md:col-span-1 md:order-2'}>
                  {index % 2 === 0 ? (
                    <div className="text-right pr-8">
                      <div className="bg-white dark:bg-dark-700 rounded-xl p-6 shadow-soft hover:shadow-lg smooth-transition">
                        <div className="flex items-center gap-2 text-primary mb-2">
                          <HiCalendar /> {exp.period}
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-4">
                          <HiMapPin /> {exp.location}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="hidden md:block"></div>
                  )}
                </div>

                {/* Dot in center */}
                <div className="hidden md:flex justify-center">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-4 h-4 bg-primary rounded-full border-4 border-white dark:border-dark-800"
                  ></motion.div>
                </div>

                {/* Experience Card */}
                <div className={index % 2 === 0 ? 'md:col-span-1' : 'md:col-span-1 md:order-3'}>
                  <div className="bg-white dark:bg-dark-700 rounded-xl p-6 shadow-soft hover:shadow-lg smooth-transition">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-primary font-semibold mb-3">{exp.company}</p>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((skill, i) => (
                        <span
                          key={i}
                          className="text-xs bg-blue-100 dark:bg-blue-900/30 text-primary dark:text-blue-400 px-3 py-1 rounded-full font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Experience