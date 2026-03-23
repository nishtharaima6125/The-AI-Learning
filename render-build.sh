#!/bin/bash

# Force npm usage and prevent pnpm
export NPM_CONFIG_PREFER_OFFLINE=true
export NPM_CONFIG_AUDIT=false
export NPM_CONFIG_FUND=false

# Clean any existing pnpm-lock.yaml if it exists
rm -f pnpm-lock.yaml

# Install dependencies with npm
npm install

# Build the project
npm run build
