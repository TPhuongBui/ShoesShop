import React, { Component } from 'react'

export default class ProductItem extends Component {
  render() {
    // console.log(this.props);
    let {image, name, price} = this.props.shoes
    return (
      <div>
        <div className="card">
                <img src={image} className="card-img-top img-fuild" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">${price.toLocaleString()}</p>
                    <button className="btn btn-success">Add To Cart</button>
                </div>
            </div>
      </div>
    )
  }
}
