import React, { Component } from 'react'

// import connect để giúp kết nối component với store
import { connect } from 'react-redux'


class BTTangGiamSo extends Component {
  render() {
    return (
      <div className='container py-5'>
         <div className="w-25">
            <button onClick={() => {
                let action = {
                    type: "GIAM_SO",
                    numberGiam: -1
                }

                this.props.dispatch(action)
             }} className='btn btn-danger'>-</button>

            <span className='m-3'>{this.props.numberProps}</span>

            <button onClick={() => {
                let action = {
                    type: "TANG_SO",
                    numberTang: 1
                }

                this.props.dispatch(action)
             }} className='btn btn-success'>+</button>
         </div>
      </div>
    )
  }
}

// tạo hàm mapStateToProps

const mapStateToProps = (rootReducer) => {
    return {
        numberProps: rootReducer.tangGiamSoReducer
    }
}

const ComponentBTTangGiamSoReactRedux =  connect(mapStateToProps)(BTTangGiamSo);
export default ComponentBTTangGiamSoReactRedux;