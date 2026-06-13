package jar.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import jar.model.User;

import java.util.Optional;

public interface UserRepo extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String email);
}
