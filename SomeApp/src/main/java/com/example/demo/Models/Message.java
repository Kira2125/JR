package com.example.demo.Models;

import javax.persistence.*;

@Entity
@Table(name = "messages")
public class Message {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="text")
    private String text;

    public Message(String text) {
        this.text = text;
    }



    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }
}
