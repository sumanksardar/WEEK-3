# Week 3 & Week 4 Git and TestCafe Portfolio

## Project Overview

This project demonstrates the use of Git version control and TestCafe functional testing as part of Week 3 and Week 4 coursework.

The repository contains a simple web-based menu application along with automated functional tests that validate the behaviour of the application.

---

## Technologies Used

* Git (version control system)
* Gogs (self-hosted Git repository)
* Node.js (backend server)
* TestCafe (functional testing framework)
* JavaScript, HTML, CSS

---

## Repository Features

This repository demonstrates the following Git concepts:

* Multiple commits with meaningful commit messages
* Issue creation and resolution
* Pull request creation and merging
* Branching workflow using feature branches
* Structured and organised project files

---

## Project Structure

```
WEEK-3/
├── backend/        # Node.js server
├── public/         # Frontend menu application
├── tests/          # TestCafe test files
├── .gitignore      # Ignores node_modules folder
├── package.json    # Project dependencies
└── README.md       # Project documentation
```

---

## TestCafe Functional Testing

Automated functional tests have been implemented using TestCafe.

The following test files are included:

* `simple.test.js`
  Contains basic checks such as page loading, element visibility, and structure validation.

* `menu.test.js`
  Contains more detailed tests validating menu items, prices, and content accuracy.

These tests ensure that the application behaves as expected from a user perspective.

---

## How to Run the Project

### 1. Start Gogs Server

```
cd ~/gogs
./gogs web
```

---

### 2. Start Application Server

```
cd ~/Desktop/WK-3-4/WEEK-3/backend
node server.js
```

---

### 3. Run TestCafe Tests

```
cd ~/Desktop/WK-3-4/WEEK-3
npx testcafe chromium tests/simple.test.js
```

---

## Application URLs

* Gogs Repository: http://localhost:3000
* Menu Application: http://localhost:3001

---

## Key Learning Outcomes

* Understanding Git workflows including branching and merging
* Using Gogs as a local Git server
* Managing issues and pull requests
* Writing and executing automated functional tests
* Validating web application behaviour using TestCafe

---

## Author

Suman Kumar Sardar
