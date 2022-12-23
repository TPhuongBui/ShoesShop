import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        // console.log(this.props)
        let {shoes} = this.props
        return (
            <div className="card">
                <img src={shoes.image} className="card-img-top img-fuild" alt="" />
                <div className="card-body">
                    <h4 className="card-title">{shoes.name}</h4>
                    <p className="card-text">${shoes.price.toLocaleString()}</p>
                    <button onClick={() => {
                        this.props.addToCart(shoes)
                     }} data-toggle="modal" data-target="#exampleModal" className='btn btn-success'>Add to cart</button>
                </div>
            </div>
        )
    }
}
