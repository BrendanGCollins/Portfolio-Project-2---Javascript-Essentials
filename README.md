# Rapid-Fire Quiz

A fun, rapid fire quiz to test your general knowledge. Randomly selected questions and a countdown timer to add pressure! It tracks your score out of 10 and lets you know how you did at the end. Quiz can be retried at the end to try and beat your top score. 

<img src="assets/images/desktop_view.png">
<img src="assets/images/tablet_view.png">
<img src="assets/images/mobile_view.png">

How my pages look across desktop, tablet and mobile.

## Features
### Existing Features

- Landing page with Explanation
   - The landing page is simple and intuitive. It provides a quick explanation of how the quiz works and a big start button.
- Question Counter
   - A counter to keep track of what number question you are on
   <img src="assets/images/question_counter.png">   
- Randomly chosen questions each time
   - I have added an array of 20 questions and shuffle the questions so that each time you start the quiz you get different questions given to you. No question will be repeated twice in the quiz.
   <img src="assets/images/random_questions.png">
- Countdown Timer
  - A 10 second countdown timer starts as soon as you click the start button. If it reaches zero you will get 0 points and it will say 'Time up!'. You will also be shown the correct answer and can review the question before clicking 'next' to continue with the quiz. Radio buttons are disabled if timer reaches zero to prevent a user clicking the correct answer after it has been shown.
  - Timer resets for every question and stops once you finish the last question.
  <img src="assets/images/countdown_timer.png">
  <img src="assets/images/time_up.png">
- Score Counter
  - A score counter to track your score out of 10. One point for each correct answer, no point if incorrect or if not answered within the 10 seconds. Hidden until the quiz starts.
  <img src="assets/images/score_counter.png">
- Visual Cues
  - Game area goes green if correct. If incorrect, score area turns red and the correct answer is highlighted for two seconds before moving automatically to the next question.
  <img src="assets/images/incorrect.png">
  <img src="assets/images/correct.png">
- Congratulations Message
  - At the end of the quiz a message will appear letting you know how you did in the quiz.
  <img src="assets/images/congratulations_message.png">
- Restart Feature
- After completing the quiz, users can click the restart button to reset the timer, score, and questions.

### Features Left to Implement

- Highscore board where users could input their name and be added to a leaderboard.
- Addittional quiz options to test different areas of knowledge.

## Design

### Color Scheme
The color scheme for the **Rapid-Fire Quiz** was designed with a focus on creating an energetic yet friendly environment to motivate users throughout the quiz experience.

- **Primary Colors**:
  - **Light Blue**: The background color is a soft light blue, which creates a calming effect while reducing stress, something crucial when users are taking a timed quiz. Blue is known for enhancing focus and concentration, making it a suitable choice for the quiz environment.
  - **Green**: A vibrant green is used for the correct answers, providing a positive visual cue that promotes feelings of success and accomplishment.
  - **Red**: Red is used to indicate incorrect answers or errors. Red catches the user’s attention immediately and creates an urgency, reinforcing the concept of "incorrect".

- **Supporting Colors**:
  - **White and Black**: Used for readability, black text on a white background provides a clean and classic contrast, making sure the quiz is easy to read. These colors also help keep the focus on the quiz questions rather than being distracted by background elements.
  
The chosen colors were intended to provide strong visual indicators and ensure that the interface is accessible and clear. Color contrast has also been considered to make sure that both visually impaired users and those in a high-pressure environment can easily identify the visual elements.

### Typography
The chosen font family for this project is **'Oswald'**, sourced from Google Fonts.

- **Font Rationale**:
  - **Oswald**: Oswald is a sans-serif font that has a modern and clean design. This makes the text legible, which is particularly important for a timed quiz where users need to read and understand questions quickly. The use of Oswald also adds a subtle visual dynamism, which is in line with the idea of a rapid-fire quiz.

- **Header**:
  - The quiz starts with a header that is centered and visually appealing. It includes the title "Rapid-Fire Quiz" with question mark icons on either side, enhancing the playful yet inquisitive theme. The icons from **Font Awesome** provide a modern and cohesive aesthetic.

- **Main Content**:
  - The main quiz area was designed to be straightforward and centered on the page to minimize distractions.
  - Elements such as the **question counter**, **score counter**, and **timer** were designed to be clearly visible but not intrusive. These components are separated visually to help the user quickly distinguish between each feature without confusion.
  - **Game Area**: The main "game-area" uses visual cues for correctness or errors by changing background colors. Green indicates a correct response, reinforcing positive behavior, while red indicates an incorrect response.
  
- **Button Design**:
  - The buttons such as **Start**, **Next**, **Finish**, and **Retry** have a large, bold appearance to facilitate easy clicking, especially on mobile devices. The green background provides a call-to-action that encourages users to interact with the quiz.

### Visual Cues
The use of visual cues is an essential part of the quiz experience:

- **Correct Answer Feedback**:
  - Correct answers are indicated with a **green background** and bold labels to make the experience of getting a question correct feel rewarding.
  
