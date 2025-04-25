# Supplier AI Assistant

## Overview

Supplier AI Assistant leverages the Vercel AI SDK to provide intelligent supplier search and risk assessment solutions in a modern, serverless web environment.

## Setup Instructions

- Install dependencies:
  ```
  npm install
  ```
- Run the development server:
  ```
  npm run dev
  ```
- Build and start for production:
  ```
  npm run build
  npm start
  ```

## Architecture and Design

- Built with Next.js and React for a modern, serverless web application.
- Uses the edge runtime for API routes to minimize latency.
- Integrates the AI-sdk libraries (@ai-sdk/react and @ai-sdk/openai) for conversational AI.
- Utilizes Tailwind CSS for streamlined styling.

## Tool Function: searchSuppliersTool

- Implements a supplier search by industry, category, and risk parameters.
- Validates input parameters using Zod.
- Provides filtered supplier data by invoking the searchSuppliers function.
- Integrates seamlessly with AI-powered interaction via the chat API.
