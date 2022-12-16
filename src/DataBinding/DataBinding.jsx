import React, { Component } from 'react'

export default class DataBinding extends Component {

    // thuộc tính của Class không cần khai báo 
    fullName = "Thanh Phuong Bui"
    user = {
        name: "Bé Bom",
        avatar: "https://i.pravatar.cc/?u=77"
    }
  render() {
    
    let age = 23;

    return (
      <div>
        Name: {this.fullName}
        Age: {age}


        Name: {this.user.name}
        <img src={this.user.avatar} alt="" />
      </div>
    )
  }
}
