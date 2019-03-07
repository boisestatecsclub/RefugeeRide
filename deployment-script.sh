#!/bin/bash
# Deployment Script

echo "Deploying..."
rm -rf RefugeeRide

git clone https://github.com/boisestatecsclub/RefugeeRide.git
cd RefugeeRide
npm install
cd front-end
npm install
ng build
cd ..
npm start
