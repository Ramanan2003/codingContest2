

package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Model.Device;


public interface ApiRepo extends JpaRepository<Device,Integer> {

}

