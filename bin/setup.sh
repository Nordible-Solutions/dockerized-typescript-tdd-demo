#!/bin/bash

# Install dependencies
npm install

npm install jest -g

# Generate coverage report
npm test

# Generate coverage report
npm run coverage