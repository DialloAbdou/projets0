import React,{Component} from 'react'
import AgePersonne from './AgePersonne/AgePersonne'
// import Familles from '../../tools/Familles.json'
import  classes from './Personne.module.css';

//  const famille = {
//     membre1 :{
//         nom:'diallo',
//         prenom : 'Abdou',
//         age:20,
//         adresse: 'Allee Réaumure'
//     },
//     membre2 :{
//      nom:'Barry',
//      prenom : 'Mamadou',
//      age:30,
//      adresse: 'Martir allée Réaumure'
//     },

//     membre3  :{
//      nom:'Bah',
//      prenom : 'Eric',
//      age:10,
//      adresse: 'Martin Tuming'
//      }
 
//  }


class Personne extends Component{

  
     
    // state={
    //     famille 
    // }
  
    
        
   
    
 
    render() {
        // const familles = JSON.stringify(Familles)
       
        const {nom} = this.props;
        const {prenom}= this.props;
        const {adresse} = this.props
        const {age} = this.props;
        const {sexe}= this.props
        const {ajoutAge}= this.props

        //  const {famille} = this.state
        
        return (
            <>
            <h1>Liste de Personne</h1>
            <h2 className={classes.monTitre}> nom: {nom}</h2>
            <h2> prenom: {prenom}</h2>
            <h2>adresse :{adresse}</h2>
            <AgePersonne
             age = {age}
             ajoutAge ={ajoutAge}
            sexe ={sexe}/>
            </>
        )
    }
}
export default Personne;