package org.launchcode.books2borrow.controllers;

import org.launchcode.books2borrow.data.BookRepository;
import org.launchcode.books2borrow.models.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173/", maxAge = 3600)
@RestController
@RequestMapping("Home")
public class HomeController {

    @Autowired
    private BookRepository bookRepository;

    @GetMapping
    public ResponseEntity<?> getAllBooks() {
        List<Book> books = (List<Book>) bookRepository.findAll();
        return new ResponseEntity<>(books, HttpStatus.OK);
    }
}
