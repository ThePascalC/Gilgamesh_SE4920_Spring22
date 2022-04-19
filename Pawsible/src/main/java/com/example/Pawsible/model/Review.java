package com.example.Pawsible.model;

import javax.persistence.*;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "reviews")
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;


    @Column(name="park_id")
    private Long park_id;

//    @Column(name = "park_id")
//    private long park_id;

    @Column(name = "rating")
    private double rating;

    @Column(name = "population")
    private int population;

    @Column(name = "quality")
    private int quality;


        public long getPark_id() {
        return park_id;
    }

    public void setPark_id(long park_id) {
        this.park_id = park_id;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }
    
    public double getRating() {
        return rating;
    }

    public void setRating(double rating) {
        this.rating = rating;
    }

    public int getPopulation() {
        return population;
    }

    public void setPopulation(int population) {
        this.population = population;
    }

    public int getQuality() {
        return quality;
    }

    public void setQuality(int quality) {
        this.quality = quality;
    }
}
