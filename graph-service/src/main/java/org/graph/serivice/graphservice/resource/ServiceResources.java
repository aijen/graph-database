package org.graph.serivice.graphservice.resource;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ServiceResources {

	@RequestMapping("/")
	public String getResource() {
		return String.format("Hello Aimen" );
	}
}