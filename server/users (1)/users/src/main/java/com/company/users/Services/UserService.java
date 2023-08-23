package com.company.users.Services;

import com.company.users.Model.User;
import com.company.users.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.ArrayList;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    public  List<User> getAllUsers(){
        List<User> users = new ArrayList<>();
        userRepository.findAll().forEach(users::add);
        return users;
    }
    public User createUser(User user){
        userRepository.save(user);
        return user;
    }
}