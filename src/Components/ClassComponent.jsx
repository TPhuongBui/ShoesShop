import React, { Component } from 'react'
import CardComponent from './CardComponent'

export default class ClassComponent extends Component {
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
                </div>

            </div>
        )
    }
}
