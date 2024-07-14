#!/bin/bash
LIP=$(ipconfig getifaddr en0)

echo "🍦 Starting local development to android device - ensure local dev server is running already"
echo "🏗️ Type checking and building for development..."
pnpm run build
echo "🔃 Capacitor installation, podfile installation, sync and copy to app distribution folders..."
npx cap sync android --no-build
echo "🏃 Select an Android device to run the build at local ip address ${LIP} on..."
eval "npx cap run android --livereload-url=http://${LIP}:3000  --external --mode development"
