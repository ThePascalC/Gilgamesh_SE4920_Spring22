package com.example.Pawsible.repository;

import com.example.Pawsible.model.ParkReviewInfo;
import com.example.Pawsible.model.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Set;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Long> {
    @Query(value = "select SUM(r.population) / COUNT(r.population) as population, SUM(r.quality) / COUNT(r.quality) as quality, SUM(r.rating) / COUNT(r.rating) as rating from reviews r where (r.park_id = :id)", nativeQuery = true)
    Set<ParkReviewInfo> getParkInformation(@Param("id") Long id);

}
