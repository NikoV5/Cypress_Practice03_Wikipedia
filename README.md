# Prerequisites
After cloning the repository, you need to install Node Package Manager (NPM), Cypress and cypress-real-events within the framework CLI

[NPM Link to cypress-real-events](https://www.npmjs.com/package/cypress-real-events)

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

## Why do we need cypress-real-events dependency?
Cypress default events are simulated. That means that all events like cy.click or cy.type are fired from javascript. That's why these events will be untrusted (event.isTrusted will be false) and they can behave a little different from real native events. But for some cases, it can be impossible to use simulated events, for example, to fill a native alert or copy to the clipboard. This plugin solves this problem.

## Running the cypress test runner

```bash
npx cypress open
```
