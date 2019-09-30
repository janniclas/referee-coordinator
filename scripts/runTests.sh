docker build -t my-test -f scripts/Dockerfile.test .
docker run -e CI=true my-test npm run test
