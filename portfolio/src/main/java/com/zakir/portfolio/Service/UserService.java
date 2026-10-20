package com.zakir.portfolio.Service;

import com.zakir.portfolio.DTO.LoginResponse;
import com.zakir.portfolio.Entity.User;
import com.zakir.portfolio.Repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository,
                       PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public LoginResponse login(String email, String password) {

        User user = userRepository.findByEmail(email).orElse(null);

        if (user == null) {
            return new LoginResponse(false, "Invalid email or password");
        }

        if (!passwordEncoder.matches(password, user.getPassword())) {
            return new LoginResponse(false, "Invalid email or password");
        }

        return new LoginResponse(true, "Login successful");
    }
}