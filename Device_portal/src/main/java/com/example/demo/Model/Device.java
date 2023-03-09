
package com.example.demo.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
@Entity

public class Device {

	@Id
	private int id;
	private String GadgetName;
	private float price;
	private String Brand;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getGadgetName() {
		return GadgetName;
	}
	public void setGadgetName(String gadgetName) {
		GadgetName = gadgetName;
	}
	public float getPrice() {
		return price;
	}
	public void setPrice(float price) {
		this.price = price;
	}
	public String getBrand() {
		return Brand;
	}
	public void setBrand(String brand) {
		Brand = brand;
	}
	@Override
	public String toString() {
		return "Gadgets [id=" + id + ", GadgetName=" + GadgetName + ", price=" + price + ", Brand=" + Brand + "]";
	}
	
	
	
	
}


