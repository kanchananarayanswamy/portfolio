import { motion } from 'framer-motion'
import { FaPython, FaJsSquare, FaReact, FaNode, FaGitAlt, FaGithub } from 'react-icons/fa'
import { SiSql, SiPostgresql, SiMongodb, SiTailwindcss, SiPostman, SiTableau, SiPowerbi } from 'react-icons/si'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming',
      skills: [
        { name: 'Python', icon: FaPython, color: '#3776ab' },
        { name: 'JavaScript', icon: FaJsSquare, color: '#f7df1e' },
        { name: 'SQL', icon: SiSql, color: '#cc2927' },
        { name: 'C', icon: null, color: '#00599c', label: 'C' },
      ],
    },
    {
      title: 'Frontend',
      skills: [
        { name: 'React', icon: FaReact, color: '#61dafb' },
        { name: 'HTML/CSS', icon: null, color: '#e34c26', label: 'HTML/CSS' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06b6d4' },
        { name: 'JavaScript', icon: FaJsSquare, color: '#f7df1e' },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: FaNode, color: '#68a063' },
        { name: 'Express.js', icon: null, color: '#000000', label: 'Express' },
      ],
    },
    {
      title: 'Databases',
      skills: [
        { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
        { name: 'MySQL', icon: null, color: '#00758f', label: 'MySQL' },
        { name: 'MongoDB', icon: SiMongodb, color: '#13aa52' },
      ],
    },
    {
      title: 'Tools & Platforms',
      skills: [
        { name: 'Git', icon: FaGitAlt, color: '#f1502f' },
        { name: 'GitHub', icon: FaGithub, color: '#181717' },
        { name: 'VS Code', icon: null, color: '#007acc', label: 'VS Code' },
        { name: 'Postman', icon: SiPostman, color: '#ff6c02' },
        { name: 'Tableau', icon: SiTableau, color: '#e3165b' },
        { name: 'Power BI', icon: SiPowerbi, color: '#f2c811' },
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
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
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400">Technologies and tools I work with</p>
        </motion.div>

        {/* Skills Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div key={categoryIndex} variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    whileHover={{ scale: 1.1, y: -10 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white dark:bg-dark-700 rounded-xl p-6 shadow-soft hover:shadow-lg smooth-transition flex flex-col items-center justify-center text-center"
                  >
                    {skill.icon ? (
                      <skill.icon size={48} style={{ color: skill.color }} className="mb-3" />
                    ) : (
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-sm mb-3"
                        style={{ backgroundColor: skill.color }}
                      >
                        {skill.label}
                      </div>
                    )}
                    <p className="font-semibold text-gray-900 dark:text-white text-sm">
                      {skill.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills