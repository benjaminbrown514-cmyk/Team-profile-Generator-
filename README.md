# Team-profile-Generator-

Team Profile Generator
Description
The Team Profile Generator is a Node.js command-line application that allows business owners and managers to quickly generate a professional HTML webpage for their software engineering team. By answering a series of prompts via the terminal, the application collects data for managers, engineers, and interns, then dynamically builds a clean, organized roster.

This project demonstrates the use of Object-Oriented Programming (OOP), specifically class inheritance, as well as test-driven development using Jest.

Table of Contents
Installation

Usage

Walkthrough Video

Features

Tests

License

Installation
Clone the repository:

Bash
git clone <your-repository-url>
Navigate to the project directory:

Bash
cd team-profile-generator
Install dependencies:
This application requires Inquirer version 8.2.4 and Jest for testing.

Bash
npm install
Note: If installing manually, ensure you use npm i inquirer@8.2.4.

Usage
Open your terminal in the root directory of the project.

Run the application using Node:

Bash
node index.js
Follow the command-line prompts:

Enter the Team Manager's details first.

Choose to Add an Engineer, Add an Intern, or Finish building my team.

Once finished, the application will generate an index.html file in the dist/ folder.

Open dist/index.html in your browser to view your team roster.

Walkthrough Video
Click here to watch the functionality and testing demonstration

Note: The video demonstrates the application being initiated, prompts being answered, the successful generation of the HTML file, and all Jest tests passing.

Features
Dynamic HTML Generation: Creates a custom styled webpage based on user input.

Class Inheritance: Utilizes a parent Employee class with extended Manager, Engineer, and Intern subclasses.

Interactive Prompts: Uses the Inquirer package for a smooth user experience.

Data Validation: Ensures that emails, IDs, and names are provided in the correct format.

Functional Links: * Clicking an email address opens the user's default mail client.

Clicking a GitHub username opens the profile in a new browser tab.

Tests
This application uses Jest for unit testing to ensure all classes function correctly.

To run the tests, use the following command:

Bash
npm test
All tests for Employee, Manager, Engineer, and Intern should pass with 100% coverage.

url:(https://github.com/benjaminbrown514-cmyk/Team-profile-Generator-)

Technical Specifications
Directory Structure

Plaintext
.
├── __tests__/      // Jest tests for each class
├── dist/           // Rendered HTML and CSS output
├── lib/            // Classes (Employee, Manager, etc.)
├── src/            // Template helper code/HTML generation
├── index.js        // Main application logic
├── package.json    // Dependencies and scripts
└── .gitignore      // Ignored files
Classes & Methods

Employee (Parent): getName(), getId(), getEmail(), getRole() (returns 'Employee')

Manager: officeNumber, getRole() (returns 'Manager')

Engineer: github, getGithub(), getRole() (returns 'Engineer')

](https://github.com/benjaminbrown514-cmyk/Team-profile-Generator-)
Intern: school, getSchool(), getRole() (returns 'Intern')
