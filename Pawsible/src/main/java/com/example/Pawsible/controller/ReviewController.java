package com.example.Pawsible.controller;

import com.example.Pawsible.model.Park;
import com.example.Pawsible.model.ParkReviewInfo;
import com.example.Pawsible.model.Review;
import com.example.Pawsible.repository.ParkRepository;
import com.example.Pawsible.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Set;

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

    @PostMapping("review")
    public ResponseEntity createReview(@RequestBody Review review) throws URISyntaxException {
        Review savedReview = reviewRepository.save(review);
        return ResponseEntity.created(new URI("/reviews/" + savedReview.getId())).body(savedReview);
    }
    @GetMapping("reviewInfo")
    public Set<ParkReviewInfo> getParkReviewInfo(@RequestParam Long park_id){
        return reviewRepository.getParkInformation(park_id);
    }

    @GetMapping("count")
    public int getReviewCount(){
        return reviewRepository.getReviewCount();
    }

}
