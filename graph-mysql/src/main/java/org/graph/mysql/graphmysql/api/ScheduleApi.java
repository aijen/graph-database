package org.graph.mysql.graphmysql.api;

import java.util.List;

import org.graph.mysql.graphmysql.entities.Schedule;
import org.graph.mysql.graphmysql.repository.ScheduleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("*")
@RestController
public class ScheduleApi {
	
	@Autowired
    private  ScheduleRepository scheduleRepository;
	
	@GetMapping("/schedules")
	public List<Schedule> getPizzas() {
		return scheduleRepository.findAll();
	}
	
	@PostMapping("/schedule/update")
	public Schedule updateSchedule(@RequestBody Schedule schedule) {
		System.out.print(schedule);
		return scheduleRepository.save(schedule);
	}
}
