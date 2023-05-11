import React, { Component } from 'react';
import axios from 'axios';
import * as Swal from "sweetalert2";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export class UserRegistration extends Component {
    constructor(props) {
        super(props);
        this.onChangeNIC = this.onChangeNIC.bind(this);
        this.onChangeuserRole = this.onChangeuserRole.bind(this);
        this.onChangepassword = this.onChangepassword.bind(this);
        this.onChangecpassword = this.onChangecpassword.bind(this);
        this.onChangeFullName = this.onChangeFullName.bind(this);
        this.onChangeDob = this.onChangeDob.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeContactNo = this.onChangeContactNo.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            fullName: '',
            dob: new Date(),
            email: '',
            contactNo: '',
            address: '',
            NIC: '',
            userRole: '',
            password: '',
            cpassword: ''
        }
    }

    onChangeFullName(e) {
        this.setState({
            fullName: e.target.value
        });
    }

    onChangeDob(date) {
        this.setState({
            dob: date
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangeContactNo(e) {
        this.setState({
            contactNo: e.target.value
        });
    }

    onChangeAddress(e) {
        this.setState({
            address: e.target.value
        });
    }

    onChangeNIC(e) {
        this.setState({
            NIC: e.target.value
        });
    }

    onChangeuserRole(e) {
        this.setState({
            userRole: e.target.value
        });
    }

    onChangepassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    onChangecpassword(e) {
        this.setState({
            cpassword: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const customer = {
            fullName: this.state.fullName,
            dob: this.state.dob,
            NIC: this.state.NIC,
            email: this.state.email,
            contactNo: this.state.contactNo,
            address: this.state.address,
            userRole:"Customer",
            password:this.state.password
        }

        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if (this.state.NIC.length < 10 || this.state.NIC.length > 12) {

            this.setState({ nicError: "Please enter a valid NIC" })
        } else if (!this.state.email || regex.test(this.state.email) === false) {
            this.setState({ emailError: "Please Enter a valid email." })
        }else if (this.state.contactNo.length != 10) {

            this.setState({ contactNoError: "Invalid Phone Number" })
        }else if(this.state.address.length < 6){
            this.setState({ addressError: "Address is too short" })

        }

        else if (this.state.password != this.state.cpassword) {

            this.setState({ passwordError: "Passwords does not macth." })
        }

        else {

            console.log(customer);

            axios.post('http://localhost:5000/customer/', customer)

                .then(res => {

                    console.log(res);

                    if (res.status === 200) {
                        this.clearData();
                        Swal.fire({
                            icon: 'success',
                            title: 'Successful',
                            text: 'User has been registered!!',
                            background: '#fff',
                            confirmButtonColor: '#333533',
                            iconColor: '#60e004'
                        })

                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            text: 'Error in adding!',
                            background: '#fff',
                            confirmButtonColor: '#333533',
                            iconColor: '#e00404'
                        })
                    }
                })

        }



        // }
    }

    clearData = () => {
        this.setState({
            fullName: '',
            dob: new Date(),
            email: '',
            contactNo: '',
            address: '',
            NIC: '',
            userRole: '',
            password: '',
            cpassword: ''
        })
    }

    render() {
        return (
            <div className="flex flex-col px-5 pt-2 ">

                <div class="gradient-form h-full dark:bg-neutral-700">
                    <div class="mb-20 container h-full p-10">
                        <div
                            class="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
                            <div class="w-full">
                                <div
                                    class="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
                                    <div class="g-0 lg:flex lg:flex-wrap">
                                        <div class="px-4 md:px-0 lg:w-6/12">
                                            <div class="md:mx-6 md:p-12">
                                                <div class="text-center">
                                                    <img
                                                        class="mx-auto w-36"
                                                        src="https://media.discordapp.net/attachments/815160100993499176/1105799681289764864/1.png?width=881&height=165"
                                                        alt="logo" />
                                                    <h4 class="mb-12 mt-1 pb-1 text-xl font-bold drop-shadow-lg uppercase">
                                                        We are The <span class="text-pink-600 text-2xl font-serif shadow-white drop-shadow-lg">Sonduruma Mal</span> Team
                                                    </h4>
                                                </div>
                                                <form className='' onSubmit={this.onSubmit}>
                                                    <div class="">
                                                        <p className='text-base font-semibold text-black uppercase'>
                                                            Sign Up With Us
                                                        </p>
                                                        <div className="grid grid-cols-2 gap-4 form-group">
                                                        <div className="form-group">
                                                            <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Full Name </label>
                                                            <input type="text"
                                                                required
                                                                className="form-control peer block min-h-[auto] w-full rounded border-1 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 border-solid"
                                                                value={this.state.fullName}
                                                                onChange={this.onChangeFullName}
                                                            /><p/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>NIC </label>
                                                            <input type="text"
                                                                required
                                                                className="form-control peer block min-h-[auto] w-full rounded border-1 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 border-solid"
                                                                value={this.state.NIC}
                                                                onChange={this.onChangeNIC}
                                                            /><p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.nicError}</p>
                                                        </div>
                                                        </div>
                                                        <div className="grid grid-cols-2 gap-4 form-group">
                                                        <div className="form-group">
                                                            <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Date Of Birth</label>
                                                            <DatePicker
                                                                viewBox="0 0 20 40"
                                                                required
                                                                dateFormat="MMMM d, yyyy"
                                                                className='m-2'
                                                                selected={this.state.dob}
                                                                onChange={this.onChangeDob}
                                                            /><p/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Email</label>
                                                            <input type="text"
                                                                required
                                                                className="form-control peer block min-h-[auto] w-full rounded border-1 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 border-solid"
                                                                value={this.state.email}
                                                                onChange={this.onChangeEmail}
                                                            /><p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.emailError}</p>
                                                            </div>
                                                        </div>
                                                        <div className="grid grid-cols-2 gap-4 form-group">
                                                        <div className="form-group">
                                                            <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Contact Number</label>
                                                            <input type="text"
                                                                required
                                                                className="form-control peer block min-h-[auto] w-full rounded border-1 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 border-solid"
                                                                value={this.state.contactNo}
                                                                onChange={this.onChangeContactNo}
                                                            /><p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.contactNoError}</p>
                                                        </div>
                                                        <div className="form-group">
                                                            <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Address</label>
                                                            <input type="text"
                                                                required
                                                                className="form-control peer block min-h-[auto] w-full rounded border-1 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 border-solid"
                                                                value={this.state.address}
                                                                onChange={this.onChangeAddress}
                                                            /><p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.addressError}</p>
                                                        </div>
                                                        </div>
                                                       
                                                        <div className="grid grid-cols-2 gap-4 form-group">
                                                            <div className="form-group">
                                                                <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Password </label>
                                                                <input type="password"
                                                                    required
                                                                    className="form-control peer block min-h-[auto] w-full rounded border-1 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                                                    value={this.state.password}
                                                                    onChange={this.onChangepassword}
                                                                /><p />
                                                            </div>
                                                            <div className="form-group">
                                                                <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Confirm Password </label>
                                                                <input type="password"
                                                                    required
                                                                    className="form-control peer block min-h-[auto] w-full rounded border-1 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                                                    value={this.state.cpassword}
                                                                    onChange={this.onChangecpassword}
                                                                /><p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.passwordError}</p>
                                                            </div>
                                                        </div>
                                                        <div className="text-center align-middle form-group">
                                                            <input
                                                                className='mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] '
                                                                type="submit"
                                                                value="Sign Up"
                                                                style={{ background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)" }}
                                                            />
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div
                                            class="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none from-indigo-900 from-10% via-sky-600 via-30% to-pink-700 to-90%"
                                            style={{ background: "linear-gradient(to right, #9008C5, #dd3675,  #57C3F5)" }}
                                        >
                                            <div class="px-4 py-6 text-white md:mx-6 md:p-12">
                                                <h4 class="mb-6 text-xl font-bold uppercase drop-shadow-lg">
                                                    We are more than just a <span class="text-black text-2xl font-serif shadow-white drop-shadow-lg">Floral Store</span>
                                                </h4>
                                                <p class=" text-base">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing
                                                    elit, sed do eiusmod tempor incididunt ut labore et
                                                    dolore magna aliqua. Ut enim ad minim veniam, quis
                                                    nostrud exercitation ullamco laboris nisi ut aliquip ex
                                                    ea commodo consequat.
                                                </p>
                                            </div>
                                        </div>
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