import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {

    renderShoesList = () => {
        return this.props.shoesList.map((shoes) => {
            return <div className="col-4" key={shoes.id}>
                <ProductItem addToCart = {this.props.addToCart} shoes={shoes}/>
            </div>
        })
    }

    render() {
        return (
            <div className="row">
                {this.renderShoesList()}
            </div>
        )
    }
}
