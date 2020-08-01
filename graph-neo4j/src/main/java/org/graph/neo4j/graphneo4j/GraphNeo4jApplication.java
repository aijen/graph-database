package org.graph.neo4j.graphneo4j;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@EnableDiscoveryClient
@SpringBootApplication
public class GraphNeo4jApplication {

    public static void main(String[] args) {
        SpringApplication.run(GraphNeo4jApplication.class, args);
    }

}
