import { motion } from 'framer-motion'

const About = () => {
  return (
    <section className="py-20 px-4 bg-white dark:bg-dark-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400">Get to know more about my journey</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="w-80 h-80 bg-gradient-to-br from-primary to-blue-600 rounded-2xl shadow-lg flex items-center justify-center">
              <div className="w-72 h-72 bg-dark-100 dark:bg-dark-800 rounded-2xl flex items-center justify-center">
                <span className="text-6xl">👩‍💻</span>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Computer Science Student Focused on Data Science
            </h3>

            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              I'm a passionate computer science student with a focus on data science and machine learning. I love exploring data, building predictive models, and creating intuitive solutions to complex problems.
            </p>

            <div className="space-y-4 mb-6">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Education</h4>
                <p className="text-gray-600 dark:text-gray-400">B.Tech in Computer Science (Data Science) - Currently Pursuing</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Career Objective</h4>
                <p className="text-gray-600 dark:text-gray-400">To leverage my skills in data analysis and machine learning to drive data-informed decision-making and create impactful solutions in organizations.</p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold smooth-transition"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About