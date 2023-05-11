import React, { Component } from 'react';
import axios from 'axios';
import Swal from "sweetalert2";


export default class EditOrder extends Component {

    constructor(props) {
        super(props);


        this.onChangeOrderStatus = this.onChangeOrderStatus.bind(this);
        this.onChangePaymentStatus = this.onChangePaymentStatus.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            id: props.orId,
            orderId: '',
            customer: '',
            item: '',
            quantity: '',
            orderFor: '',
            deliveryAddress: '',
            amount: '',
            orderStatus: '',
            paymentStatus: '',
            bankName: '',
            accName: ''

        }
    }

    onChangeOrderStatus(e) {
        this.setState({
            orderStatus: e.target.value
        });
    }

    onChangePaymentStatus(e) {
        this.setState({
            paymentStatus: e.target.value
        });
    }

    componentDidMount() {
        axios.get('http://localhost:5000/order/' + this.state.id)
            .then(response => {
                this.setState({
                    orderId: response.data._id,
                    customer: response.data.customer,
                    item: response.data.item,
                    quantity: response.data.quantity,
                    orderFor: response.data.orderFor,
                    deliveryAddress: response.data.deliveryAddress,
                    amount: response.data.amount,
                    orderStatus: response.data.orderStatus,
                    paymentStatus: response.data.paymentStatus,
                    bankName: response.data.bankName,
                    accName: response.data.accName,

                })
            })
            .catch(function (error) {
                console.log(error);
            })

    }


    onSubmit(e) {

        e.preventDefault();

        const order = {
            customer: this.state.customer,
            item: this.state.item,

            quantity: this.state.quantity,

            orderFor: this.state.orderFor,
            deliveryAddress: this.state.deliveryAddress,
            amount: this.state.amount,
            orderStatus: this.state.orderStatus,
            paymentStatus: this.state.paymentStatus,
            bankName: this.state.bankName,
            accName: this.state.accName
        }

        console.log(order);

        if (this.state.orderStatus == null) {
            this.setState({ orderError: "Order Status Cannot be null" })
        } else if (this.state.paymentStatus == null) {
            this.setState({ payError: "Payment Status Cannot be null" })
        } else {


            axios.put('http://localhost:5000/order/' + this.state.id, order)


                .then(res => {

                    console.log(res);

                    if (res.status === 200) {
                        this.props.close();
                        Swal.fire({
                            icon: 'success',
                            title: 'Successful',
                            text: 'Order has been Updated!!',
                            background: '#fff',
                            confirmButtonColor: '#333533',
                            iconColor: '#60e004'
                        })

                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            text: 'Error in updating!',
                            background: '#fff',
                            confirmButtonColor: '#333533',
                            iconColor: '#e00404'
                        })
                    }
                })

        }

    }



    render() {
        return (
            <div className="flex flex-col px-5 pt-2 ">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className='items-center overflow-hidden'>
                            <div className=''>
                                <div class="grid grid-cols-1 gap-4 content-start pt-5 px-20">
                                    <div className="formdiv">
                                        <form className='' onSubmit={this.onSubmit}>

                                            <div class="grid grid-cols-2 gap-4 form-group">
                                                <div className="form-group">
                                                    <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Order ID </label>
                                                    <input type="text"
                                                        required
                                                        className="form-control"
                                                        value={this.state.orderId}



                                                    /><p />
                                                </div>
                                                <div className="form-group">
                                                    <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white' >Customer Name</label>
                                                    <input type="text"
                                                        required
                                                        className="form-control"
                                                        value={this.state.customer}
                                                        readOnly

                                                    />
                                                </div>
                                            </div>
                                            <div class="grid grid-cols-2 gap-4 form-group">
                                                <div className="form-group">
                                                    <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Item 1</label>
                                                    <input type="text"
                                                        required
                                                        className="form-control"
                                                        value={this.state.item}
                                                        readOnly
                                                    />

                                                </div>






                                            </div>

                                            <div class="grid grid-cols-2 gap-4 form-group">
                                                <div className="form-group">
                                                    <label for="large-input" className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Order For</label>
                                                    <input type="text"
                                                        required
                                                        className="form-control"
                                                        value={this.state.orderFor}
                                                        readOnly

                                                    />

                                                </div>
                                                <div className="form-group">
                                                    <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white' for="grid-state">Delivery Address</label>
                                                    <input type="text"
                                                        required
                                                        className="form-control"
                                                        value={this.state.deliveryAddress}
                                                        readOnly

                                                    />


                                                </div>
                                            </div>

                                            <div class="grid grid-cols-2 gap-4 form-group">
                                                <div className="form-group">
                                                    <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Amount</label>
                                                    <input type="text"
                                                        required
                                                        readOnly
                                                        className="form-control"
                                                        value={this.state.amount}


                                                    />
                                                    <p />
                                                </div>
                                                <div className="form-group">
                                                    <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Order Status</label>
                                                    <input type="text"
                                                        required

                                                        className="form-control"
                                                        value={this.state.orderStatus}
                                                        onChange={this.onChangeOrderStatus}

                                                    />
                                                    <p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.orderError}</p>

                                                </div>
                                            </div>
                                            <div class="grid grid-cols-2 gap-4 form-group">
                                                <div className="form-group">
                                                    <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Bank Name</label>
                                                    <input type="text"
                                                        required
                                                        className="form-control"
                                                        value={this.state.bankName}
                                                        readOnly
                                                    />
                                                    <p />
                                                </div>
                                                <div className="form-group">
                                                    <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Account Name</label>
                                                    <input type="text"
                                                        required
                                                        className="form-control"
                                                        value={this.state.accName}
                                                        readOnly
                                                    /><p />
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Payment Status</label>
                                                <input type="text"
                                                    required
                                                    className="form-control"
                                                    value={this.state.paymentStatus}
                                                    onChange={this.onChangePaymentStatus}
                                                />
                                                <p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.payError}</p>

                                            </div>
                                            <p />

                                            <div className="text-center align-middle form-group">
                                                <input className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mt-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' type="submit" value="Update Order" />
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