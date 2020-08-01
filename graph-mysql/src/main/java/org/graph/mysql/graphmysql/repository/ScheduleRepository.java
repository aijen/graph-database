package org.graph.mysql.graphmysql.repository;

import org.graph.mysql.graphmysql.entities.Schedule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("*")
@RepositoryRestResource
public interface ScheduleRepository extends JpaRepository<Schedule, Long> {
}
