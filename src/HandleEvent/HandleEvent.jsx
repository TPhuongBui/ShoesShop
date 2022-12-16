import React, { Component } from 'react'

export default class HandleEvent extends Component {


    showInfo = () => {
        alert("Hello my friend!");
    }

    showName = (name) => {
        alert(`Hello ${name}!`);  
    }

  render() {
    return (
      <div className='container'>
        <button onClick={this.showInfo} className='btn btn-success'>Show Info</button>
        <button onClick={() => { 
            this.showName("My Friend");
        }} className='btn btn-success'>Show Name</button>
      </div>
    )
  }
}
