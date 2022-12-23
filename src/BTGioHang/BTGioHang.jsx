import React, { Component } from 'react'
import GioHang from './GioHang'
import ProductList from './ProductList'

export default class BTGioHang extends Component {

    shoesList =
        [
            {
                "id": 1,
                "name": "Adidas Prophere",
                "alias": "adidas-prophere",
                "price": 350,
                "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
                "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
                "quantity": 995,
                "image": "http://svcy3.myclass.vn/images/adidas-prophere.png"
            },
            {
                "id": 2,
                "name": "Adidas Prophere Black White",
                "alias": "adidas-prophere-black-white",
                "price": 450,
                "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
                "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
                "quantity": 990,
                "image": "http://svcy3.myclass.vn/images/adidas-prophere-black-white.png"
            },
            {
                "id": 3,
                "name": "Adidas Prophere Customize",
                "alias": "adidas-prophere-customize",
                "price": 375,
                "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
                "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
                "quantity": 415,
                "image": "http://svcy3.myclass.vn/images/adidas-prophere-customize.png"
            },
            {
                "id": 4,
                "name": "Adidas Super Star Red",
                "alias": "adidas-super-star-red",
                "price": 465,
                "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
                "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
                "quantity": 542,
                "image": "http://svcy3.myclass.vn/images/adidas-super-star-red.png"
            },
            {
                "id": 5,
                "name": "Adidas Swift Run",
                "alias": "adidas-swift-run",
                "price": 550,
                "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
                "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
                "quantity": 674,
                "image": "http://svcy3.myclass.vn/images/adidas-swift-run.png"
            },
            {
                "id": 6,
                "name": "Adidas Tenisky Super Star",
                "alias": "adidas-tenisky-super-star",
                "price": 250,
                "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
                "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
                "quantity": 456,
                "image": "http://svcy3.myclass.vn/images/adidas-tenisky-super-star.png"
            },
            {
                "id": 7,
                "name": "Adidas Ultraboost 4",
                "alias": "adidas-ultraboost-4",
                "price": 450,
                "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
                "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
                "quantity": 854,
                "image": "http://svcy3.myclass.vn/images/adidas-ultraboost-4.png"
            },
            {
                "id": 8,
                "name": "Adidas Yeezy 350",
                "alias": "adidas-yeezy-350",
                "price": 750,
                "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
                "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
                "quantity": 524,
                "image": "http://svcy3.myclass.vn/images/adidas-yeezy-350.png"
            },
            {
                "id": 9,
                "name": "Nike Adapt BB",
                "alias": "nike-adapt-bb",
                "price": 630,
                "description": "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
                "shortDescription": "Paul George is the rare high-percentage shooter",
                "quantity": 599,
                "image": "http://svcy3.myclass.vn/images/nike-adapt-bb.png"
            },
            {
                "id": 10,
                "name": "Nike Air Max 97",
                "alias": "nike-air-max-97",
                "price": 650,
                "description": "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
                "shortDescription": "Paul George is the rare high-percentage shooter",
                "quantity": 984,
                "image": "http://svcy3.myclass.vn/images/nike-air-max-97.png"
            },
            {
                "id": 11,
                "name": "Nike Air Max 97 Blue",
                "alias": "nike-air-max-97-blue",
                "price": 450,
                "description": "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
                "shortDescription": "Paul George is the rare high-percentage shooter",
                "quantity": 875,
                "image": "http://svcy3.myclass.vn/images/nike-air-max-97-blue.png"
            },
            {
                "id": 12,
                "name": "Nike Air Max 270 React",
                "alias": "nike-air-max-270-react",
                "price": 750,
                "description": "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
                "shortDescription": "Paul George is the rare high-percentage shooter",
                "quantity": 445,
                "image": "http://svcy3.myclass.vn/images/nike-air-max-270-react.png"
            }
        ]

    state = {
        cartArray: []
    }

    // THÊM SẢN PHẨM MỚI VÀO GIỎ HÀNG
    addToCart = (shoes) => {
        // console.log(shoes)
        let { id, name, price, image } = shoes

        let shoesTK = this.state.cartArray.find((shoes) => {
            return shoes.id === id
        })

        if (shoesTK) {
            shoesTK.quanti += 1
            let newState = {
                cartArray: [...this.state.cartArray]
            }

            this.setState(newState)

        } else {
            let spShoes = {
                id: id,
                name: name,
                price: price,
                image: image,
                quanti: 1
            }

            let newState = {
                cartArray: [...this.state.cartArray, spShoes]
            }

            this.setState(newState)
        }
    }


    // XÓA SẢN PHẨM RA KHỎI GIỎ HÀNG
    deleteShoes = (idDelete) => {
        let cartArrayUpdate = this.state.cartArray.filter((spShoes) => {
            return spShoes.id !== idDelete
        })

        this.setState({
            cartArray: cartArrayUpdate
        })
    }

    // TĂNG GIẢM SỐ LƯỢNG GIÀY
    tangGiamSL = (idSL, quanti) => {

        let cartArrayUpdate = [...this.state.cartArray]

        let shoesTK = cartArrayUpdate.find((spShoes) => {
            return spShoes.id === idSL
        })

        if (shoesTK) {
            shoesTK.quanti += quanti
            if (shoesTK.quanti < 1) {
                alert('Số lượng không được nhỏ hơn 1')
                shoesTK.quanti = 1
            }

            this.setState({
                cartArray: cartArrayUpdate
            })
        }
    }

    renderTongSL = () => {
        // let tong = 0
        let tong = this.state.cartArray.reduce((tongSL, spShoes) => { 
            return tongSL += spShoes.quanti
        },0);

        return tong
    }

    render() {
        return (
            <div>
                <div className='container py-5'>
                    <div className="row">
                        <div className="col-4 leftItem ">
                            <ul className="nav flex-column">
                                <li className="nav-item item1">
                                    <a className="nav-link active" href='#'>Home</a>
                                </li>
                                <li className="nav-item item2">
                                    <a className="nav-link" href='#'>Shop</a>
                                </li>

                                <li className="item3">
                                    <a className="nav-link active" href='#'>
                                        <i className="fa-solid fa-xl fa-shopping-cart" data-toggle="modal" data-target="#exampleModal"></i>
                                        <span>{this.renderTongSL()}</span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-8 rightItem">
                            <h1 className='nav-item'>Shoes Shop</h1>
                            <ProductList addToCart={this.addToCart} shoesList={this.shoesList} />

                        </div>
                    </div>


                    <div>
                        <div>
                            <GioHang tangGiamSL={this.tangGiamSL} deleteShoes={this.deleteShoes} cartArray={this.state.cartArray} />
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
