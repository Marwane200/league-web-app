import React, { Component } from 'react';

import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import '../../Assets/Schedule.css'

class Schedule extends Component{
    render(){
        return(
           <div>
           <h2 className="title"> 2020 Summer League Schedule </h2>
            <WeeklyGames/>
           </div> 
        )
    }
}

class WeeklyGames extends React.Component{
    state = {
        loading: true,
        items: []
    }

    async componentDidMount(){
        const response = await fetch('/api/games');
        const data = await response.json();
        this.setState({
            items: data,
            loading: false
        });
    };


    render(){
            var { items } = this.state;
            if (this.state.loading){
                return(<div>loading...</div>)
            }
            
            return(
                <div>
                <Container className = "week-container">
                <h3 className="bg-dark text-white text-center" > Weekly Games </h3>
                <Row>
                    <Col className="games">
                        {items.map( item => (
                            <Card className="games-list" key= {item.gameId}>
                                    <Card.Header as="h5"> GAME {item.gameId} </Card.Header>
                                    <Card.Body>
                                        <Card.Text as="h6">
                                            {item.team1} vs {item.team2}
                                        </Card.Text>
                                        <div>{item.date} | {item.start}</div>
                                        <div>{item.court}</div> 
                                    </Card.Body>
                            </Card>
                        ))}
                    </Col>
                </Row>
                </Container>
                </div>
            )
    }
}

export default Schedule;