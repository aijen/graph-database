package com.eureka.service.grapheureka;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer
public class GraphEurekaApplication {

    public static void main(String[] args) {
        SpringApplication.run(GraphEurekaApplication.class, args);
    }

}
