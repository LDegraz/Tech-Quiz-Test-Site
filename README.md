# 🧠 Tech Quiz Test Site

## 📚 Description

The **Tech Quiz Test Site** is a full-stack MERN (MongoDB, Express, React, Node.js) application designed to test and improve technical knowledge through a randomized 10-question quiz. This challenge emphasizes the importance of **comprehensive Cypress testing**, focusing on both **component** and **end-to-end (E2E)** testing.

Built with performance, reliability, and scalability in mind, this project ensures modern web development practices by validating all core functionality with automated test coverage.

## 🧪 Testing Strategy

This application uses **Cypress** for both:

- 🧩 **Component Tests** (Quiz UI behavior in isolation)
- 🌐 **End-to-End Tests** (Full user flow from start to finish)

All tests are located under the `cypress/` directory.

## 🛠️ Installation & Setup

1. Clone the repo

    `git clone git@github.com:LDegraz/Tech-Quiz-Test-Site.git`

    `cd tech-quiz-test-site`

2. Install dependencies

    `npm run install`

3. Configure the environment

    `cp server/.env.example server/.env`
    
    Make sure MongoDB is running locally at:

    `mongodb://127.0.0.1:27017/techquiz`

4. Seed the database

    `npm run seed`

5. Start the application

    `npm run start:dev`

    This runs both the client (localhost:3001) and the server.

6. Run Cypress Tests

    `npm run test`
    
    Interactive test runner (GUI):

    `npm run cypress`

## 🎥 Walkthrough Video

🔗 [Click here to watch the walkthrough video](?????????)

The video demonstrates:
- The component and E2E tests running and passing
- How to run tests from the command line
- How to launch the full application

## 🗂️ Technologies Used

- React
- TypeScript
- MongoDB / Mongoose
- Node.js / Express.js
- Vite for fast React builds
- Cypress for testing
- Bootstrap for styling

## 📁 File Structure (simplified)

    - client/                 // the client application 
    - cypress/                // Folder for Cypress
        - component/          // Folder for component tests
            - Quiz.cy.jsx     // Component tests for the Quiz component
        - e2e/                // Folder for end-to-end tests
            - quiz.cy.js      // End-to-end tests for the Tech Quiz
        - fixtures/           // Folder for test fixtures
            - questions.json  // Mock data for testing
        - tsconfig.json
    - server/                 // the server application
    - .gitignore
    - cypress.config.ts       // Runs the application using imports from lib/
    - package.json
    - tsconfig.json
    - README.md // You are here!         

## ✍️ Contributors

- [Lauren DeGrazia](https://github.com/LDegraz/Tech-Quiz-Test-Site.git)- Project Creator
- Xpert Learning Assistant - The AI Learning Assistant for support and guidance throughout the bootcamp
- Lesley Vaden- T.A., providing guidance and support throughout the assignment
- Kevin Ferguson- Instructor, providing guidance and support throughout the assignment
- Starter code provided by Rutgers University Bootcamp for challenge 19 

## 📨 Contact

If you have any questions, feel free to reach out!
- **GitHub:** [LDeGraz](https://github.com/LDegraz)
- **Email:** [degrazial3@gmail.com](mailto:degrazial3@gmail.com)

### How to Contact

You can contact me via email for any inquiries or feedback regarding this project. Alternatively, you can open an issue on GitHub if you encounter any problems or have suggestions for improvements. I will do my best to respond promptly!
