# Initialize Guide
---
## **Prerequisites**

Before you start, ensure you have the following installed:

- **Node.js** (v18+ recommended)  
- **npm** (comes with Node.js)  
- **Electron CLI** (installed as a dev dependency)  
- **Electron Forge CLI** (for packaging & making installers)

Check installation:
```bash
node -v
npm -v
```
---
## Installation
Clone the respository and install the dependencies. To install the dependencies, you need to type this in the terminal. 
```bash
npm install
```
---
## Development
Run the app in development mode:
```bash
npm start
```
- This will display the window without you building the entire ``.exe``
---
## Packaging and Distribution
Electron Forge allows you to package or make installers for your app.

### Packaging (Standalone app)
```bash
npm run package
```
- Generates a standalone app in the ``out/`` folder.

## Make (installers)
```bash
npm run make
```
- Output located in out/make/
---
*Happy coding!*