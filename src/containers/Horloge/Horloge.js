import React, { Component, Fragment } from 'react'
import classes from './Horloge.module.css';


class Horloge extends Component {
    state = {
        date: new Date(),
        compteur: 1
    } 
    timer = ()=>{
        this.setState(
            { date: new Date(), compteur: this.state.compteur+=1}
            
        )
    }
    componentDidMount() {
        setInterval(() => this.timer(), 1000)

    }
    render() {
        const { date } = this.state
        const {compteur} = this.state
       
        return (
            <Fragment>
                <h1 className= {classes.monTitre}>Hello Il est : {date.toLocaleTimeString()}</h1>
                <h2 style={{backgroundColor:"yellowgreen", color:"white"}}>Compteur: {compteur}</h2>
            </Fragment>
        )
    }
}
export default Horloge;