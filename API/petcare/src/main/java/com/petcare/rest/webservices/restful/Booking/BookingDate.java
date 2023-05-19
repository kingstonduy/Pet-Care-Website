package com.petcare.rest.webservices.restful.Booking;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.petcare.rest.webservices.restful.user.User;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;


@Data
@Entity
@Table(name ="booking")
public class BookingDate {

    @Id
    @GeneratedValue
    Integer id;
    LocalDate Date;

    String phoneNumber;

    String typePet;
    @JsonIgnore
    @ManyToOne
    @JoinColumn(name ="user_id")
    User user;
}
