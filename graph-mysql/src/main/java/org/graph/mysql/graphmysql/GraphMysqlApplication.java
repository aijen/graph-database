package org.graph.mysql.graphmysql;

import org.graph.mysql.graphmysql.entities.Schedule;
import org.graph.mysql.graphmysql.repository.ScheduleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

import java.time.LocalDateTime;

@EnableDiscoveryClient
@SpringBootApplication
public class GraphMysqlApplication implements CommandLineRunner {

    @Autowired
    private  ScheduleRepository scheduleRepository;
    public static void main(String[] args) {
        SpringApplication.run(GraphMysqlApplication.class, args);


    }

    @Override
    public void run(String... args) throws Exception {
        
    	for(int i=0;i<101;i++)
            scheduleRepository.save(new Schedule(i*1L,"country"+i, "* * * * *", LocalDateTime.now(), LocalDateTime.now()));

    }
}
