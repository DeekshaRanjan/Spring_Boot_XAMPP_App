package com.example.SpringBootXAMPPApp;

import java.util.List;

public interface UserService {
    List<User> getAllUsers();
    User saveUser(User user);
    // Add other methods
}
