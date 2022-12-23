import React, { Component } from 'react'

export default class GioHang extends Component {


    renderCart = () => {
        return this.props.cartArray.map((spCart) => {
            return <tr key={spCart.id}>
            <td>{spCart.id}</td>
            <td>
                <img style={{ width: "50px" }} src={spCart.image} alt="" />
            </td>
            <td>{spCart.name}</td>
            <td>
                <button onClick={() => { 
                    this.props.tangGiamSL(spCart.id, -1) 
                 }} className='btn btn-danger'>-</button>

                <span>{spCart.quanti}</span>

                <button onClick={() => { 
                    this.props.tangGiamSL(spCart.id, 1) 
                 }} className='btn btn-success'>+</button>
            </td>
            <td>${spCart.price.toLocaleString()}</td>
            <td>${(spCart.price * spCart.quanti).toLocaleString()}</td>
            <td>
                <button onClick={() => { 
                    this.props.deleteShoes(spCart.id)
                 }} className='btn btn-danger'>Xóa</button>
            </td>
        </tr>
        })
    }


    render() {
        return (
            <div>
                <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Shoes Cart</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <table className='table'>
                                    <thead>
                                        <tr>
                                            <th>Mã giày</th>
                                            <th>Hình ảnh</th>
                                            <th>Tên giày</th>
                                            <th>Số lượng</th>
                                            <th>Đơn giá</th>
                                            <th>Thành tiền</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.renderCart()}
                                    </tbody>
                                </table>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-secondary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
