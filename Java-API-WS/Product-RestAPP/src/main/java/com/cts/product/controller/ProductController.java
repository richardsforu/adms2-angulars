package com.cts.product.controller;

import java.util.List;

import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cts.product.dao.ProductDao;
import com.cts.product.entity.Product;

@RestController
@RequestMapping("/api/products")
@CrossOrigin
public class ProductController {

	@Autowired
	private ProductDao prodDao;

	@GetMapping
	List<Product> findAll() {
		return prodDao.findAll();
	}

	@GetMapping("/{id}")
	Product findById(@PathVariable("id") int id) {
		return prodDao.findById(id).orElse(null);
	}

	@PostMapping
	Product save(@RequestBody Product product) {
		return prodDao.save(product);
	}

}