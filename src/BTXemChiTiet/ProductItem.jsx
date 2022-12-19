import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        let {hinhAnh, tenSP, giaBan} = this.props.phone
        return (
            <div><div className="card">
                
                <img src={hinhAnh} className="card-img-top img-fuild" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{tenSP}</h5>
                    <p className="card-text">{giaBan.toLocaleString()} VND</p>
                    <button className="btn btn-success">Xem chi tiết</button>
                </div>
            </div></div>
        )
    }
}
