package com.paychex.attendance.entity;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Attendance {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private LocalDateTime checkIn;
    private LocalDateTime checkOut;

    @ManyToOne
    private Employee employee;

    // Getters and setters
}
