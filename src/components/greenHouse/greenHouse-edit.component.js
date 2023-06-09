import React, { Component } from 'react';
import axios from 'axios';
import Swal from "sweetalert2";

export default class EditGreenHouse extends Component {
    constructor(props) {
        super(props);
        this.onChangeghID = this.onChangeghID.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangecontactNo = this.onChangecontactNo.bind(this);
        this.onChangeemail = this.onChangeemail.bind(this);
        this.onChangeaddress = this.onChangeaddress.bind(this);
        this.onChangeposition = this.onChangeposition.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            id:props.ghId,
            ghID: '',
            name: '',
            contactNo: '',
            email: '',
            address: '',
            position: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/greenHouse/' + this.state.id)
            .then(response => {
                this.setState({
                    ghID: response.data.ghID,
                    name: response.data.name,
                    contactNo: response.data.contactNo,
                    email: response.data.email,
                    address: response.data.address,
                    position: response.data.position,
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onChangeghID(e) {
        this.setState({
            ghID: e.target.value
        });
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangecontactNo(e) {
        this.setState({
            contactNo: e.target.value
        });
    }

    onChangeemail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangeaddress(e) {
        this.setState({
            address: e.target.value
        });
    }

    onChangeposition(e) {
        this.setState({
            position: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const greenHouse = {
            ghID: this.state.ghID,
            name: this.state.name,
            contactNo: this.state.contactNo,
            email: this.state.email,
            address: this.state.address,
            position: this.state.position
        }

        //check payload
        console.log(greenHouse);

        //validations
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if (this.state.ghID.length < 3 ) {
            this.setState({ ghIDError: "Green House ID should be longer than 3 characters." })
        } else if (this.state.name.length < 6) {
            this.setState({ nameError: "Name should be longer than 6 characters." })
        } else if (this.state.contactNo.length != 10) {
            this.setState({ contactNoError: "Contact Number is invalid." })
        } else if (!this.state.email || regex.test(this.state.email) === false) {
            this.setState({ emailError: "Please Enter a valid email." })
        } else if (this.state.address.length < 10) {
            this.setState({ addressError: "Your address is too short." })
        } else {
        axios.put('http://localhost:5000/greenHouse/' + this.state.id, greenHouse)
            .then(res => {
                console.log(res);
                if (res.status === 200) {
                    this.props.close();
                    Swal.fire({
                        icon: 'success',
                        title: 'Successful',
                        text: 'Green House has been updated!!',
                        background: '#fff',
                        confirmButtonColor: '#333533',
                        iconColor: '#60e004'
                    })
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'There was an error updating!',
                        background: '#fff',
                        confirmButtonColor: '#333533',
                        iconColor: '#e00404'
                    })
                }
            
            })
        }
    }

    //render method
    render() {
        return (
            <div className="flex flex-col px-5 pt-2 ">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className='items-center overflow-hidden'>
                            <div className=''>
                                <div class="grid grid-cols-1 gap-4 content-start pt-5 px-20">
                                    <div className="formdiv">
                                        <form onSubmit={this.onSubmit}>
                                            
                                                <p className='text-4xl font-semibold text-black uppercase'>
                                                    Update Green House
                                                </p>
                                                <div class="grid grid-cols-2 gap-4 form-group">
                                                <div className="form-group">
                                                    <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Employee ID </label>
                                                    <input type="text"
                                                        // required
                                                        className="form-control"
                                                        value={this.state.ghID}
                                                        onChange={this.onChangeghID}
                                                    /><p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.ghIDError}</p>
                                                </div>
                                                <div className="form-group">
                                                    <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white' >Name</label>
                                                    <input type="text"
                                                        required
                                                        className="form-control"
                                                        value={this.state.name}
                                                        onChange={this.onChangeName}
                                                    /><p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.nameError}</p>
                                                </div>
                                            </div>
                                            <div class="grid grid-cols-2 gap-4 form-group">
                                                <div className="form-group">
                                                    <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Contact Number</label>
                                                    <input type="text"
                                                        required
                                                        className="form-control"
                                                        value={this.state.contactNo}
                                                        onChange={this.onChangecontactNo}
                                                    />
                                                     <p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.contactNoError}</p>
                                                </div>
                                                <div className="form-group">
                                                    <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Email</label>
                                                    <input type="text"
                                                        required
                                                        className="form-control"
                                                        value={this.state.email}
                                                        onChange={this.onChangeemail}
                                                    /><p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.emailError}</p>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label for="large-input" className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Address</label>
                                                <textarea type="text"
                                                    required
                                                    className="form-control"
                                                    value={this.state.address}
                                                    onChange={this.onChangeaddress}
                                                />
                                                <p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.addressError}</p>
                                            </div>
                                            
                                            <div className="text-center align-middle form-group">
                                                <input className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' type="submit" value="Edit Green House" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}