# Prerequisites
After cloning the repository, you need to install Node Package Manager (NPM) and Cypress within the framework CLI

## Installing Node Package Manager within framework CLI

```bash
npm init -y
```

## Installing Cypress within the framework CLI

```bash
npm install cypress -D
```

## Installing Cypress-Real-Events dependency within the framework CLI

```bash
npm install cypress-real-events
```

If the cypress-real-events dependency import doesnt show up after cloning (It should show up), Register new commands by adding this to your cypress/support/e2e.js file.

```bash
import "cypress-real-events";
```

## Running the cypress test runner

```bash
npx cypress open
```
