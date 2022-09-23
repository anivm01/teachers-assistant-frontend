echo "Switching to branch main"
git checkout main

echo "Building app..."
npm run build

echo "Deploying files to server..."
scp -r build/* anivm01@143.110.221.47:/var/www/teachersassistant.site

echo "Done!"
