
package com.portfolio.mgb.Security.Service;

import com.portfolio.mgb.Security.Entity.Rol;
import com.portfolio.mgb.Security.Enums.RolNombre;
import com.portfolio.mgb.Security.Repository.IRolRepository;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional //persistencia, permite mantener datos en caso de fallo.
public class RolService {
    @Autowired
    IRolRepository irolRepository;
    
    public Optional<Rol> getByRolNombre(RolNombre rolNombre){
        return irolRepository.findByRolNombre(rolNombre);
    }
    public void save(Rol rol){
        irolRepository.save(rol);
    }
    
}
