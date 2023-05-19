package com.petcare.rest.webservices.restful.Booking;


import com.petcare.rest.webservices.restful.user.User;
import com.petcare.rest.webservices.restful.user.UserService;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class BookingDateService {

    BookingDateRepository bookingDateRepository;
    UserService userService;

    public BookingDateService(BookingDateRepository bookingDateRepository, UserService userService) {
        this.bookingDateRepository = bookingDateRepository;
        this.userService = userService;
    }

    public List<BookingDate> getAllBookingDate(){
        return bookingDateRepository.findAll();
    }

    public List<BookingDate> getAllBookingDateByUserName(String username){
        User user = userService.getUserbyUsername(username);
        if(user != null){
            List<BookingDate> bookingDates = bookingDateRepository.findByUser(user);

            return bookingDates;
        }
        return null;

    }

    public void addBookingDate(BookingDate bookingDate){
        bookingDateRepository.save(bookingDate);
    }

    public BookingDate postBookingDate(String username , LocalDate localDate,
                                       String phoneNumber, String typePet){

        User user = userService.getUserbyUsername(username);
        if(user!=null){
            BookingDate bookingDate = new BookingDate();
            bookingDate.setDate(localDate);
            bookingDate.setUser(user);
            bookingDate.setTypePet(typePet);
            bookingDate.setPhoneNumber(phoneNumber);
            bookingDateRepository.save(bookingDate);

            return bookingDate;
        }
        return null;
    }
}
