# Corona Virus World Mater

il s'agit d'un projet qui permet de sauvegarder les données du fournisseurs world mater corona virus .
En temre technique le projet se base sur l'architecture microservice et l'utilisation de maven

## Architecture technique 
le projet sur base sur  µServices :

### graph-conf : 

µService  y compris un ensemble de fichier properties pour initiliser des variables qui change d'état durant le cycle de vie de l'application

### graph-core : 

µService dont le but est de mêttre en place toute les class Utils et les design pattern pour assurer les adapters(Adapter le noeud neo avec le metagraph)

### graph-front

µService contient l'application Angular qui tourne sur un serveur web nginx sur le port 8083 en mode ng serve sur 4200

### graph-mysql

µService  assure la communication entre la base de données mysql et le projet en question 8082

### graph-neo4j

µService maintient la connection enter la base de données neo4j et le projet en question 8084

### graph-plugin

µService qui permet de réaliser des procédures stocké sur neo4j et les installées dans le SGBD


##Industrialisation et plateforme

##docker 
l'utilisation de docker pour démarrer la base de données mysql et neo4j
sudo su 

copie les commandes du fichier DockerFile 

##maven

utile pour la génration des jar 
