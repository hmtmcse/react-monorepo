PROJECT_NAME="react-monorepo"
PACKAGES="packages"
TM_REACT="tm-react"
echo "Welcome to React Mono Repo Project";
echo "-------------------------------------------------------------"
echo "-------------------------------------------------------------"


echo "Cloning TM React Project From GitHub";
if [ -d "$PROJECT_NAME" ]; then
  rm -rf "$PROJECT_NAME"
fi
git clone https://github.com/hmtmcse/react-monorepo.git

cd "$PROJECT_NAME/$PACKAGES"
git clone https://github.com/hmtmcse/tm-react.git  $TM_REACT

cd "$TM_REACT"

echo "Coping Samples";
if [ -d "src/app" ]; then
  rm -rf src/app
fi

if [ -d "./sample/basic" ]; then
      cp -a ./sample/basic src/app
  else
      echo "Unable to Setup Project";
      exit 1
fi

cd ../..

echo "Installing Dependency";
yarn install