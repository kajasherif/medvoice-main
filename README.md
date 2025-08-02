# MedVoice - Medical Voice Recognition Application

[![React](https://img.shields.io/badge/React-18.0+-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.0+-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-4.0+-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0+-38B2AC.svg)](https://tailwindcss.com/)

A modern, responsive medical voice recognition application built with React, TypeScript, and Tailwind CSS. MedVoice enables healthcare professionals to efficiently document patient interactions through voice-to-text technology.

## 🩺 Overview

MedVoice is designed to streamline medical documentation by providing:

- Real-time voice-to-text transcription
- Medical terminology recognition
- HIPAA-compliant data handling
- Intuitive user interface for healthcare professionals

## ✨ Features

### Core Features

- 🎤 **Real-time Voice Recognition** - Convert speech to text instantly
- 📝 **Medical Terminology Support** - Specialized medical vocabulary recognition
- 💾 **Auto-save Functionality** - Never lose your transcriptions
- 🔒 **Secure & Private** - HIPAA-compliant data handling
- 📱 **Responsive Design** - Works on desktop, tablet, and mobile devices

### Technical Features

- **React 18** - Latest React with concurrent features and improved performance
- **TypeScript** - Type-safe development for better code quality
- **Vite** - Lightning-fast build tool and hot module replacement
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **React Router** - Client-side routing for seamless navigation

## 🏥 Use Cases

- **Clinical Documentation** - Record patient consultations and examinations
- **Medical Notes** - Create detailed medical notes and observations
- **Prescription Recording** - Document medication prescriptions accurately
- **Patient History** - Maintain comprehensive patient medical histories

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 16.x or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn** package manager
- Modern web browser with microphone access support

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/medvoice.git
cd medvoice
```

### 2. Install Dependencies

```bash
# Using npm
npm install

# Or using yarn
yarn install
```

### 3. Start Development Server

```bash
# Using npm
npm run dev

# Or using yarn
yarn dev
```

The application will be available at `http://localhost:5173`

### 4. Build for Production

```bash
# Using npm
npm run build

# Or using yarn
yarn build
```

## 📁 Project Structure

```
medvoice/
├── public/
│   ├── favicon.ico          # Application favicon
│   └── index.html           # HTML template
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── common/          # Generic components (Button, Modal, etc.)
│   │   ├── voice/           # Voice recognition components
│   │   └── medical/         # Medical-specific components
│   ├── pages/               # Page components
│   │   ├── Dashboard.tsx    # Main dashboard
│   │   ├── Transcription.tsx # Voice transcription page
│   │   └── Settings.tsx     # Application settings
│   ├── hooks/               # Custom React hooks
│   │   ├── useVoiceRecognition.ts
│   │   └── useLocalStorage.ts
│   ├── utils/               # Utility functions
│   │   ├── speechRecognition.ts
│   │   └── medicalTerms.ts
│   ├── types/               # TypeScript type definitions
│   │   └── index.ts
│   ├── styles/              # Global styles
│   │   └── globals.css
│   ├── App.tsx              # Main application component
│   ├── main.tsx             # Application entry point
│   └── Routes.tsx           # Application routing
├── .env.example             # Environment variables template
├── .gitignore               # Git ignore rules
├── package.json             # Dependencies and scripts
├── postcss.config.js        # PostCSS configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite configuration
└── README.md                # This file
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```bash
# API Configuration
VITE_API_BASE_URL=http://localhost:3000/api
VITE_SPEECH_API_KEY=your_speech_api_key_here

# Application Settings
VITE_APP_NAME=MedVoice
VITE_APP_VERSION=1.0.0
```

### Tailwind CSS Customization

Modify `tailwind.config.js` to customize the design system:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        medical: {
          primary: '#0066CC',
          secondary: '#28A745',
          danger: '#DC3545',
        },
      },
    },
  },
};
```

## 🎤 Usage

### Basic Voice Recognition

1. **Grant Microphone Permission** - Allow browser access to your microphone
2. **Start Recording** - Click the microphone button to begin voice recognition
3. **Speak Clearly** - Dictate your medical notes in a clear voice
4. **Review & Edit** - Review the transcribed text and make necessary corrections
5. **Save** - Save your transcription to local storage or export

### Medical Terminology

The application includes specialized recognition for:

- Common medical terms and abbreviations
- Drug names and dosages
- Anatomical references
- Diagnostic terminology

## 🔒 Privacy & Security

- **Local Processing** - Voice data is processed locally when possible
- **No Data Storage** - Voice recordings are not stored permanently
- **HIPAA Compliance** - Designed with healthcare privacy requirements in mind
- **Secure Connections** - All external API calls use HTTPS

## 🛠️ Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript type checking

# Testing
npm run test         # Run tests
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Generate test coverage report
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Write tests for new features
- Ensure accessibility compliance
- Follow the existing code style

## 📚 Technology Stack

| Technology   | Purpose      | Documentation                                           |
| ------------ | ------------ | ------------------------------------------------------- |
| React 18     | UI Framework | [React Docs](https://reactjs.org/docs)                  |
| TypeScript   | Type Safety  | [TypeScript Docs](https://www.typescriptlang.org/docs/) |
| Vite         | Build Tool   | [Vite Docs](https://vitejs.dev/guide/)                  |
| Tailwind CSS | Styling      | [Tailwind Docs](https://tailwindcss.com/docs)           |
| React Router | Routing      | [Router Docs](https://reactrouter.com/docs)             |

## 🐛 Troubleshooting

### Common Issues

**Microphone not working:**

- Ensure browser has microphone permissions
- Check system microphone settings
- Try refreshing the page

**Build errors:**

- Clear node_modules and reinstall dependencies
- Check Node.js version compatibility
- Verify all environment variables are set

**Performance issues:**

- Ensure you're running the latest version
- Clear browser cache
- Check for browser compatibility

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Speech Recognition API** - Web Speech API for voice recognition
- **Medical Terminology** - Open medical terminology databases
- **React Community** - For excellent documentation and support
- **Tailwind CSS** - For the utility-first CSS framework
- **Vite Team** - For the fast build tool

## 📞 Support

For support and questions:

- 📧 Email: support@medvoice.app
- 💬 Discord: [Join our community](https://discord.gg/medvoice)
- 🐛 Issues: [GitHub Issues](https://github.com/your-username/medvoice/issues)
- 📖 Wiki: [Project Wiki](https://github.com/your-username/medvoice/wiki)


**Built with ❤️ for healthcare professionals**

_Last updated: Augusst 2025_
