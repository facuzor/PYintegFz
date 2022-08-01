
package com.portfolio.mgb.Interface;

import com.portfolio.mgb.Entity.Persona;
import java.util.List;



public interface IPersonaService {
    //traer una lista persona
public List<Persona> getPersona();

// guardar un objeto del tipo persona
public void savePersona(Persona persona);

//Eliminar un usuario, buscar por id
public void delitePersona(long id);

//buscar una persona por id
public Persona findPersona(long id);
}