- **Incorrect Answer Feedback**:
  - If an incorrect answer is chosen, the quiz area background briefly turns **red**, and the correct answer is highlighted in green after a two-second delay. This helps users learn from their mistakes without feeling rushed.

- **Feedback for No Answer**:
  - If the timer runs out without an answer being selected, the correct answer is highlighted while disabling the radio buttons to indicate that the time is up. This prevents users from interacting with the expired question, keeping the quiz fair.

### User Flow Considerations
The user flow was designed to maintain an intuitive progression from one question to the next:

- The **"Start" button** begins the quiz, which then moves smoothly through **ten randomized questions**.
- The **"Next" button** enables users to proceed after reviewing each question, with visual feedback to indicate correctness.
- Upon reaching the end, the **"Finish" button** shows a **"Congratulations"** message, providing closure and positive reinforcement.
- The **"Retry" button** allows users to immediately restart the quiz, giving an opportunity to improve their score, thereby fostering a replayable experience.

### Visual Hierarchy
Visual hierarchy has been considered in the layout to help users quickly understand the important elements:

- **Title/Header**: The title uses a larger font size and icons to establish the quiz branding and attract attention.
- **Question and Timer**: The question text is given prominence with larger fonts, while the timer is placed in a visible location at the bottom right to add urgency.
- **Score and Buttons**: The score is displayed in a fixed position to allow the user to keep track throughout the quiz. The buttons are also large and bold, with enough space between them to reduce accidental clicks.

