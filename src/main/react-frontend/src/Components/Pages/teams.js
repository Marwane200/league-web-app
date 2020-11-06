import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import Tab from 'react-bootstrap/Tab'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Table from 'react-bootstrap/Table'

class Teams extends Component{
    render(){
        return(
           <div>
               <h2 className="title"> 2021 Muslim League Roster </h2>
               <TeamsTab/>
           </div> 
        )
    }
}

class TeamsTab extends Component{
    state = {
        loading: true,
        team1: [],
        team2: [],
        team3: [],
        team4: [],
    };
    async componentDidMount(){
        let [team1, team2, team3, team4] = await Promise.all([
            fetch('/api/teams/1').then(res => res.json()),
            fetch('/api/teams/2').then(res => res.json()),
            fetch('/api/teams/5').then(res => res.json()),
            fetch('/api/teams/6').then(res => res.json()),
        ]);
 
        this.setState({ 
            loading: false,
            team1: team1,
            team2: team2,
            team3: team3,
            team4: team4,
        });
    }

    render(){
        if (this.state.loading){
            return(
            <div> loading....</div>
            )
        };
        return(
            <Tab.Container defaultActiveKey="#link1">
            <Row>
                <Col sm={4}>
                <ListGroup>

                    <ListGroup.Item action href="#link1">
                    {this.state.team1[0].teamName}
                    </ListGroup.Item>

                    <ListGroup.Item action href="#link2">
                    {this.state.team2[0].teamName}
                    </ListGroup.Item>

                    <ListGroup.Item action href="#link3">
                    {this.state.team3[0].teamName}
                    </ListGroup.Item>

                    <ListGroup.Item action href="#link4">
                    {this.state.team4[0].teamName}
                    </ListGroup.Item>

                </ListGroup>
                </Col>


                <Col sm={8}>
                <Tab.Content>

                    <Tab.Pane eventKey="#link1">
                    <Table bordered hover>
                    <thead className="thead-dark">
                    <tr>
                        <th scope="col" >Name</th>
                        <th scope="col" >POS</th>
                        <th scope="col" >No.</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.state.team1.map(team =>(
                            <tr key={team.PID}>
                            <td> {team.name} </td>
                            <td> {team.position} </td>
                            <td> {team.number} </td>
                        </tr>
                        ))}
                    </tbody>
                    </Table>
                    </Tab.Pane>

                    <Tab.Pane eventKey="#link2">
                        <Table bordered hover>
                        <thead className="thead-dark">
                        <tr>
                            <th scope="col" >Name</th>
                            <th scope="col" >POS</th>
                            <th scope="col" >No.</th>
                        </tr>
                        </thead>
                        <tbody>
                            {this.state.team2.map(team =>(
                                <tr key={team.PID}>
                                <td> {team.name} </td>
                                <td> {team.position} </td>
                                <td> {team.number} </td>
                            </tr>
                            ))}
                        </tbody>
                        </Table>
                    </Tab.Pane>

                    <Tab.Pane eventKey="#link3">
                        <Table bordered hover>
                        <thead className="thead-dark">
                        <tr>
                            <th scope="col" >Name</th>
                            <th scope="col" >POS</th>
                            <th scope="col" >No.</th>
                        </tr>
                        </thead>
                        <tbody>
                            {this.state.team3.map(team =>(
                                <tr key={team.PID}>
                                <td> {team.name} </td>
                                <td> {team.position} </td>
                                <td> {team.number} </td>
                            </tr>
                            ))}
                        </tbody>
                        </Table>
                    </Tab.Pane>

                    <Tab.Pane eventKey="#link4">
                        <Table bordered hover>
                        <thead className="thead-dark">
                        <tr>
                            <th scope="col" >Name</th>
                            <th scope="col" >POS</th>
                            <th scope="col" >No.</th>
                        </tr>
                        </thead>
                        <tbody>
                            {this.state.team4.map(team =>(
                                <tr key={team.PID}>
                                <td> {team.name} </td>
                                <td> {team.position} </td>
                                <td> {team.number} </td>
                            </tr>
                            ))}
                        </tbody>
                        </Table>
                    </Tab.Pane>

                </Tab.Content>


                </Col>
            </Row>
            </Tab.Container>
        )
    }
}

export default Teams;