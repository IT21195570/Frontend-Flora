import React, { Component } from 'react';
import axios from 'axios';
import * as Swal from "sweetalert2";
import { Modal } from "react-bootstrap";
import AuthenticationService from '../user/AuthenticationService';



export class CreateOrder extends Component {
    constructor(props) {
        super(props);
        this.onChangecustomer = this.onChangecustomer.bind(this);
        this.onChangequantity = this.onChangequantity.bind(this);
        this.onChangeorderFor = this.onChangeorderFor.bind(this);
        this.onChangedeliveryAddress = this.onChangedeliveryAddress.bind(this);
        this.onChangeamount = this.onChangeamount.bind(this);
        this.onChangeCardNumber = this.onChangeCardNumber.bind(this);
        this.onChangeBankName = this.onChangeBankName.bind(this);
        this.onChangeAccName = this.onChangeAccName.bind(this);
        this.onChangeCVCNum = this.onChangeCVCNum.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            id: props.proId,
            products: [],
            customer: '',
            productName: '',
            productCategory: '',
            quantity: '',
            orderFor: '',
            deliveryAddress: '',
            amount: 0,
            orderStatus: '',
            price: 0,
            show: false,
            cardNum: '',
            bankName: '',
            accName: '',
            cvcNum: '',

        }
    }

    onChangecustomer(e) {
        this.setState({
            customer: e.target.value
        });
    }

    onChangequantity(e) {
        this.setState({
            quantity: e.target.value
        });
    }

    onChangeorderFor(e) {
        this.setState({
            orderFor: e.target.value
        });
    }

    onChangedeliveryAddress(e) {
        this.setState({
            deliveryAddress: e.target.value
        });
    }

    onChangeamount(e) {
        this.setState({
            amount: e.target.value
        });
    }
    onChangeCardNumber(e) {
        this.setState({
            cardNum: e.target.value
        });
    }

    onChangeBankName(e) {
        this.setState({
            bankName: e.target.value
        });
    }

    onChangeAccName(e) {
        this.setState({
            accName: e.target.value
        });
    }

    onChangeCVCNum(e) {
        this.setState({
            cvcNum: e.target.value
        });
    }

    componentDidMount() {

        this.getProduct();
    }

    getProduct() {
        axios.get('http://localhost:5000/product/' + this.state.id)
            .then(response => {
                this.setState({
                    id: response.data._id,
                    productID: response.data.productID,
                    productName: response.data.productName,
                    productCategory: response.data.productCategory,
                    description: response.data.description,
                    image: response.data.image,
                    price: response.data.price,
                    discount: response.data.discount,
                    availability: response.data.availability,

                })
            })
            .catch(function (error) {
                console.log(error);
            })

    }
    

    gotoPayment = (id) => {
        this.setState({
            id: id,

            show: true

        })
        console.log("LIst id is :" + id);
    }

    closeModalBox = () => {
        this.setState({ show: false })

    }

    calculatePrice( quantity, price) {
        let finalAmount = quantity * price
        console.log("Final Price is"+finalAmount)
        return finalAmount;
    }


    onSubmit(e) {

        e.preventDefault();

        const order = {
            customer: AuthenticationService.loggedUserId(),
            item: this.state.productName,
          
            quantity: this.state.quantity,
           
            orderFor: this.state.orderFor,
            deliveryAddress: this.state.deliveryAddress,
            amount: this.calculatePrice(this.state.quantity, this.state.price),
            orderStatus: 'Order Taken',
            paymentStatus: "Paid",
            bankName: this.state.bankName,
            accName: this.state.accName
        }

        console.log(order);

       if (this.state.quantity <= 0) {
            this.setState({ quantityError: "Invalid Quantity." })
        }
        else {
            axios.post('http://localhost:5000/order/', order)

                .then(res => {

                    console.log(res);
                    const id = res.data;

                    if (res.status === 200) {
                        this.clearData();
                        Swal.fire({
                            icon: 'success',
                            title: 'Successful',
                            text: 'Order has been added!!',
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

    }

    clearData = () => {
        this.setState({
            customer: '',
            productName: '',
            productCategory: '',
            quantity: '',
            price:'',
            orderFor: '',
            deliveryAddress: '',
            amount: '',
            cardNum: '',
            bankName: '',
            accName: '',
            cvcNum: '',

        })
    }

    render() {
        return (
            <div className="flex flex-col px-5 ">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full sm:px-6 lg:px-8">
                        <div className='items-center overflow-hidden'>
                            <div className=''>
                                <div class="grid grid-cols-1 gap-4 content-start pt-5 px-20">
                                    <form className='' onSubmit={this.onSubmit}>
                                        <div class="">
                                            <p className='text-4xl font-semibold text-black uppercase drop-shadow-lg'>
                                                Add Order
                                            </p>

                                            <div className="grid grid-cols-2 gap-4 form-group">
                                                <div className="form-group">
                                                    <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                                        Product Name
                                                    </label>
                                                    <input type="text"
                                                        required
                                                        className="form-control"
                                                        value={this.state.productName}
                                                        readOnly
                                                    />
                                                  
                                                </div>

                                                <div className="form-group">
                                                    <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                                        Product Category
                                                    </label>
                                                    <input type="text"
                                                        required
                                                        className="form-control"
                                                        value={this.state.productCategory}
                                                        readOnly
                                                    />
                                                   
                                                </div>
                                                </div>
                                                <div className="grid grid-cols-2 gap-4 form-group">
                                                <div class="form-group">
                                                    <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white' >
                                                        Price
                                                    </label>
                                                    <input type="text"
                                                        required
                                                        className="form-control"
                                                        value={this.state.price}
                                                    
                                                    />
                                                   
                                                </div>
                                                <div class="form-group">
                                                    <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white' >
                                                        Quantity
                                                    </label>
                                                    <input type="text"
                                                        required
                                                        className="form-control"
                                                        value={this.state.quantity}
                                                        onChange={this.onChangequantity}
                                                    /><p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.quantityError}</p>
                                                </div>
                                         

                                           
                                            </div>


                                            <div className="form-group">
                                                <label for="large-input" className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                                    Order For
                                                </label>
                                                <select type="text"
                                                    required
                                                    className="form-control"
                                                    value={this.state.orderFor}
                                                    onChange={this.onChangeorderFor}
                                                >
                                                    <option>Select From Here</option>
                                                    <option>Pick Up</option>
                                                    <option>Delivery</option>
                                                    
                                                    </select>
                                                   
                                            </div>
                                            <div className="form-group">
                                                <label for="large-input" className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                                    Delivery Address
                                                </label>
                                                <textarea
                                                    type="text"
                                                    className="form-control"
                                                    value={this.state.deliveryAddress}
                                                    onChange={this.onChangedeliveryAddress}
                                                />
                                               
                                            </div>
                                            <div>
                                        <h3 class="pb-4">Payment Details</h3>
                                    </div>
                                            <div className="form-group">
                                                <label for="large-input" className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                                    Final Price
                                                </label>
                                                <input type="text"
                                                    required
                                                    className="form-control"
                                                  
                                                    value={this.calculatePrice(this.state.quantity, this.state.price)}
                                                />
                                            </div>
                                            <p/>
                                            <div className="grid grid-cols-2 gap-4 form-group">
                                        <div className="form-group">
                                            <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Bank Name</label>
                                            <select type="text"
                                                required
                                                className="form-control"
                                                value={this.state.bankName}
                                                onChange={this.onChangeBankName}
                                            >
                                                <option>Select From Here</option>
                                                <option>Bank Of Ceylon</option>
                                                <option>Nations Trust Bank</option>
                                                <option>Hatton National Bank</option>
                                                <option>Sampath Bank</option>
                                                <option>Commercial Bank</option>
                                                <option>National Savings Bank</option>
                                                <option>Amanaa Bank</option>
                                            </select>
                                            <p />
                                        </div>
                                        <div className="form-group">
                                            <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Account Name</label>
                                            <input type="text"
                                                required
                                                className="form-control"
                                                value={this.state.accName}
                                                onChange={this.onChangeAccName}
                                            />
                                            <p />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 form-group">
                                        <div className="form-group">
                                            <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Card Number</label>
                                            <input type="text"
                                                required
                                                className="form-control"
                                                value={this.state.cardNum}
                                                onChange={this.onChangeCardNumber}
                                            />
                                            <p />
                                        </div>
                                        <div className="form-group">
                                            <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>CVC</label>
                                            <input type="text"
                                                required
                                                className="form-control"
                                                value={this.state.cvcNum}
                                                onChange={this.onChangeCVCNum}
                                            />
                                            <p />
                                        </div>
                                    </div>
                                            <div className="text-center align-middle form-group">
                                                <input className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mt-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' type="submit" value="Add Order" />
                                            </div>
                                        </div>
                                    </form>

                                </div>

                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}