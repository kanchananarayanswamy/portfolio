import { HiSun, HiMoon } from 'react-icons/hi'
import { motion } from 'framer-motion'

interface ThemeToggleProps {
  isDark: boolean
  toggleTheme: () => void
}

const ThemeToggle = ({ isDark, toggleTheme }: ThemeToggleProps) => {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.3 }}
      onClick={toggleTheme}
      className="fixed bottom-8 right-8 bg-primary hover:bg-blue-700 text-white p-3 rounded-full shadow-lg smooth-transition z-40"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {isDark ? <HiSun size={24} /> : <HiMoon size={24} />}
    </motion.button>
  )
}

export default ThemeToggle