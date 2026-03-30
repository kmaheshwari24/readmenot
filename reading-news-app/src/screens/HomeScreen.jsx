import { motion } from 'framer-motion';
import { Globe, Palette, Heart } from 'lucide-react';

export default function HomeScreen({ onSelectCategory }) {
  const categories = [
    { 
      id: 'world', 
      title: 'World', 
      emoji: '🌍', 
      color: 'from-kid-blue to-kid-purple',
      icon: Globe,
      description: 'Learn about our amazing planet!'
    },
    { 
      id: 'creativity', 
      title: 'Creativity', 
      emoji: '🎨', 
      color: 'from-kid-yellow to-kid-orange',
      icon: Palette,
      description: 'Explore art and imagination!'
    },
    { 
      id: 'kindness', 
      title: 'Kindness', 
      emoji: '💝', 
      color: 'from-kid-pink to-kid-red',
      icon: Heart,
      description: 'Discover the power of being kind!'
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-green-400 via-blue-400 to-purple-400 p-6"
    >
      <div className="pt-8 pb-6">
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-white mb-2 drop-shadow-lg">
            📰 Kids News Time!
          </h1>
          <p className="text-xl text-white/90">Pick a topic to read</p>
        </motion.div>
      </div>

      <div className="space-y-4">
        {categories.map((category, index) => {
          const Icon = category.icon;
          return (
            <motion.button
              key={category.id}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.15, type: 'spring', bounce: 0.5 }}
              onClick={() => onSelectCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`btn-touch w-full bg-gradient-to-r ${category.color} text-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border-4 border-white/30`}
            >
              <div className="flex items-center gap-4">
                <div className="text-5xl">{category.emoji}</div>
                <div className="flex-1 text-left">
                  <div className="flex items-center gap-2 mb-1">
                    <Icon size={28} />
                    <h2 className="text-2xl font-bold">{category.title}</h2>
                  </div>
                  <p className="text-white/90 text-sm">{category.description}</p>
                </div>
                <div className="text-3xl">→</div>
              </div>
            </motion.button>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 text-center"
      >
        <div className="bg-white/20 backdrop-blur rounded-2xl p-4">
          <p className="text-white font-bold text-lg">✨ Ready to learn something new?</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
