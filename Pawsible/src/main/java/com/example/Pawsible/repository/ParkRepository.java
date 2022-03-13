package com.example.Pawsible.repository;

import com.example.Pawsible.service.Park;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ParkRepository extends JpaRepository<Park, Long> {
}
