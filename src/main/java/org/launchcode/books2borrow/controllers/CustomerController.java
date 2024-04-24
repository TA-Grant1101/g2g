package org.launchcode.books2borrow.controllers;


import org.launchcode.books2borrow.data.CustomerRepository;
import org.launchcode.books2borrow.models.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:5173/", maxAge = 3600)
@RestController
@RequestMapping("api/customer")
public class CustomerController {

    @Autowired
    private CustomerRepository customerRepository;

    @GetMapping("/delete")
    public ResponseEntity<?> displayCustomer(Authentication authentication){
        int customerId;
        List<Customer> customers = customerRepository.findByEmail(authentication.getName());
        if (!customers.isEmpty()) {
            customerId = customers.get(0).getId();
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(customers, HttpStatus.OK);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> updateCustomer(Authentication authentication, @RequestBody Customer customer, @PathVariable Integer id) {
        int customerId;
        List<Customer> customers = customerRepository.findByEmail(authentication.getName());
        if (!customers.isEmpty()) {
            customerId = customers.get(0).getId();
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        Optional<Customer> customerOptional = customerRepository.findById(id);
        if (customerOptional.isPresent() && (customerOptional.get().getId() == customerId)){

            customerRepository.deleteById(customerId);
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

//    public ResponseEntity<String> registerUser(@RequestBody Customer customer) {
//        Customer savedCustomer = null;
//        ResponseEntity response = null;
//        try {
//            String hashPwd = passwordEncoder.encode(customer.getPwd());
//            customer.setPwd(hashPwd);
//            customer.setCreateDt(String.valueOf(new Date(System.currentTimeMillis())));
//            savedCustomer = customerRepository.save(customer);
//            if (savedCustomer.getId() > 0) {
//                response = ResponseEntity
//                        .status(HttpStatus.CREATED)
//                        .body("Given user details are successfully registered");
//            }
//        } catch (Exception ex) {
//            response = ResponseEntity
//                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
//                    .body("An exception occurred due to " + ex.getMessage());
//        }
//        return response;
//    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteCustomer(Authentication authentication, @PathVariable Integer id) {
        int customerId;
        List<Customer> customers = customerRepository.findByEmail(authentication.getName());
        if (!customers.isEmpty()) {
            customerId = customers.get(0).getId();
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        Optional<Customer> customerOptional = customerRepository.findById(id);
        if (customerOptional.isPresent() && (customerOptional.get().getId() == customerId)){
            customerRepository.deleteById(customerId);
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


    @GetMapping("/hello")
    public String sayHello(){
        return "This should be visible without logging in with Spring Security" ;
    }

    @GetMapping("/testing")
    public String testRouteSayHello() {return "This should only be visible if Spring Security username and password works!"; }

    @GetMapping("/register")
    public String registerTest() {return "This is a get mapping test registration route."; }
}
