

package com.example.demo.Controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.Device;
import com.example.demo.Service.ApiService;







@RestController
public class ApiController {

	@Autowired
	ApiService service;
	@CrossOrigin(origins = "*")
	@GetMapping("/gadgets")
	public List<Device> gadgetsData(){
		return service.getGadgetsData();
	}
	@CrossOrigin(origins = "*")
	@PostMapping("/postgadgets")
	public String addGadgetsData(@RequestBody Device device) {
		service.addGadgetsData(device);
		return "Product Added "+device.getId();
	}
	@CrossOrigin(origins = "*")
	@PutMapping("/gadgets")
	public String update(@RequestBody Device device) {
		return service.addGadgetsData(device);
	}
	@CrossOrigin(origins = "*")
	@DeleteMapping("/gadgets")
	public String delete(@RequestParam int id) {
		return service.deleteById(id);
	}
	//Sorting
	@CrossOrigin(origins = "*")
	@GetMapping("/gadgets/{field}")
	public List<Device> gadgetsWithSort(@PathVariable String field){
		return service.getChildSorted(field);
	}
	 //pagination	
	@CrossOrigin(origins = "*")
	@GetMapping("/gadgets/{offset}/{pageSize}")
	public List<Device> gadgetsWithPagination(@PathVariable int offset,@PathVariable int pageSize){
		return service.getGadgetsWithPagination(offset,pageSize);
	}


	//sorting and paging
	@GetMapping("/gadgets/{offset}/{pageSize}/{field}")
	public List<Device> getgadgetsWithPaginationAndSorting(@PathVariable int offset,@PathVariable int pageSize,@PathVariable String field){
		return service.getGadgetsWithPagingAndSorting(offset,pageSize,field);
	}
}