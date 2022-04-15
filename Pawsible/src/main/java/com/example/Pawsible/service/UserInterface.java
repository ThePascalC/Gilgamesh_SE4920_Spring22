package com.example.Pawsible.service;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

public interface UserInterface {
        UserDetails loadUserByUsername(String username) throws UsernameNotFoundException;
}
