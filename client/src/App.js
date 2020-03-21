import React from 'react';
import './App.css';
import axios from 'axios';

import { Card, CardColumns } from 'reactstrap';
import Searchbar from './searchBar';

class App extends React.Component {


  constructor() {
    super();
    this.state = {
      playerList: [],
      name: ''
    };
  } // Constructor end bracket


  componentDidMount() {
    axios.get(`http://localhost:5000/api/players`)
      .then((res) => {
        this.setState({
          playerList: res.data
        })
      })
      .catch(err => {
        console.log(err)
      });
  } // CDU end bracket

  

  render() {
    return (
      <div className="App">
        
        <Searchbar />

        <CardColumns>
          {this.state.playerList.map( player => {
            return (
              <Card key={player.id}>
                <p>{player.name}</p>
                <p>{player.country}</p>
                <p>{player.searches}</p>
              </Card>
            )
          })}
        </CardColumns>

      </div>
    );
  } // Render end bracket


} // App end bracket


export default App;
