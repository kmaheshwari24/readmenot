import { motion } from 'framer-motion';
import { User } from 'lucide-react';

export default function OnboardingScreen({ onSelectAge }) {
  const ageGroups = [
    { id: '6-7', label: '6-7 years', emoji: '🌟', color: 'from-kid-yellow to-kid-orange' },
    { id: '8-9', label: '8-9 years', emoji: '🚀', color: 'from-kid-blue to-kid-purple' },
    { id: '10-11', label: '10-11 years', emoji: '💪', color: 'from-kid-green to-kid-blue' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-kid-pink via-kid-purple to-kid-blue p-6 flex flex-col items-center justify-center"
    >
      <motion.div
        initial={{ scale: 0.5, y: -50 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ type: 'spring', bounce: 0.5 }}
        className="text-center mb-12"
      >
        <div className="text-6xl mb-4">📚</div>
        <h1 className="text-4xl font-bold text-white mb-2 drop-shadow-lg">
          Welcome to Reading News!
        </h1>
        <p className="text-xl text-white/90">Let's find your reading level</p>
      </motion.div>

      <div className="w-full max-w-sm space-y-4">
        {ageGroups.map((age, index) => (
          <motion.button
            key={age.id}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.2, type: 'spring', bounce: 0.5 }}
            onClick={() => onSelectAge(age.id)}
            className={`btn-touch w-full bg-gradient-to-r ${age.color} text-white rounded-3xl p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border-4 border-white/30`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-4xl">{age.emoji}</span>
                <span className="text-2xl font-bold">{age.label}</span>
              </div>
              <User size={32} />
            </div>
          </motion.button>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-8 text-white/80 text-center"
      >
        Pick the group that fits you best! ✨
      </motion.p>
    </motion.div>
  );
}
