package com.example.Pawsible.repository;

import com.example.Pawsible.model.ERole;
import com.example.Pawsible.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(ERole name);
}
