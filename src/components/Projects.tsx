import { motion } from 'framer-motion'
import { HiExternalLink, HiGithub } from 'react-icons/hi'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Data Analysis Dashboard',
      description: 'Interactive dashboard for visualizing and analyzing large datasets with real-time updates.',
      technologies: ['React', 'Python', 'PostgreSQL', 'D3.js'],
      image: '📊',
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      id: 2,
      title: 'Machine Learning Model',
      description: 'Predictive model for forecasting trends using advanced ML algorithms and neural networks.',
      technologies: ['Python', 'TensorFlow', 'Pandas', 'Scikit-learn'],
      image: '🤖',
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      id: 3,
      title: 'Full Stack Web App',
      description: 'Responsive web application with modern UI and robust backend API integration.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      image: '🌐',
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      id: 4,
      title: 'Data Visualization Tool',
      description: 'Tool for creating beautiful and interactive data visualizations from various sources.',
      technologies: ['React', 'Tableau', 'SQL', 'JavaScript'],
      image: '📈',
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      id: 5,
      title: 'E-Commerce Platform',
      description: 'Complete e-commerce solution with payment integration and inventory management.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      image: '🛍️',
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      id: 6,
      title: 'Analytics System',
      description: 'Comprehensive analytics system for tracking user behavior and generating insights.',
      technologies: ['Python', 'Flask', 'MongoDB', 'Plotly'],
      image: '📉',
      github: 'https://github.com',
      demo: 'https://example.com',
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
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400">Showcasing my latest work and achievements</p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-gray-50 dark:bg-dark-800 rounded-2xl overflow-hidden shadow-soft hover:shadow-lg smooth-transition"
            >
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-6xl">
                {project.image}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs bg-blue-100 dark:bg-blue-900/30 text-primary dark:text-blue-400 px-3 py-1 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 flex-1 justify-center bg-gray-900 dark:bg-dark-700 hover:bg-gray-800 text-white py-2 rounded-lg font-medium smooth-transition"
                  >
                    <HiGithub /> Code
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 flex-1 justify-center bg-primary hover:bg-blue-700 text-white py-2 rounded-lg font-medium smooth-transition"
                  >
                    <HiExternalLink /> Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects