/**
 * Web Dev I Lab Assignment 4: Prompt Quizzer
 * A simple quiz game that runs in the browser console.
 */

// 1. Quiz Questions Array
// Stores the questions and their correct answers as objects.
[span_0](start_span)// Requirement: Ensure a minimum of 5 questions[span_0](end_span).
const quizQuestions = [
    {
        question: "What is the capital of Canada?",
        answer: "Ottawa"
    },
    {
        question: "Which language is known as the 'language of the web'?",
        answer: "JavaScript"
    },
    {
        question: "How many hours are in a day?",
        answer: "24"
    },
    {
        question: "What is the largest planet in our solar system?",
        answer: "Jupiter"
    },
    {
        question: "What is 7 multiplied by 8?",
        answer: "56"
    }
];

// 2. Function to Run the Quiz
function runQuiz() {
    // 3. Score Initialization
    let score = 0; [span_1](start_span)// Tracks the number of correct answers[span_1](end_span).
    
    // 4. Loop Through Questions
    [span_2](start_span)// Iterates over each question in the quizQuestions array[span_2](end_span).
    for (let i = 0; i < quizQuestions.length; i++) {
        const currentQuestion = quizQuestions[i];
        
        // 5. Prompt for User Input
        [span_3](start_span)// Uses prompt() to display the question and collect the answer[span_3](end_span).
        let userAnswer = prompt(currentQuestion.question);
        
        // If the user clicks 'Cancel' or enters nothing, userAnswer will be null or an empty string.
        // We handle this to prevent errors and proceed with the quiz.
        if (userAnswer === null) {
            userAnswer = ""; 
        }

        // 6. Normalize the Input
        [span_4](start_span)// Converts the user's input and the correct answer to lowercase and removes spaces[span_4](end_span).
        const normalizedUserAnswer = userAnswer.toLowerCase().trim();
        const normalizedCorrectAnswer = currentQuestion.answer.toLowerCase().trim();
        
        // 7. Check the Answer and Provide Immediate Feedback
        [span_5](start_span)[span_6](start_span)// Compares the normalized inputs using an if-else statement[span_5](end_span)[span_6](end_span).
        if (normalizedUserAnswer === normalizedCorrectAnswer) {
            [span_7](start_span)// Correct answer[span_7](end_span).
            alert("✅ Correct! Good job.");
            score++; [span_8](start_span)// Increase the score by one[span_8](end_span).
        } else {
            [span_9](start_span)// Incorrect answer[span_9](end_span).
            alert(`❌ Wrong! The correct answer was: ${currentQuestion.answer}`);
        }
    }
    
    // 8. Display the Final Score
    [span_10](start_span)// Shows an alert with the total score out of the total number of questions[span_10](end_span).
    alert(`🎉 Quiz Over! Your final score is ${score} out of ${quizQuestions.length}.`);
}

// 9. Run the Quiz in the Browser Console
[span_11](start_span)// Call the function to start the game[span_11](end_span).
runQuiz();