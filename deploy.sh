#!/bin/bash
set -e

# Stop the current process
pm2 stop TON-daily-app || true

# Install dependenciest
npm install
npm run build

# Start the Nextjs app with PM2
pm2 start npm --name TON-daily-app -- start
