const peQuizData = {
  lessons: [
    {
      id: "baseball",
      title: "Baseball Exam",
      subject: "PE",
      questions: [
        {
          id: "q1",
          question: "What is baseball?",
          options: [
            "A game played with a ball and bat between two teams of nine players",
            "A competitive game of skill played with a ball and bat between two teams of nine players",
            "A recreational game played with a ball and bat",
            "A game played with a ball and bat between two teams of eleven players"
          ],
          correctAnswer: 1
        },
        {
          id: "q2",
          question: "How many innings are in a baseball game?",
          options: [
            "Seven innings",
            "Eight innings",
            "Nine innings",
            "Ten innings"
          ],
          correctAnswer: 2
        },
        {
          id: "q3",
          question: "What happens during the top and bottom of an inning?",
          options: [
            "Both teams bat at the same time",
            "One team bats during the top while the other fields, then they switch for the bottom",
            "One team fields during the top while the other bats, then they switch for the bottom",
            "Both teams field at the same time"
          ],
          correctAnswer: 1
        },
        {
          id: "q4",
          question: "What is the infield shaped like and how long is each side?",
          options: [
            "It is shaped like a square with each side measuring 90 feet",
            "It is shaped like a diamond with each side measuring 90 feet",
            "It is shaped like a circle with a 90-foot radius",
            "It is shaped like a triangle with each side measuring 90 feet"
          ],
          correctAnswer: 1
        },
        {
          id: "q5",
          question: "What is the pitcher's mound distance from home plate?",
          options: [
            "50 feet",
            "55 feet 6 inches",
            "60 feet 6 inches",
            "65 feet"
          ],
          correctAnswer: 2
        },
        {
          id: "q6",
          question: "What are biotic and abiotic equivalents in baseball field layout?",
          options: [
            "Home plate and bases",
            "Fair territory (infield and outfield) and foul territory",
            "Dugouts and bullpens",
            "Batter's box and catcher's box"
          ],
          correctAnswer: 1
        },
        {
          id: "q7",
          question: "What is the function of dugouts?",
          options: [
            "They store equipment",
            "They shelter players not currently on the field",
            "They provide seating for spectators",
            "They serve as team offices"
          ],
          correctAnswer: 1
        },
        {
          id: "q8",
          question: "What equipment does a catcher wear for protection?",
          options: [
            "A helmet and mask only",
            "A helmet, mask, and chest protector",
            "A helmet, mask, chest protector, and shin guards",
            "A helmet, mask, chest protector, shin guards, and elbow pads"
          ],
          correctAnswer: 2
        },
        {
          id: "q9",
          question: "What are the roles of the pitcher and catcher?",
          options: [
            "The pitcher catches the ball and the catcher throws it",
            "The pitcher throws the ball to start play, and the catcher catches pitches and defends home plate",
            "The pitcher defends home plate and the catcher throws the ball",
            "The pitcher and catcher both throw the ball"
          ],
          correctAnswer: 1
        },
        {
          id: "q10",
          question: "What is a designated hitter?",
          options: [
            "A player who fields but does not bat",
            "A player who bats in place of the pitcher but does not field",
            "A player who can play any position",
            "A player who only plays defense"
          ],
          correctAnswer: 1
        },
        {
          id: "q11",
          question: "Who is responsible for enforcing the rules?",
          options: [
            "Managers",
            "Coaches",
            "Umpires",
            "Players"
          ],
          correctAnswer: 2
        },
        {
          id: "q12",
          question: "What does a manager do during a game?",
          options: [
            "Only sets the batting order",
            "Only assigns positions",
            "Directs strategy, sets batting order, and assigns positions",
            "Only enforces the rules"
          ],
          correctAnswer: 2
        },
        {
          id: "q13",
          question: "What defines a strike?",
          options: [
            "Any pitch the batter swings at",
            "A pitch in the strike zone the batter doesn't swing at, or a swing and miss",
            "Any pitch that hits the batter",
            "Any pitch that hits the ground"
          ],
          correctAnswer: 1
        },
        {
          id: "q14",
          question: "What is a walk in baseball?",
          options: [
            "When a batter receives three balls",
            "When a batter receives four balls and advances to first base",
            "When a batter receives five balls",
            "When a batter receives two balls"
          ],
          correctAnswer: 1
        },
        {
          id: "q15",
          question: "What is a base hit?",
          options: [
            "When a batter hits a home run",
            "When a batter reaches a base safely after hitting the ball",
            "When a batter walks to first base",
            "When a batter is hit by a pitch"
          ],
          correctAnswer: 1
        },
        {
          id: "q16",
          question: "Name three types of base hits.",
          options: [
            "Home run, grand slam, and walk",
            "Single, double, and triple",
            "Strike, ball, and foul",
            "Error, fielder's choice, and walk"
          ],
          correctAnswer: 1
        },
        {
          id: "q17",
          question: "What is an error?",
          options: [
            "A pitch outside the strike zone",
            "A fielder's mistake that allows a batter or runner to reach a base safely",
            "A batter swinging and missing",
            "A runner being caught stealing"
          ],
          correctAnswer: 1
        },
        {
          id: "q18",
          question: "What is stealing a base?",
          options: [
            "When a runner is forced to advance",
            "When a runner advances to the next base during a pitch or mistake",
            "When a runner is walked to the next base",
            "When a runner is hit by a pitch"
          ],
          correctAnswer: 1
        },
        {
          id: "q19",
          question: "What is a sacrifice in baseball?",
          options: [
            "When a batter hits a home run",
            "When a batter gives up their chance to reach base to advance a runner",
            "When a batter is hit by a pitch",
            "When a batter walks"
          ],
          correctAnswer: 1
        },
        {
          id: "q20",
          question: "What is a double play?",
          options: [
            "When a batter hits two home runs",
            "When fielders get two outs in one continuous play",
            "When a runner steals two bases",
            "When a batter gets two hits"
          ],
          correctAnswer: 1
        },
        {
          id: "q21",
          question: "What is a home run?",
          options: [
            "When a batter hits the ball and reaches first base",
            "When a batter hits the ball and reaches second base",
            "When a batter hits the ball and reaches third base",
            "When a batter hits the ball and rounds all bases to score"
          ],
          correctAnswer: 3
        },
        {
          id: "q22",
          question: "What is a grand slam?",
          options: [
            "A home run hit with no runners on base",
            "A home run hit with one runner on base",
            "A home run hit with two runners on base",
            "A home run hit when the bases are loaded, scoring four runs"
          ],
          correctAnswer: 3
        }
      ]
    }
  ]
};

export default peQuizData; 