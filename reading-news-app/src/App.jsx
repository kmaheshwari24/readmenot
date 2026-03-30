import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import articlesData from './data/articles.json';
import OnboardingScreen from './screens/OnboardingScreen';
import HomeScreen from './screens/HomeScreen';
import ReaderScreen from './screens/ReaderScreen';
import ChallengeScreen from './screens/ChallengeScreen';

function App() {
  const [currentScreen, setCurrentScreen] = useState('onboarding');
  const [ageGroup, setAgeGroup] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const handleSelectAge = (age) => {
    setAgeGroup(age);
    setCurrentScreen('home');
  };

  const handleSelectCategory = (category) => {
    const article = articlesData.articles.find(a => a.category === category);
    setSelectedCategory(category);
    setSelectedArticle(article);
    setCurrentScreen('reader');
  };

  const handleReadingComplete = () => {
    setCurrentScreen('challenge');
  };

  const handleChallengeComplete = () => {
    // Reset to home screen after challenge
    setSelectedCategory(null);
    setSelectedArticle(null);
    setCurrentScreen('home');
  };

  const handleBackToHome = () => {
    setSelectedCategory(null);
    setSelectedArticle(null);
    setCurrentScreen('home');
  };

  const handleBackToReader = () => {
    setCurrentScreen('reader');
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'onboarding':
        return (
          <OnboardingScreen
            key="onboarding"
            onSelectAge={handleSelectAge}
          />
        );
      
      case 'home':
        return (
          <HomeScreen
            key="home"
            onSelectCategory={handleSelectCategory}
          />
        );
      
      case 'reader':
        return (
          <ReaderScreen
            key="reader"
            article={selectedArticle}
            ageGroup={ageGroup}
            onBack={handleBackToHome}
            onComplete={handleReadingComplete}
          />
        );
      
      case 'challenge':
        return (
          <ChallengeScreen
            key="challenge"
            category={selectedCategory}
            onComplete={handleChallengeComplete}
            onBack={handleBackToReader}
          />
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="app-container">
      <AnimatePresence mode="wait">
        {renderScreen()}
      </AnimatePresence>
    </div>
  );
}

export default App;
