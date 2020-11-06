import React, { Component } from 'react';
import '../../Assets/App.css'

import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'

class Home extends Component{
    render(){
        return(
           <div>
            <Jumbo/>
            <Cards/>

           </div> 
        )
    }
}

function Jumbo(props){
    return(
        <Jumbotron className="home-jumbo" fluid>
        <Container >
            <h1 className= "home-text">Welcome to the Muslim League</h1>
            <p className= "home-text">
            Uniting Muslim Atheletes across CT
            </p>
        </Container>
        </Jumbotron>
    )
}

function Cards(props){
    return(
        <CardGroup className="home-cards">
            <Card>
            <Card.Header as="h5">Salam</Card.Header>
            <Card.Body>
                <Card.Text>
                Welcome to the CT Muslim League.
                We are a muslim foundation and our mission is to unite 
                muslim atheletes across the state through organizing competitive islamic sports leagues.
                </Card.Text>
            </Card.Body>
            </Card>
            <Card>
            <Card.Header as="h5">2021 Season Coming Soon </Card.Header>
            <Card.Body>
                <Card.Title>Join us for the league premiere!</Card.Title>
                <Card.Text>
                Inshallah we will be launching our first adult basketball season in January. First 6 teams to join will play.
                </Card.Text>
            </Card.Body>
            </Card>
        </CardGroup>
    )
}

export default Home;