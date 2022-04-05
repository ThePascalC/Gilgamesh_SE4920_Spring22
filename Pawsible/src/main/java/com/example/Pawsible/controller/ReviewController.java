package com.example.Pawsible.controller;

import com.example.Pawsible.model.Park;
import com.example.Pawsible.model.Review;
import com.example.Pawsible.repository.ParkRepository;
import com.example.Pawsible.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/")
public class ReviewController {

    @Autowired
    ReviewRepository reviewRepository;

    @GetMapping("review")
    public List<Review> getAllReviews(){
        return this.reviewRepository.findAll();
    }
}
