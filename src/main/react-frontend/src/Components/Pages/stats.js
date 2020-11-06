import React, { Component } from 'react';
import Table from 'react-bootstrap/esm/Table';

import '../../Assets/Stats.css'

class Stats extends Component{
    render(){
        return(
           <div>
           <h2 className="title"> 2020 Summer League Leaders </h2>
            <StatsTable/>
           </div> 
        )
    }
}

class StatsTable extends Component{
    state = {
        loading: true,
        points: [],
        assists: [],
        rebounds: [],
    };
    async componentDidMount(){
        let [points, assists, rebounds] = await Promise.all([
            fetch('/api/stats/1').then(res => res.json()),
            fetch('/api/stats/2').then(res => res.json()),
            fetch('/api/stats/3').then(res => res.json()),
        ]);
 
        this.setState({ 
            loading: false,
            points: points,
            assists: assists,
            rebounds: rebounds
        });
    }

    render(){
            if (this.state.loading){
                return(
                <div> loading..</div>
                )
            };

            return(
                <div className="stat-page">
                <Table striped bordered hover className="stat-table">
                    <thead className="thead-dark">
                        <tr>
                            <th colSpan="2" as="h5"> TOP 5 - POINTS LEADERS </th>
                        </tr>
                        <tr>
                        <th>PLAYER</th>
                        <th>POINTS (TOT)</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.points.map(player => (
                    <tr key={player.id}>
                        <td>{player.name}</td>
                        <td>{player.points}</td>
                    </tr>
                    ))} 
                    </tbody>
                </Table>

                <Table striped bordered hover className="stat-table">
                    <thead className="thead-dark">
                        <tr>
                            <th colSpan="2"> TOP 5 - ASSIST LEADERS </th>
                        </tr>
                        <tr>
                        <th>PLAYER</th>
                        <th>ASSISTS (TOT)</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.assists.map(player => (
                    <tr key={player.id}>
                        <td>{player.name}</td>
                        <td>{player.assists}</td>
                    </tr>
                    ))} 
                    </tbody>
                </Table>

                <Table striped bordered hover className="stat-table">
                    <thead className="thead-dark">
                        <tr>
                            <th colSpan="2"> TOP 5 - REBOUND LEADERS </th>
                        </tr>
                        <tr>
                        <th>PLAYER</th>
                        <th>REBOUNDS (TOT)</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.rebounds.map(player => (
                    <tr key={player.id}>
                        <td>{player.name}</td>
                        <td>{player.rebounds}</td>
                    </tr>
                    ))} 
                    </tbody>
                </Table>
                </div>

            )
        }

}

export default Stats;