## Testing
- All html,css and javascript was passed through w3c validator and [https://jshint.com] .  Results shared below.

- Project was tested with lighthouse to ensure accessibility and performance was to a high quality. I ran a test for mobile pages and another for desktop pages. Results are posted below.

- I have also tested the site by manually clicking through all available links to ensure they are working correctly. I have included the results of this test in a table below.

## Validator Testing
### HTML
- No errors were returned when passing through the official W3C validator
[https://validator.w3.org/nu/?showsource=yes&doc=https%3A%2F%2Fbrendangcollins.github.io%2FPortfolio-Project-2---Javascript-Essentials%2F]

### CSS
- No errors were found when passing through the official (Jigsaw) validator
[https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fbrendangcollins.github.io%2FPortfolio-Project-2---Javascript-Essentials%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en]

### Javascript
- No errors were found when passing through [https://jshint.com]

### Lighthouse mobile report 
<img src="assets/images/jigsaw_mobile_results.png">

### Lighthouse desktop report 
<img src="assets/images/jigsaw_desktop_results.png">

### Manual Testing

<table>
    <tr>
        <th>Action</th>
        <th>Expected Behavior</th>
        <th>Pass or Fail</th>
    </tr>
    <tr>
        <td>Click 'Start' button</td>
        <td>Random question appears, timer starts counting down, score counter appears, and 'Next' button becomes visible.</td>
        <td>Pass</td>
    </tr>
    <tr>
        <td>Check the 'Next' button before answering the question</td>
        <td>'Next' button should be disabled until an answer is selected or the timer runs out.</td>
        <td>Pass</td>
    </tr>
    <tr>
        <td>Select the correct answer but do not click 'Next'</td>
        <td>Timer stops</td>
        <td>Pass</td>
    </tr>
    <tr>
        <td>Click 'Next' button after selecting the correct answer</td>
        <td>Game area turns green briefly, score is incremented, and the next question appears after a delay of 2 seconds. Timer restarts from 10 seconds.</td>
        <td>Pass</td>
    </tr>
    <tr>
        <td>Select incorrect answer and click 'Next'</td>
        <td>Game area turns red briefly, correct answer is highlighted, score remains unchanged. The next question appears after 2 seconds with a reset timer.</td>
        <td>Pass</td>
    </tr>
    <tr>
        <td>Select no answer and let timer count down to zero</td>
        <td>Game area turns red, the correct answer is highlighted, score does not increment. Radio buttons are disabled after time runs out. Player must click next to proceed</td>
        <td>Pass</td>
    </tr>
    <tr>
        <td>Click 'Next' button after timer runs out</td>
        <td>The next question appears with radio buttons re-enabled, timer restarts, and the game continues.</td>
        <td>Pass</td>
    </tr>
    <tr>
        <td>Click on radio buttons after timer runs out</td>
        <td>Radio buttons are disabled, and no option can be selected after time runs out.</td>
        <td>Pass</td>
    </tr>
    <tr>
        <td>Reach the final (10th) question</td>
        <td>'Next' button is hidden, and 'Finish' button appears to indicate the end of the quiz.</td>
        <td>Pass</td>
    </tr>
    <tr>
        <td>Click 'Finish' button</td>
        <td>Congratulations message is displayed along with the final score. Timer stops, and 'Retry' button appears.</td>
        <td>Pass</td>
    </tr>
    <tr>
        <td>Click 'Retry' button</td>
        <td>Quiz resets with the timer, score, and question counter all reset to initial states. New random questions are displayed.</td>
        <td>Pass</td>
    </tr>
    <tr>
        <td>Refresh the page multiple times</td>
        <td>Ensure a new set of random questions appears each time.</td>
        <td>Pass</td>
    </tr>
    <tr>
        <td>Restart the quiz multiple times</td>
        <td>Verify that each restart produces a different order of questions from the question pool.</td>
        <td>Pass</td>
    </tr>
    <tr>
        <td>Play through the quiz multiple times without closing the page</td>
        <td>Ensure no repeated questions in the same session and that the game functions as expected every time.</td>
        <td>Pass</td>
    </tr>
    <tr>
        <td>Click 'Start' button while resizing the window</td>
        <td>The timer and buttons adjust dynamically without disrupting the ongoing quiz.</td>
        <td>Pass</td>
    </tr>
    <tr>
        <td>Select an answer and try clicking on it again</td>
        <td>Once an answer is selected, clicking again should not affect the answer (since it's a radio button).</td>
        <td>Pass</td>
    </tr>
    <tr>
        <td>Click 'Next' quickly before feedback is given</td>
        <td>The current question's answer is considered, and the next question loads seamlessly without interruption. Timer is reset properly.</td>
        <td>Pass</td>
    </tr>
    <tr>
        <td>Click 'Retry' button immediately after completing the quiz</td>
        <td>The game area resets without lag, and a new question is displayed with the timer starting at 10 seconds.</td>
        <td>Pass</td>
    </tr>
    <tr>
        <td>View quiz in different browsers (Chrome, Firefox, Safari, Edge)</td>
        <td>The game works consistently across all major browsers without any layout or functionality issues.</td>
        <td>Pass</td>
    </tr>
    <tr>
        <td>Attempt to answer the same question twice (using 'Back' navigation)</td>
        <td>The browser’s 'Back' button does not allow cheating; the quiz cannot be manipulated to re-answer.</td>
        <td>Pass</td>
    </tr>
</table>

## Unfixed Bugs
- No bugs found at the end of this project.

## Deployment

The site was deployed to GitHub pages. The steps to deploy are as follows:

Go to the Settings tab of your GitHub repo. On the left-hand sidebar, in the Code and automation section, select Pages.

Set sourse to 'Deploy from Branch'.

Select main branch

Make sure your folder is set to / (root)

Click on save

Wait a few minutes for the site to update then go back to the main page by clicking "code" in the top left of the screen.

Click on "Deployments" in the bottom right of the sceen.

The live link can be found here - [https://brendangcollins.github.io/Portfolio-Project-2---Javascript-Essentials/]

### Cloning the Repository
If you want to run or modify the project locally, follow these steps to clone the repository:

1. **Navigate to the GitHub repository**:
   Visit the [repository page](https://github.com/brendangcollins/Portfolio-Project-2---Javascript-Essentials).

2. **Click on the "Code" button**:  
   You will see a green button labeled **Code** at the top right of the repository page. Click it to reveal cloning options.

3. **Clone the repository**:
   - **Using HTTPS**: Copy the HTTPS URL (`https://github.com/brendangcollins/Portfolio-Project-2---Javascript-Essentials.git`) and run the following command in your terminal:
     ```sh
     git clone https://github.com/brendangcollins/Portfolio-Project-2---Javascript-Essentials.git
     ```
   - **Using SSH**: Copy the SSH URL (`git@github.com:brendangcollins/Portfolio-Project-2---Javascript-Essentials.git`) and run:
     ```sh
     git clone git@github.com:brendangcollins/Portfolio-Project-2---Javascript-Essentials.git
     ```
   - **Using GitHub CLI**: If you have GitHub CLI installed, you can clone by running:
     ```sh
     gh repo clone brendangcollins/Portfolio-Project-2---Javascript-Essentials
     ```

4. **Open the project in your code editor**:  
   Once cloned, navigate to the project directory:
   ```sh
   cd Portfolio-Project-2---Javascript-Essentials

### Forking the Repository
To make your own copy of the repository to work on:

1. **Navigate to the GitHub repository**:
   Visit the [repository page](https://github.com/brendangcollins/Portfolio-Project-2---Javascript-Essentials).

2. **Click on the "Fork" button**:  
   In the top-right corner of the page, click the Fork button. This will create your own copy of the project in your GitHub account.

3. **Clone the forked repository**:
   After forking, you can clone your own version by following the steps above to work locally.

4. **Make changes**:  
   Feel free to make any changes or enhancements. Once you have completed any modifications, you can commit and push the changes to your forked repository.  

## Credits
Lots of questions answered through [https://www.w3schools.com/]
Lots of questions answered through [https://stackoverflow.com/]
Helpful video for javascript [https://www.youtube.com/watch?v=EerdGm-ehJQ]

## Content
The icon in the main page was taken from Font Awesome [https://fontawesome.com/]
Text style was taken from Google Fonts [https://fonts.google.com/]

## Media
- No addittional media was required for this project.