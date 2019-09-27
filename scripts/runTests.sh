cd ..
docker build -t my-test -f Dockerfile.test .
docker run my-test