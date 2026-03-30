import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Volume2 } from 'lucide-react';
import WordPopup from '../components/WordPopup';

export default function ReaderScreen({ article, ageGroup, onBack, onComplete }) {
  const [selectedWord, setSelectedWord] = useState(null);
  const [readProgress, setReadProgress] = useState(0);

  const levelData = article.levels[ageGroup];
  const words = useMemo(() => levelData.text.split(' '), [levelData]);

  const handleWordClick = (word) => {
    const cleanWord = word.toLowerCase().replace(/[^a-z]/g, '');
    if (levelData.vocabulary[cleanWord]) {
      setSelectedWord({ 
        word: cleanWord, 
        data: levelData.vocabulary[cleanWord] 
      });
    }
  };

  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
    setReadProgress(Math.min(progress, 100));
  };

  const renderText = () => {
    return words.map((word, index) => {
      const cleanWord = word.toLowerCase().replace(/[^a-z]/g, '');
      const hasDefinition = levelData.vocabulary[cleanWord];
      
      return (
        <span
          key={index}
          onClick={() => handleWordClick(word)}
          className={`inline-block mr-1 px-1 rounded cursor-pointer transition-all duration-200 ${
            hasDefinition 
              ? 'hover:bg-kid-yellow/50 hover:scale-110 border-b-2 border-kid-yellow/50' 
              : ''
          }`}
        >
          {word}
        </span>
      );
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className="min-h-screen bg-gradient-to-br from-kid-blue to-kid-purple"
    >
      {/* Progress Bar */}
      <div className="sticky top-0 z-40 bg-white/90 backdrop-blur">
        <div className="h-3 bg-gray-200">
          <motion.div
            className="h-full bg-gradient-to-r from-kid-green to-kid-blue"
            initial={{ width: 0 }}
            animate={{ width: `${readProgress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Header */}
      <div className="bg-white/90 backdrop-blur p-4 sticky top-3 shadow-lg mx-4 mt-2 rounded-2xl">
        <div className="flex items-center justify-between">
          <button
            onClick={onBack}
            className="btn-touch bg-kid-red text-white rounded-full hover:bg-red-600 transition-colors"
            aria-label="Go back"
          >
            <ArrowLeft size={28} />
          </button>
          <h1 className="text-xl font-bold text-kid-purple flex items-center gap-2">
            <span>{article.emoji}</span>
            {article.title}
          </h1>
          <div className="w-12" />
        </div>
      </div>

      {/* Content */}
      <div 
        className="p-6 pb-32 overflow-y-auto"
        style={{ maxHeight: 'calc(100vh - 180px)' }}
        onScroll={handleScroll}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-3xl p-6 shadow-xl"
        >
          <div className="flex items-center gap-2 mb-4">
            <Volume2 className="text-kid-blue" size={24} />
            <p className="text-kid-blue font-bold">Tap highlighted words to learn more!</p>
          </div>
          
          <div className="text-xl leading-relaxed text-gray-700">
            {renderText()}
          </div>
        </motion.div>
      </div>

      {/* Finish Button */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5 }}
        className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur border-t-4 border-kid-yellow"
      >
        <button
          onClick={onComplete}
          className="btn-touch w-full bg-gradient-to-r from-kid-green to-kid-blue text-white rounded-3xl font-bold text-xl py-4 shadow-lg hover:shadow-xl hover:scale-105 transition-all"
        >
          I Finished Reading! 🎉
        </button>
      </motion.div>

      {/* Word Popup */}
      {selectedWord && (
        <WordPopup
          word={selectedWord.word}
          data={selectedWord.data}
          onClose={() => setSelectedWord(null)}
        />
      )}
    </motion.div>
  );
}
