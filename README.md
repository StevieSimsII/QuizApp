# Educational Quiz Application

An interactive quiz platform for multiple subjects including Social Studies, Science, English, and Physical Education.

## Features

- Multi-subject quiz platform
- Dynamic quiz generation from question sets
- Multiple choice questions with detailed explanations
- One question at a time display with navigation
- Score tracking and answer review
- Responsive design for all devices
- Organized study guides for each subject

## Subjects Covered

### Social Studies
- World War II (Chapter 14)
- Imperialism and World War I (Chapter 12)
- The Roaring Twenties and Great Depression (Chapter 13)

### Science
- Human Body Systems and Organization
- Ecosystems and Interactions
- Environmental Systems

### English
- Farewell to Manzanar Study Guide

### Physical Education
- Baseball Rules and Techniques

## Tech Stack

- React.js
- TailwindCSS for styling
- Local state management

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/StevieSimsII/QuizApp.git
cd QuizApp
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open in your default browser at `http://localhost:3000`.

### Building for Production

To create a production build:

```bash
npm run build
```

This will create an optimized production build in the `build` folder.

## Project Structure

```
src/
  ├── components/     # React components
  ├── data/          
  │   ├── subjects/  # Subject-specific quiz data
  │   │   ├── Social Studies/
  │   │   ├── Science/
  │   │   ├── English/
  │   │   └── PE/
  │   └── study-guides/  # Subject-specific study materials
  │       ├── Social Studies/
  │       ├── Science/
  │       ├── English/
  │       └── PE/
  ├── styles/        # CSS and styling files
  └── App.js         # Main application component
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 