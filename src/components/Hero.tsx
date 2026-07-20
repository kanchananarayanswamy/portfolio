import { motion } from 'framer-motion'
import { HiArrowRight, HiDownload } from 'react-icons/hi'
import { Link } from 'react-scroll'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 bg-gradient-to-b from-white to-gray-50 dark:from-dark-900 dark:to-dark-800">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center"
      >
        {/* Greeting */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="text-primary font-semibold text-lg">Welcome to my portfolio</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-4 text-gray-900 dark:text-white leading-tight"
        >
          Hi, I'm <span className="gradient-text">Kanchana</span>
        </motion.h1>

        {/* Title */}
        <motion.p
          variants={itemVariants}
          className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6 font-medium"
        >
          Computer Science (Data Science) Student
        </motion.p>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Passionate about data science, machine learning, and building elegant solutions. I transform complex problems into intuitive applications using modern technologies.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="#resume"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            download
            className="flex items-center gap-2 bg-primary hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold smooth-transition shadow-md"
          >
            <HiDownload size={20} />
            Download Resume
          </motion.a>

          <Link
            to="contact"
            smooth={true}
            duration={500}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-lg font-semibold smooth-transition"
            >
              Get in Touch
              <HiArrowRight size={20} />
            </motion.button>
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mt-16"
        >
          <p className="text-gray-500 dark:text-gray-400">Scroll to explore</p>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero