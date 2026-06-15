package jar.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.security.autoconfigure.SecurityProperties.User;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import jar.dto.UserData;
import jar.repo.UserRepo;

@RestController
public class Signup {

    @Autowired
    UserRepo db;

    @PostMapping("/signup")
    public String m1(@RequestBody UserData request) {
        User d = new User();
        d.setName(request.getName());
        d.setEmail(request.getEmail());
        d.setPassword(request.getPassword());

        db.save(d);
        return " user created sucess ✅" + request.getEmail();

    }

}
