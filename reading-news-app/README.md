# Kids Reading News App 📚

A colorful, kid-friendly reading news application designed for children in grades 1-6 (ages 6-11).

## Features ✨

### 1. **Onboarding**
- Simple age selection (6-7, 8-9, 10-11 years)
- Colorful, playful interface with emojis

### 2. **Home Screen**
- 3 Category Cards: World 🌍, Creativity 🎨, Kindness 💝
- Large, easy-to-tap buttons
- High contrast design for accessibility

### 3. **Reader Screen**
- Age-appropriate article text (simplified vocabulary)
- Interactive words: Click any highlighted word to see pronunciation and definition
- Progress bar at top to track reading progress
- Smooth animations and transitions

### 4. **Challenge Screen**
- Fun critical thinking questions after reading
- Mock "Record Voice" button functionality
- Encouraging feedback and rewards

## Technical Stack 🛠️

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Framer Motion** - Smooth animations
- **Lucide React** - Icon library

## Getting Started 🚀

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
cd reading-news-app

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure 📁

```
reading-news-app/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components
│   │   └── WordPopup.jsx
│   ├── data/           # Mock data
│   │   └── articles.json
│   ├── screens/        # Screen components
│   │   ├── OnboardingScreen.jsx
│   │   ├── HomeScreen.jsx
│   │   ├── ReaderScreen.jsx
│   │   └── ChallengeScreen.jsx
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Design Principles 🎨

- **Mobile-first**: Optimized for mobile devices (max-width 480px on desktop)
- **Kid-friendly**: Large buttons (min 48px touch targets), rounded corners, playful fonts
- **High contrast**: Easy to read for young eyes
- **Colorful**: Engaging color palette with custom Tailwind colors
- **Accessible**: Clear navigation and feedback

## Sample Content 📖

The app includes 3 sample articles, each with 3 difficulty levels:

1. **Amazing Animals** (World) - About elephants
2. **Art Around Us** (Creativity) - About art and colors
3. **Being Kind** (Kindness) - About kindness and empathy

Each article has vocabulary support with pronunciations and definitions tailored to each age group.

## Future Enhancements 🔮

- Real voice recording functionality
- More articles and categories
- User profiles and reading progress tracking
- Parent dashboard
- Audio narration of articles
- Gamification elements (badges, stars)

## License 📄

MIT License - Feel free to use this project for educational purposes!

---

Made with ❤️ for young readers everywhere!
