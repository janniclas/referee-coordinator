echo "$DOCKER_TOKEN" | docker login docker.pkg.github.com  -u "$DOCKER_USERNAME" --password-stdin

docker tag my-prod docker.pkg.github.com/janniclas/referee-coordinator/"$TRAVIS_BRANCH":"$TRAVIS_BUILD_NUMBER"

docker push docker.pkg.github.com/janniclas/referee-coordinator/"$TRAVIS_BRANCH":"$TRAVIS_BUILD_NUMBER"