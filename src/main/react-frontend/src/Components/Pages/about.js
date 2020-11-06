import Container from 'react-bootstrap/Container'
import React, { Component } from 'react';

class About extends Component{
    render(){
        return(
           <div> 
           <h2 className="title"> Muslim League </h2>
           <Container>
           <p className="about">
            The Muslim League is an Inturmural basketball league for Muslim in Connecticut.
            Founded in 2020, Muslim League is devoted to giving the community a chance to gather as brother and play basketball as a means to stay united.
            Our main objective is to fulfill the need of organized athletics in our area.
           </p>
           </Container>
           </div> 
        )
    }
}

export default About;