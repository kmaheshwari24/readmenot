import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, BookOpen, X } from 'lucide-react';

export default function WordPopup({ word, data, onClose, position }) {
  if (!word || !data) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 10 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.5 }}
          className="bg-white rounded-3xl p-6 max-w-sm w-full shadow-2xl border-4 border-kid-purple"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-bold text-kid-purple">{word}</h3>
            <button
              onClick={onClose}
              className="btn-touch bg-kid-red text-white rounded-full hover:bg-red-600 transition-colors"
              aria-label="Close"
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="space-y-4">
            <div className="bg-kid-blue/10 rounded-2xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <Volume2 className="text-kid-blue" size={24} />
                <span className="font-bold text-kid-blue">Pronunciation</span>
              </div>
              <p className="text-xl text-gray-700 font-comic">{data.pronunciation}</p>
            </div>
            
            <div className="bg-kid-green/10 rounded-2xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="text-kid-green" size={24} />
                <span className="font-bold text-kid-green">Definition</span>
              </div>
              <p className="text-lg text-gray-700">{data.definition}</p>
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="btn-touch w-full mt-6 bg-gradient-to-r from-kid-purple to-kid-pink text-white rounded-2xl font-bold text-lg hover:opacity-90 transition-opacity"
          >
            Got it! ✓
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
