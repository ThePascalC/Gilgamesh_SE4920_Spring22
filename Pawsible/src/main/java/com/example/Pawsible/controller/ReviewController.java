package com.example.Pawsible.controller;

import com.example.Pawsible.model.Park;
import com.example.Pawsible.model.Review;
import com.example.Pawsible.repository.ParkRepository;
import com.example.Pawsible.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

//    @PostMapping("review")
//    public Review createReview(@RequestParam(required = true) ) {}
    
}
