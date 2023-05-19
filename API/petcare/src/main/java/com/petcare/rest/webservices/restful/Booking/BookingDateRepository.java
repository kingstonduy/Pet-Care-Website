package com.petcare.rest.webservices.restful.Booking;

import com.petcare.rest.webservices.restful.user.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BookingDateRepository extends JpaRepository<BookingDate,Integer> {


    List<BookingDate> findByUser(User user);
}
