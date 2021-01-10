package com.example.demo.Controller;

import com.example.demo.Exceptions.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("message")
public class MessageController {
    private int counter = 4;
    public List<Map<String, String>> messages = new ArrayList<Map<String, String>>() {{
        add(new HashMap<String, String>(){{ put("id", "1"); put("text", "First message"); }});
        add(new HashMap<String, String>(){{ put("id", "2"); put("text", "Second message"); }});
        add(new HashMap<String, String>(){{ put("id", "3"); put("text", "Third message"); }});
    }
    };

    @GetMapping
    public List<Map<String, String>> index() {
        return messages;
    }

    @GetMapping("{id}")
    public Map<String, String> getOne(@PathVariable String id) {
        return getMessage(id);
    }

    private Map<String, String> getMessage(String id) {
        return messages.stream().filter(element -> element.get("id").equals(id)).findFirst().orElseThrow(NotFoundException::new);
    }

//    @GetMapping("create")
//    public void create() {
//
//    }

    @PostMapping
    public Map<String, String> create(@RequestBody Map<String, String> message) {
        message.put("id", String.valueOf(counter++));
        messages.add(message);
        return message;
    }

    @PatchMapping("{id}")
    public Map<String, String> update(@PathVariable String id, @RequestBody Map<String, String> message) {
        Map<String, String> messageFromDB = getMessage(id);

        messageFromDB.putAll(message);
        messageFromDB.put("id", id);

        return messageFromDB;
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable String id){
        Map<String, String> message = getMessage(id);

        messages.remove(message);
    }

}
