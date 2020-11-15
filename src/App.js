import React,{Component} from 'react'
import Personne from  './components/Personne/Personne.js'
import Horloge from  './containers/Horloge/Horloge'
import './App.css'
class App extends Component {

  state = {

   personnes :[
       {id:1, nom:'Diallo',prenom:'Abdou', addresse: 'allée Reaumure',age: 12, sexe : true},
       {id:2,nom:'Bah',prenom:'Oumou', addresse: 'allée Reaumure',age: 22, sexe:false},
       {id:3,nom:'Barry',prenom:'Amaou',addresse: 'Allées Les Martires', age: 12, sexe:true}
   ]
   
  }
  monAnniversaire = ()=>{
   const newPersonne = [...this.state.personnes];
     newPersonne[0].age++;
     newPersonne[1].age++;
     newPersonne[2].age++;
     this.setState({personnes : newPersonne})

  }
  handleAjoutAge =(numero)=>{
    const index = this.state.personnes.findIndex(elem=>
        {
           return elem.id== numero
        }
      )
    const nouveauPersonne = {...this.state.personnes[index]} // generer une copie de la personne
    nouveauPersonne.age++;
    const newTab = [...this.state.personnes];
    newTab[index] = nouveauPersonne;
    this.setState({personnes:newTab})
    
  }
  
  render() {
    const {personnes } = this.state

    return (
      <>
      <Horloge/>
      <h1>Personne</h1>
     <button onClick= {()=>this.monAnniversaire()}>Anniversaire</button>
       {personnes.map((person)=>{
         return(
           <Personne key={person.id}
             nom={person.nom}
             prenom={person.prenom}
             address={person.address}
             age={person.age}
             ajoutAge={()=> this.handleAjoutAge(person.id)}
             sexe={person.sexe}

       />

         )
       })}
      
   
      </>
    )
  }
}
export default App;



   // <Personne
      //  nom={personnes[0].nom}
      //  prenom={personnes[0].prenom}
      //  address = {personnes[0].address}
      //  age = {personnes[0].age}
      //  ajoutAge = {()=>this.handleAjoutAge(0)}
      //  sexe = {personnes[0].sexe}

      //  />
  
      //  <Personne
      //  nom={personnes[1].nom}
      //  prenom={personnes[1].prenom}
      //  address = {personnes[1].address}
      //  age = {personnes[1].age}
      //  ajoutAge ={()=>this.handleAjoutAge(1)}
      //  sexe = {personnes[1].sexe}
      //  />
      //  <Personne
      //  nom={personnes[2].nom}
      //  prenom={personnes[2].prenom}
      //  address = {personnes[2].address}
      //  age = {personnes[2].age}
      //  ajoutAge ={()=>this.handleAjoutAge(2)}
      //  sexe = {personnes[2].sexe}
      //  />
