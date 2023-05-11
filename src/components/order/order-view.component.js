import React, { Component } from 'react';
import axios from 'axios';


export default class ViewOrder extends Component {

    constructor(props) {
        super(props);

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



    render() {
        return (
            <div className="flex flex-col px-5 pt-2 ">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className='items-center overflow-hidden'>
                            <div className=''>
                                <div class="grid grid-cols-1 gap-4 content-start pt-5 px-20">
                                    <div className="formdiv">
                                        <form className='' >

                                            <div class="grid grid-cols-2 gap-4 form-group">
                                                <div className="form-group">
                                                    <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Order ID </label>
                                                    <input type="text"
                                                        // required
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

                                                    /><p />
                                                </div>
                                            </div>
                                            <div class="grid grid-cols-2 gap-4 form-group">
                                                <div className="form-group">
                                                    <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Item</label>
                                                    <input type="text"
                                                        required
                                                        className="form-control"
                                                        value={this.state.item}

                                                    />
                                                    <p />
                                                </div>
                                                <div className="form-group">
                                                    <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Quantity</label>
                                                    <input type="text"
                                                        required
                                                        className="form-control"
                                                        value={this.state.quantity}

                                                    /><p />
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Delivery Address</label>
                                                <input type="text"
                                                    required
                                                    className="form-control"
                                                    value={this.state.deliveryAddress}

                                                /><p />
                                            </div>



                                            <div class="grid grid-cols-2 gap-4 form-group">
                                                <div className="form-group">
                                                    <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Amount</label>
                                                    <input type="text"
                                                        required
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

                                                    /><p />
                                                </div>
                                            </div>

                                            <div class="grid grid-cols-2 gap-4 form-group">
                                                <div className="form-group">
                                                    <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Bank Name</label>
                                                    <input type="text"
                                                        required
                                                        className="form-control"
                                                        value={this.state.bankName}

                                                    />
                                                    <p />
                                                </div>
                                                <div className="form-group">
                                                    <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Account Name</label>
                                                    <input type="text"
                                                        required
                                                        className="form-control"
                                                        value={this.state.accName}

                                                    /><p />
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Payment Status</label>
                                                <input type="text"
                                                    required
                                                    className="form-control"
                                                    value={this.state.paymentStatus}

                                                /><p />
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