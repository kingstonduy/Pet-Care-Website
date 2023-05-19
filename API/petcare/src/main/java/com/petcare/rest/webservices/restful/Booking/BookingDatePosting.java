package com.petcare.rest.webservices.restful.Booking;


import lombok.Data;

import java.time.LocalDate;

@Data
public class BookingDatePosting {

    String username;

    LocalDate localDate;

    String phoneNumber;

    String typePet;
}
