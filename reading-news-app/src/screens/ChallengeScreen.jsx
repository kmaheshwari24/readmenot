import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mic, CheckCircle, ArrowLeft } from 'lucide-react';

const challenges = {
  world: {
    question: "🤔 Why do you think elephants need such good memories?",
    hint: "Think about how they find food and water in big places!",
  },
  creativity: {
    question: "🎨 If you could create any artwork, what would it be and why?",
    hint: "Imagine something that makes people happy!",
  },
  kindness: {
    question: "💝 How does it feel when someone is kind to you?",
    hint: "Think about a time someone made you smile!",
  },
};

export default function ChallengeScreen({ category, onComplete, onBack }) {
  const [isRecording, setIsRecording] = useState(false);
  const [hasRecorded, setHasRecorded] = useState(false);

  const challenge = challenges[category];

  const handleRecord = () => {
    setIsRecording(true);
    // Mock recording - simulate 3 seconds of recording
    setTimeout(() => {
      setIsRecording(false);
      setHasRecorded(true);
    }, 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-kid-orange via-kid-yellow to-kid-green p-6 flex flex-col"
    >
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <button
          onClick={onBack}
          className="btn-touch bg-white text-kid-orange rounded-full hover:bg-gray-100 transition-colors shadow-lg"
          aria-label="Go back"
        >
          <ArrowLeft size={28} />
        </button>
        <h1 className="text-2xl font-bold text-white">Thinking Challenge!</h1>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <motion.div
          initial={{ scale: 0.8, y: 50 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ type: 'spring', bounce: 0.5 }}
          className="bg-white rounded-3xl p-8 shadow-2xl w-full max-w-sm text-center"
        >
          <div className="text-6xl mb-6">🧠</div>
          
          <h2 className="text-xl font-bold text-gray-700 mb-4">
            {challenge.question}
          </h2>
          
          <div className="bg-kid-blue/10 rounded-2xl p-4 mb-6">
            <p className="text-kid-blue font-bold text-sm">💡 Hint:</p>
            <p className="text-gray-600">{challenge.hint}</p>
          </div>

          {!hasRecorded ? (
            <>
              <button
                onClick={handleRecord}
                disabled={isRecording}
                className={`btn-touch w-full rounded-3xl font-bold text-xl py-6 shadow-lg transition-all ${
                  isRecording
                    ? 'bg-kid-red text-white animate-pulse'
                    : 'bg-gradient-to-r from-kid-red to-kid-pink text-white hover:shadow-xl hover:scale-105'
                }`}
              >
                {isRecording ? (
                  <span className="flex items-center justify-center gap-3">
                    <Mic size={28} className="animate-bounce" />
                    Recording...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-3">
                    <Mic size={28} />
                    Record Your Answer
                  </span>
                )}
              </button>
              
              <p className="text-gray-500 text-sm mt-4">
                🎤 Tap and share your thoughts! (3 seconds)
              </p>
            </>
          ) : (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', bounce: 0.5 }}
            >
              <div className="bg-kid-green/20 rounded-2xl p-6 mb-4">
                <CheckCircle size={64} className="text-kid-green mx-auto mb-4" />
                <p className="text-2xl font-bold text-kid-green">Great Job! 🎉</p>
                <p className="text-gray-600 mt-2">Your answer was recorded!</p>
              </div>
              
              <button
                onClick={onComplete}
                className="btn-touch w-full bg-gradient-to-r from-kid-blue to-kid-purple text-white rounded-3xl font-bold text-xl py-4 shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                Continue →
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Decorative elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="fixed top-20 left-4 text-4xl opacity-50"
      >
        ⭐
      </motion.div>
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="fixed bottom-32 right-4 text-4xl opacity-50"
      >
        🌟
      </motion.div>
    </motion.div>
  );
}
