# Project Documentation

## Installing

npm install<br>
node : 21.5.0

## Project Structure

This project is a React application written in TypeScript. It uses npm for package management, and it's configured with ESLint for linting and PostCSS for processing CSS. The project structure is as follows:

- `.eslintrc.json`: This file contains the configuration for ESLint.
- `README.md`: This file typically contains information about the project, how to run it, and other related documentation.
- `package.json`: This file contains metadata about the project and lists its dependencies.
- `public/`: This directory contains static files that are not processed by Webpack.
- `src/`: This directory contains the source code of the application.
  - `App.tsx`: This is the main component of the React application.
  - `components/`: This directory contains reusable React components.
  - `hooks/`: This directory contains custom React hooks. For example, `useDataFetching` is a hook for fetching data.
  - `index.css`: This file contains global CSS styles.
  - `index.tsx`: This is the entry point of the React application.
  - `layout/`: This directory contains layout components.
  - `pages/`: This directory contains the page components.
  - `router/`: This directory contains the routing configuration.
  - `services/`: This directory contains service functions for fetch request.
  - `tests/`: This directory contains test files.
  - `types/`: This directory contains TypeScript type definitions.
  - `utils/`: This directory contains component logger.
- `tailwind.config.js`: This file contains the configuration for Tailwind CSS.
- `tsconfig.json`: This file contains the configuration for the TypeScript compiler.

## Running the Project

To run the project, you typically use npm scripts defined in the `package.json` file. For example, you might run `npm start` to start the development server, or `npm run build` to build the project for production.

## Testing

Tests are located in the `tests/` directory. You can run them using a command like `npm test`.

## Building

To build the project for production, you can use a command like `npm run build`. This will create a `build/` directory with the compiled and minified code.

Please refer to the `README.md` and `package.json` files for more specific instructions and information about the project.
