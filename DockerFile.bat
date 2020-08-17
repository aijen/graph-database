docker rm -f master
docker rm -f mysqlserver
docker rm -f webserver
docker rm -f jenkins-blueocean
docker run -d --name master --publish=7474:7474 --publish=7687:7687 --volume=$HOME/neo4j/data:/data --volume=$HOME/neo4j/logs:/logs   -e NEO4J_AUTH=none --restart=always neo4j:latest
docker run -d --name mysqlserver -e MYSQL_ROOT_PASSWORD=root --restart=always mysql
docker run -d --publish=8083:80 --name webserver --volume=C:\Users\jenna\Documents\Projet\coronagraph\graph-front\src\main\resources:/usr/share/nginx/html --restart=always nginx

docker container run --name jenkins-blueocean --detach --network jenkins --env DOCKER_HOST=tcp://docker:2376 --env DOCKER_CERT_PATH=/certs/client --env DOCKER_TLS_VERIFY=1 --publish 8080:8080 --publish 50000:50000 --volume jenkins-data:/var/jenkins_home --volume jenkins-docker-certs:/certs/client:ro --restart=always jenkinsci/blueocean
