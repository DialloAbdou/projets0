
import React from 'react'
const agePersonne = ({age, sexe,ajoutAge})=>{
    let date = new Date();
    let annee = date.getFullYear();
    return (
        <>
        <p>
           Age : {age} - ({annee - age})
           <button onClick={ajoutAge} style= {{margin:"5px"}}>AddAge</button>
        </p>
        <p>Sexe : {sexe ? "Homme" : "Femme"}</p>
        </>

       
    )
}

export default agePersonne