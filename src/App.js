import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    //you must call the Component constructor function using super(), before setting any properties in this class - this is a react standard
    super();

    this.gravity = 9.8;

    //this is a react standard, you must call this.state
    this.state = {
      name : 'rob',
      anotherName: 'joe',
      students : [
        {
          name: 'derek',
          favBand: 'nin'
        },
        {
          name: 'rob',
          favBand: 'j5'
        }
      ],
      pets : [
        {
          nam: 'rocket',
          typ: 'dog'
        },
        {
          nam: 'wiggles',
          typ: 'fish'
        }
      ]
    }
  }

  updateName = (event) => {
    /*
      in react you never directly update this.state in the class

      you always use the this.setState function

      this is a react standard
    */
    this.setState({
      name: event.target.value
    })
  }

  updateAnotherName = (event) => {
    this.setState({
      anotherName: event.target.value
    })
  }

  submitPet = (event) => {
    event.preventDefault();

    let nam = event.target.elements[0].value
    let typ = event.target.elements[1].value
    let pets = [...this.state.pets, {nam, typ}]

    this.setState({pets})

  }

  submitStudent = (event) => {
    event.preventDefault();

    //one way
      // let n = event.target.elements[0].value
      // let f = event.target.elements[1].value

      // this.setState({
      //   students : [
      //     ...this.state.students, {name : n, favBand: f}
      //   ]
      // })

    //another way
      let name = event.target.elements[0].value
      let favBand = event.target.elements[1].value
      let students = [...this.state.students, {name, favBand}]

      this.setState({students})

  }

  clickImage = (event) => {
    event.preventDefault();

    alert('you clicked the image');
  }

  clickImage = (event) => {
    event.preventDefault();

    alert('you clicked the image');
  }


  //this function must be called render
  render() {

    //I have to return something
      //this is where your jsx goes
    return (
      
      <div className="App">
        <div class="header">
          <div class="headtext">
            <div class="title">
              <h1>Clicky Game</h1>
            </div>
            <div class="instruct">
              <h2>Click an image to begin!</h2>
            </div>
            <div class="score">
              <span>Score: <span id="score">0</span></span>
              <span>|</span>
              <span>Top Score: <span id="topscore"></span></span>
            </div>
          </div>
        </div>
        <div class="banner">
          <h1>Clicky Game!</h1>
          <h4>Click on an image to earn points, but don't click on any more than once!</h4>
        </div>
        <img src={logo} onClick={this.clickImage} />

        
        <input type="text" onChange={this.updateName} placeholder="update name"/>

        <input type="text" onChange={this.updateAnotherName} placeholder="update another name"/>

        <br /><br />

        {this.state.anotherName}


        --------

        {this.state.anotherName.split('').reverse().join('')}

        --------

        {this.state.name}
        
        --------

        {this.state.name.split('').reverse().join('')}

        --------

        <ul>
          {this.state.students.map((stud, ind) => {
            return <li>{ind} - {stud.name} - {stud.favBand}</li>
          })}
        </ul>

        <ul>
          {this.state.pets.map((pet, ind) => {
            return <li>{ind} - {pet.nam} - {pet.typ}</li>
          })}
        </ul>

        <form id="petForm" onSubmit={this.submitPet}>
          <input type="text" 
          name="nam"
          placeholder="insert your pet name" 
           />

           <br />

           <input type="text" 
           name="favBand"
           placeholder="insert your pet type" 
            />

          <button>submit pet</button>
        </form>

        <br /><br />

        <form id="studentForm" onSubmit={this.submitStudent}>
          <input type="text" 
          name="nam"
          placeholder="insert your name" 
           />

           <br />

           <input type="text" 
           name="favBand"
           placeholder="insert your fav band" 
            />

          <button>submit student</button>
        </form>

        <br />
        <br />
        <br />
        <br />

      </div>
    );
  }
}

export default App;
