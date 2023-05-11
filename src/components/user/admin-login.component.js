import React, { Component } from 'react';
import axios from 'axios';
import * as Swal from "sweetalert2";
import AuthenticationService from './AuthenticationService';
import { withRouter } from 'react-router-dom';

export class AdminLogin extends Component {
    constructor(props) {
        super(props);
        this.onChangeNIC = this.onChangeNIC.bind(this);

        this.onChangepassword = this.onChangepassword.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            NIC: '',
            user: [],
            password: '',

        }
    }
    componentDidMount() {
        axios.get('http://localhost:5000/user/')
            .then(response => {
                this.setState({ user: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }
    onChangeNIC(e) {
        this.setState({
            NIC: e.target.value
        });
    }



    onChangepassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    getUserList() {
        axios.get('http://localhost:5000/user/')
            .then(response => {
                this.setState({ user: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }


    UserList() {



        return this.state.user.map((currentuser) => {
            if (this.state.NIC == currentuser.NIC && this.state.password == currentuser.password) {

                const userRole = currentuser.userRole;
                console.log(userRole)

                AuthenticationService.successfulLogin(currentuser.NIC, currentuser.userRole)
                console.log(currentuser.NIC, currentuser.userRole)

                window.location = "/nav"

            }

        });
    }



    onSubmit(e) {
        e.preventDefault();

        if (this.state.NIC.length < 10 || this.state.NIC.length > 12) {

            this.setState({ nicError: "Please enter a valid NIC" })
        } else {

            // this.UserList();

            this.state.user.map((currentuser) => {
                if (this.state.NIC == currentuser.NIC && this.state.password == currentuser.password) {

                    const userRole = currentuser.userRole;
                    console.log(userRole)
                    AuthenticationService.successfulLogin(currentuser.NIC, currentuser.userRole)
                    console.log(currentuser.NIC, currentuser.userRole)
                    // browserHistory.push("/nav");

                    Swal.fire({
                        icon: 'successful',
                        title: 'Successful',
                        text: 'Successfully Logged In',
                        background: '#fff',
                        confirmButtonColor: '#333533',
                        iconColor: '#60e004'
                    })

                    const isUserLoggedIn = AuthenticationService.isUserLoggedIn();

                    if (isUserLoggedIn === true && currentuser.userRole == "Employee Manager") {
                        window.location = "/nav"
                        window.location = "/employee"
                    } else if (isUserLoggedIn === true && currentuser.userRole == "Customer") {
                        window.location = "/nav"
                        window.location = "/cus"
                    }
                    else if (isUserLoggedIn === true && currentuser.userRole == "Customer Manager") {
                        window.location = "/customer"
                    } else if (isUserLoggedIn === true && currentuser.userRole == "Inventory Manager") {
                        window.location = "/inventory"
                    } else if (isUserLoggedIn === true && currentuser.userRole == "Product Manager") {
                        window.location = "/product"
                    } else if (isUserLoggedIn === true && currentuser.userRole == "Delivery Manager") {
                        window.location = "/delivery"
                    } else if (isUserLoggedIn === true && currentuser.userRole == "Finance Manager") {
                        window.location = "/salary"
                    } else if (isUserLoggedIn === true && currentuser.userRole == "Employee Manager") {
                        window.location = "/employee"
                    }
                    else if (isUserLoggedIn === true && currentuser.userRole == "Green House Manager") {
                        window.location = "/greenHouse"
                    } else if (isUserLoggedIn === true && currentuser.userRole == "Supplier Manager") {
                        window.location = "/supplier"
                    } else if (isUserLoggedIn === true && currentuser.userRole == "Order Manager") {
                        window.location = "/order"
                    } else if (isUserLoggedIn === false) {
                        window.location = "/nav"
                        window.location = "/"
                    }

                }


            });



        }

    }

    clearData = () => {
        this.setState({
            NIC: '',

            password: '',

        })
    }

    render() {
        return (
            <div className="flex flex-col px-5 pt-2 ">
               


                <div class="">

                    <div class="container my-44 px-6 mx-auto">
                        <section class="mb-32 text-gray-800 background-radial-gradient">
                            <div class="px-6 py-12 md:px-12 text-center lg:text-left bg-gradient-to-r rounded-lg from-indigo-900 from-10% via-sky-600 via-30% to-pink-700 to-90%">
                                <div class="container mx-auto xl:px-32">
                                    <div class="grid lg:grid-cols-2 gap-12 items-center">
                                        <div class="mt-12 lg:mt-0">
                                            <h1
                                                class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12"
                                                style={{ color: "hsl(218, 81%, 95%)" }}
                                            >
                                                Ayuobowan <br /></h1>
                                            <h2><span style={{ color: "hsl(218, 81%, 75%)" }}>Welcome To </span><span class="text-pink-600 font-extrabold drop-shadow-xl font-serif">Sonduruma Mal Store</span>
                                            </h2>
                                            <p class="mb-4 opacity-90 lead text-stone-50 font-bold uppercase" >
                                                SUSTAINABLE Decoration IS AT OUR CORE
                                            </p>
                                        </div>
                                        <div class="mb-12 lg:mb-0">
                                            <div class="block rounded-lg shadow-lg bg-white px-6 py-12 md:px-12">
                                                <h2 class="text-3xl font-bold mb-12">Sign In As An <span class="text-indigo-900">Admin</span></h2>
                                                <form className='' onSubmit={this.onSubmit}>
                                                    <div class="">
                                                        <div className="form-group">
                                                            <input type="text"
                                                                required
                                                                placeholder="NIC"
                                                                class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                                value={this.state.NIC}
                                                                onChange={this.onChangeNIC}
                                                            /><p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.nicError}</p>
                                                        </div>
                                                        <div className="form-group">
                                                            <input type="password"
                                                                required
                                                                placeholder="Password"
                                                                class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                                value={this.state.password}
                                                                onChange={this.onChangepassword}
                                                            /><p />
                                                        </div>
                                                        <div className="text-center align-middle form-group">
                                                            <input
                                                                class="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                                                type="submit" value="Sign In" />
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        )
    }
}