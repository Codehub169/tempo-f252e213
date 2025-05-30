#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

# Navigate to the directory where the script is located (optional, but good practice)
# cd "$(dirname "$0")"

# Inform the user about the steps
echo "Installing project dependencies..."

# Install dependencies
if [ -f "yarn.lock" ]; then
  yarn install
elif [ -f "package-lock.json" ] || [ -f "package.json" ]; then
  npm install
else
  echo "No lock file found. Please ensure you have yarn.lock or package-lock.json/package.json"
  exit 1
fi

echo "Dependencies installed successfully."

echo "Cleaning previous Next.js cache (if any)..."
rm -rf .next

echo "Starting the development server on port 9000..."

# Run the development server
# The package.json script "dev" is configured to run on port 9000
if [ -f "yarn.lock" ]; then
  yarn dev
else
  npm run dev
fi

echo "Development server is running. Access the application at http://localhost:9000"
