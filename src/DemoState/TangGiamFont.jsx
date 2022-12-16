import React, { Component } from 'react'

export default class TangGiamFont extends Component {

    // Bước 1 + 2
    state = {
        fs : 50
    }

  render() {
    return (
      <div className='container'>
            {/* Bước 3 */}
            <p style={{fontSize: `${this.state.fs}px`}}>Tăng giảm Font</p>


            <button onClick={() => {
                let newState = {
                    fs: this.state.fs + 1
                }
                this.setState(newState)
             }} className='btn btn-danger'>Tăng</button>
            <button onClick={() => {
                let newState = {
                    fs: this.state.fs - 1
                }
                this.setState(newState)
             }} className='btn btn-success'>Giảm</button>
      </div>
    )
  }
}
