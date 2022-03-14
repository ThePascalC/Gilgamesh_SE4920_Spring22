package com.example.Pawsible.controller;

import com.example.Pawsible.model.Park;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.Pawsible.repository.ParkRepository;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("api/")
public class ParkController {
    @Autowired
    ParkRepository parkRepository;

    @GetMapping("parks")
    public List<Park> getAllParks(){
        return this.parkRepository.findAll();
    }

}
