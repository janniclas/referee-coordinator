
echo "$DOCKER_TOKEN" | docker login -u "$DOCKER_USERNAME" --password-stdin

docker tag app docker.pkg.github.com/janniclas/referee-coordinator/app:1.0

push docker.pkg.github.com/janniclas/referee-coordinator/app:1.0