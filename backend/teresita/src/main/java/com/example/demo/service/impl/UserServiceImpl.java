package com.example.demo.service.impl;

import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Service;
import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.UserService;

@Service
public class UserServiceImpl implements UserService{

	
	UserRepository userRepository;
	
	public UserServiceImpl(UserRepository userRepository) {
		this.userRepository = userRepository;
	}
	
	public List<User> findAll(){
		return userRepository.findAll();
	}
	
	public Optional<User> findById(Integer id) {
		return userRepository.findById(id);
	}
	
	
	@Override
	public User createUser(User user) {	
		user.setId(null);
		// user.setRole( new Role(1) );
		// TODO encriptar password
		
		if( userRepository.existsByEmail(user.getEmail()) ) {
			throw new IllegalStateException("User exist with email " + user.getEmail());
		}
					
		return userRepository.save(user);
	}
	
	@Override
	public List<User> getAllActiveUsers() {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public List<User> getAllInactiveUsers() {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public List<User> getAllUsers(boolean isActive) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public User updateUser(User newUser, Integer id) {
		Optional<User> user = findById(id);	
		if(user.isPresent()) {
			user.get().setNumber(newUser.getNumber());
			user.get().setName(newUser.getName());
			user.get().setPassword(newUser.getPassword());
			return userRepository.save(user.get());
		}else {
			return createUser(newUser);
		}
	}
	
	@Override
	public void deleteUser(Integer id) {
		
		Optional<User> user = findById(id);	
		if(user.isPresent()) {
			user.get().setActive(false);
			
			userRepository.save(user.get());
		}
		
	}

	@Override
	public Optional<User> findByEmail(String email) {
		return userRepository.findByEmail(email);
	}

	@Override
	public Boolean login(User user) {
		Optional<User> optionalUser = findByEmail(user.getEmail());
		if(optionalUser.isPresent()) {
			User existingUser = optionalUser.get();
			if( existingUser.getEmail().equals(user.getEmail())  && existingUser.getPassword().equals(user.getPassword() )) {
				return true;
			}
		}
		return false;
	}
}
