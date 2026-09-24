# Playwright OrangeHRM Automation Framework

## Overview

This project is a scalable end-to-end automation framework
developed using Playwright and JavaScript.

The framework automates key workflows of the OrangeHRM
Human Resource Management System.

## Application

OrangeHRM

## Technology Stack

- JavaScript
- Playwright
- Node.js
- Git
- GitHub
- GitHub Actions

## Automated Modules

- Login
- Employee Management
- Leave Management
- Search
- API Validation

## Framework Features

- Page Object Model
- Reusable utility methods
- Web-first assertions
- Explicit waits where required
- API validation
- Cross-browser testing
- Parallel execution
- Retry mechanism
- Screenshots on failure
- Trace viewer
- HTML reporting
- GitHub Actions CI/CD

## Project Structure

pages/
tests/
test-data/
utils/
.github/workflows/

## Installation

Clone the repository:

git clone <repository-url>

Install dependencies:

npm install

Install Playwright browsers:

npx playwright install

## Execute Tests

Run all tests:

npx playwright test

Run in headed mode:

npx playwright test --headed

Run Chromium:

npx playwright test --project=chromium

Run Firefox:

npx playwright test --project=firefox

Run WebKit:

npx playwright test --project=webkit

## HTML Report

npx playwright show-report

## CI/CD

The framework is integrated with GitHub Actions.

Tests are automatically executed when code is pushed
to the main branch or when a pull request is created.
