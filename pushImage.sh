
echo "$DOCKER_TOKEN" | docker login docker.pkg.github.com  -u "$DOCKER_USERNAME" --password-stdin

docker tag my-test docker.pkg.github.com/janniclas/referee-coordinator/app:1.0

docker push docker.pkg.github.com/janniclas/referee-coordinator/app:1.0