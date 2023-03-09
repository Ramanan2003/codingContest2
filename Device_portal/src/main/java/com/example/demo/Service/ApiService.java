
package com.example.demo.Service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.demo.Model.Device;
import com.example.demo.Repository.ApiRepo;



@Service
public class ApiService {
	@Autowired
	ApiRepo repository;

	public String addGadgetsData(Device device) {
		repository.save(device);
		return "Gadgets Data is Added";
	}

	public List<Device> getGadgetsData(){
		return repository.findAll();
	}

	public  String updateChildData(Device device) {
		repository.save(device);
		return "GadgetsData is Updated";
	}
	public String deleteById(int id) {
		repository.deleteById(id);
		return "Gadgets no "+id+" is Deleted";
	}

	//sorting
	public List<Device> getChildSorted(String field){
		return repository.findAll(Sort.by(Sort.Direction.DESC,field));
	}

	//pagination
	public List<Device> getGadgetsWithPagination( int offset,int pageSize){
		Page<Device> page=repository.findAll(PageRequest.of(offset, pageSize));
		return page.getContent();
	}
	//sorting and paging
	public List<Device> getGadgetsWithPagingAndSorting(int offset,int pageSize,String field){
		PageRequest paging =PageRequest.of(offset, pageSize,Sort.by(field));
		Page<Device> page = repository.findAll(paging);
		return page.getContent();
	}
}

