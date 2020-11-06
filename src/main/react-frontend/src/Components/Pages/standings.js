import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';

class Standings extends Component{
    render(){
        return(
           <div>
               <h2 className="title"> 2021 Standings </h2>
               <StandingsTable/>
           </div> 
        )
    }
}

class StandingsTable extends Component{
    render(){
        return(
        <Table bordered hover>
            <thead className="thead-dark">
      <tr>
        <th scope="col"> </th>
        <th id ="teamName" scope="col"> Team </th>
        <th scope="col"> W </th>
        <th scope="col"> L </th>
        <th id="diff" scope="col"> +/- </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td> Dub Nation</td>
        <td> 7 </td>
        <td> 1 </td>
        <td> +98 </td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td> Panthers </td>
        <td> 5 </td>
        <td> 3 </td>
        <td> +20 </td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td> JayHawks </td>
        <td> 4 </td>
        <td> 4 </td>
        <td> +7 </td>
      </tr>
      <tr>
        <th scope="row">4</th>
        <td> Shockers </td>
        <td> 1 </td>
        <td> 7 </td>
        <td> -87 </td>
      </tr>
    </tbody>
      </Table>
    )
    }
}

export default Standings;