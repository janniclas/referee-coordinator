docker build -t my-test -f Dockerfile.test .
docker run -e CI=true my-test npm run test