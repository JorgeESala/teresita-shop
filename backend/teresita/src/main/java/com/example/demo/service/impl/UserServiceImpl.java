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
	
	public Optional<User> findUserById(Integer id) {
		return userRepository.findUserById(id);
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
		Optional<User> user = findUserById(id);	
		newUser.setId(id);
		if(user.isPresent()) {
			return userRepository.save(newUser);
		}else {
			return createUser(newUser);
		}
	}
	
	@Override
	public void deleteUser(Integer id) {
		
		Optional<User> user = findUserById(id);	
		if(user.isPresent()) {
			user.get().setActive(false);
			
			userRepository.save(user.get());
		}
		
	}

	@Override
	public User findByEmail(String email) {
		// TODO Auto-generated method stub
		return null;
	}
}
