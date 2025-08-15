# 8th Grade Quiz App - Academic Year Setup

## Overview
This Quiz App has been reorganized for the new academic year (8th Grade). The previous 7th grade data has been archived and new 8th grade content has been added.

## Project Structure Changes

### Archived Content (7th Grade)
The following folders have been moved to `src/data/7th_Grade/` for archival:
- `subjects/` - All previous quiz data by subject
- `study-guides/` - Study guides for various subjects
- `quizData.js` - Main quiz data file

### New Content (8th Grade)
- `src/data/8th_Grade/` - New base directory for 8th grade content
- `src/data/8th_Grade/Science/` - Science subject folder
- `src/data/8th_Grade/Science/quizData.js` - Root Word Quiz 1

## Current Quizzes Available

### Science - Root Word Quiz 1
- **Topic**: Root words and affixes
- **Questions**: 20 multiple choice questions
- **Content**: Tests knowledge of common root words, prefixes, and suffixes
- **Format**: Multiple choice with shuffled answers

#### Root Words/Affixes Covered:
1. A-; an- (not, without, lacking, deficient)
2. Ambi- (both)
3. -ary, -arium (place for something)
4. Bi- (two, twice)
5. Chron- (time)
6. -cycle; cycl- (ring, circle)
7. Geo- (land, earth)
8. -logist (one who studies)
9. -logy (study of)
10. Mis- (wrong, incorrect)
11. -ation (noun form – the act of)
12. Dis- (apart, out)
13. Contra- (against)
14. Co- (with, together)
15. -glob- (ball, round)
16. -eous (nature of, like)
17. Inter- (between)
18. -less (without)
19. Myria- (many)
20. Neo- (new, recent)

## How to Run the Application

1. Install dependencies (if not already done):
   ```
   npm install
   ```

2. Start the development server:
   ```
   npm start
   ```

3. Open your browser to: `http://localhost:3000/QuizApp`

## Adding New Quizzes

To add new quizzes for 8th grade:

1. Create the appropriate subject folder in `src/data/8th_Grade/`
2. Add a `quizData.js` file with the quiz structure
3. Update `src/data/8th_Grade/index.js` to import the new subject
4. Follow the existing quiz data format for consistency

## Quiz Data Format

Each quiz should follow this structure:
```javascript
{
  id: "unique_id",
  title: "Quiz Title",
  subject: "Subject Name", 
  description: "Quiz description",
  questions: [
    {
      id: "question_id",
      question: "Question text",
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      correctAnswer: 0 // Index of correct option (0-3)
    }
  ]
}
```

## Notes
- The app automatically shuffles answer options for each quiz attempt
- All previous 7th grade content remains accessible in the archived folders
- The front-end now exclusively serves 8th grade content
