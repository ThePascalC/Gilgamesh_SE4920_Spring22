package com.example.Pawsible.controller;

import com.example.Pawsible.model.User;
import com.example.Pawsible.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/")
public class AdminController {
    @Autowired
    UserRepository userRepository;

    @GetMapping("admin/users")
    public List<User> getAllUsers(){
        return userRepository.findAll();
    }
}
