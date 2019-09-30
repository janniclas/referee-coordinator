
docker login -u "$DOCKER_USERNAME" --password-stdin "$DOCKER_TOKEN"

docker tag app docker.pkg.github.com/janniclas/referee-coordinator/app:1.0

push docker.pkg.github.com/janniclas/referee-coordinator/app:1.0