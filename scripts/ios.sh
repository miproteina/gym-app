#!/bin/bash
LIP=$(ipconfig getifaddr en0)

echo "🍦 Starting local development to ios device - ensure local dev server is running already"
echo "🏗️ Type checking and building for development..."
yarn run build
echo "🔃 Capacitor installation, podfile installation, sync and copy to app distribution folders..."
yarn cap sync ios
echo "🏃 Select an iOS device to run the build at local ip address ${LIP} on..."
eval "yarn cap run ios --livereload-url=http://${LIP}:3000  --external --mode development"
