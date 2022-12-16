import React, { Component } from 'react'

export default class DemoLogin extends Component {

    // isLogin = false;

    // Bước 1
    state = {
        isLogin: false
    }

    renderUI = () => {
        if (this.state.isLogin) {
            return <span style={{ color: "white" }}>
                Bùi Thanh Phương
            </span>
        } else {
            return <button onClick={() => {
                // this.state.isLogin = true;
                let newState = {
                    isLogin: true

                }

                this.setState(newState)

                console.log("Click", this.state.isLogin)



                // this.render(); // render lại UI
            }} className='btn btn-success'>Login</button>
        }
    }

    render() {

        // console.log("render", this.isLogin);

        return (
            <div className='container'>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <div className="dropdown-divider" />
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled">Disabled</a>
                            </li>
                        </ul>

                        <div>
                            {/* gọi hàm khi load trang */}
                            {this.renderUI()};
                        </div>
                    </div>
                </nav>

            </div>
        )
    }
}
