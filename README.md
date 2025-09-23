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


<h2 style="border-bottom: 3px solid #FF5733; padding-bottom: 8px; color: #FF5733; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
  🏗️ Jenkins CI/CD Pipeline
</h2>

<div style="background: #1e1e1e; color: #f0f0f0; padding: 20px; border-radius: 12px; font-family: 'Courier New', Courier, monospace; max-width: 800px; margin: 20px auto; box-shadow: 0 8px 16px rgba(255, 87, 51, 0.25);">

  <p style="font-size: 1.1rem; margin-bottom: 10px;">
    This project is integrated with a <strong style="color:#FF6F61;">Jenkins</strong> job that automates running Cypress test cases to ensure quality on every code change.
  </p>

  <h3 style="color:#FF6F61; margin-top: 20px;">🔧 Jenkins Job Details</h3>
  <ul style="list-style-type: none; padding-left: 0; font-size: 1rem;">
    <li><strong>Job Name:</strong> <code style="background: #333; padding: 2px 6px; border-radius: 4px;">Cypress-CI-CD</code></li>
    <li><strong>URL:</strong> <a href="http://localhost:8080/job/Cypress-CI-CD/" target="_blank" style="color: #FFA07A; text-decoration: underline;">
      http://localhost:8080/job/Cypress-CI-CD/
    </a> <span style="color:#ccc; font-size: 0.9rem;">(Local access only)</span></li>
  </ul>

  <h3 style="color:#FF6F61; margin-top: 20px;">⚙️ Pipeline Steps</h3>
  <ol style="font-size: 1rem; background: #2a2a2a; padding: 15px 20px; border-radius: 10px; box-shadow: inset 0 0 10px #FF6F61;">
    <li>🔄 Pull latest code from GitHub repository</li>
    <li>📦 Install dependencies with <code>npm install</code></li>
    <li>🧪 Execute Cypress tests using <code>npx cypress run</code></li>
    <li>📁 Archive test reports and screenshots</li>
  </ol>

  <h3 style="color:#FF6F61; margin-top: 20px;">📸 Jenkins Job Screenshot</h3>
  <p style="font-size: 0.9rem; color: #bbb;">
    (Example screenshot of Jenkins job dashboard and console output)
  </p>
  <div style="text-align:center; margin-top: 10px;">
    <img src="docs/jenkins-job-dashboard.png" alt="Jenkins Job Dashboard Screenshot" style="max-width:100%; border-radius: 12px; box-shadow: 0 6px 12px rgba(255, 111, 97, 0.6);" />
  </div>

  <p style="margin-top: 25px; font-style: italic; font-size: 0.95rem; color: #eee;">
    This Jenkins integration demonstrates a professional CI/CD pipeline for automated testing — a key skill in modern DevOps and quality assurance workflows.
  </p>
</div>
