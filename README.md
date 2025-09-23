<!-- README.md -->

<h1 align="center" style="font-size: 3rem; font-weight: bold; border-bottom: none;">
  🧪 Cypress Automation Framework for <a href="https://www.saucedemo.com/v1/index.html" target="_blank">Swag Labs</a>
</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Cypress-E2E%20Testing-17202A?style=for-the-badge&logo=cypress&logoColor=white" />
  <img src="https://img.shields.io/badge/Test%20Coverage-High-brightgreen?style=for-the-badge" />
  <img src="https://img.shields.io/badge/License-MIT-blue?style=for-the-badge" />
  <img src="https://img.shields.io/github/last-commit/YOUR_USERNAME/YOUR_REPOSITORY_NAME?style=for-the-badge" />
</p>

---

## 📌 Table of Contents

- [📖 Project Overview](#-project-overview)
- [🛠 Technologies Used](#-technologies-used)
- [📁 Folder Structure](#-folder-structure)
- [✅ Test Scenarios](#-test-scenarios)
- [⚙️ Installation & Setup](#️-installation--setup)
- [🎮 Running Tests](#-running-tests)
- [📸 Screenshots / Demo](#-screenshots--demo)
- [✨ Best Practices](#-best-practices)
- [🧑‍💻 Author](#-author)
- [📄 License](#-license)
- [🤝 Contributing](#-contributing)

---

## 📖 Project Overview

> This project is a Cypress-based end-to-end test automation suite for [Swag Labs](https://www.saucedemo.com/v1/index.html) — a mock e-commerce platform for practicing QA automation.

The framework is modular, scalable, and written using Cypress + Mocha + Chai. It includes test coverage for:

- Login and logout functionality
- Product selection and cart flow
- Checkout process and form validation
- Error handling and alerts
- UI and navigation verification

---

## 🛠 Technologies Used

| Tool / Library    | Description                          |
|------------------|--------------------------------------|
| **Cypress**       | Fast, reliable testing for anything that runs in a browser |
| **Mocha**         | JavaScript test framework            |
| **Chai**          | Assertion library                    |
| **Node.js**       | JavaScript runtime                   |
| **VS Code**       | Recommended IDE                      |
| **npm**           | Dependency management                |

---

## 📁 Folder Structure

```bash
cypress-swaglabs-tests/
│
├── cypress/
│   ├── fixtures/           # Static test data (e.g. users.json)
│   ├── integration/        # Main test files
│   │   ├── login.spec.js
│   │   ├── cart.spec.js
│   │   └── checkout.spec.js
│   ├── support/            # Custom commands and support setup
│   │   ├── commands.js
│   │   └── e2e.js
│
├── cypress.config.js       # Cypress config file
├── package.json            # Dependencies and scripts
└── README.md               # This file 😄

## 🏗️ Jenkins CI/CD Pipeline

This project is integrated with a **Jenkins job** that automates running Cypress test cases to ensure quality on every code change.

### 🔧 Jenkins Job Details

- **Job Name:** `Cypress-CI-CD`  
- **URL:** [http://localhost:8080/job/Cypress-CI-CD/](http://localhost:8080/job/Cypress-CI-CD/) _(Local access only)_

### ⚙️ Pipeline Steps

1. 🔄 Pull latest code from GitHub repository  
2. 📦 Install dependencies with `npm install`  
3. 🧪 Execute Cypress tests using `npx cypress run`  
4. 📁 Archive test reports and screenshots  

---

### 📸 Jenkins Job Screenshot

> *(Example screenshot of Jenkins job dashboard and console output)*

<p align="center">
  <img src="docs/jenkins-job-dashboard.png" alt="Jenkins Job Dashboard Screenshot" width="600" />
</p>

> This Jenkins integration demonstrates a professional CI/CD pipeline for automated testing — a key skill in modern DevOps and quality assurance workflows.
