import React, { Component } from 'react';
import axios from 'axios';
import * as Swal from "sweetalert2";

export class EditDelivery extends Component {
    constructor(props) {
        super(props);
        this.onChangecustomer = this.onChangecustomer.bind(this);
        this.onChangeassignedEmp = this.onChangeassignedEmp.bind(this);
        this.onChangeOrderStatus = this.onChangeOrderStatus.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            deliveryId: props.deId,
            orderId: '',
            customer: '',
            item: '',
            quantity: '',
            deliveryAddress: '',
            amount: '',
            orderStatus: '',
            assignedEmp: ''
        }
    }

    onChangecustomer(e) {
        this.setState({
            customer: e.target.value
        });
    }

    onChangeassignedEmp(e) {
        this.setState({
            assignedEmp: e.target.value
        });
    }

    onChangeOrderStatus(e) {
        this.setState({
            orderStatus: e.target.value
        });
    }



    componentDidMount() {

        this.refreshList();
    }

    refreshList() {
        axios.get('http://localhost:5000/delivery/' + this.state.deliveryId)
            .then(response => {
                this.setState({
                    deliveryId: response.data._id,
                    orderId: response.data.orderId,
                    customer: response.data.customer,
                    item: response.data.item,
                    quantity: response.data.quantity,
                    deliveryAddress: response.data.deliveryAddress,
                    amount: response.data.amount,
                    orderStatus: response.data.orderStatus,
                    assignedEmp: response.data.assignedEmp
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    onSubmit(e) {
        e.preventDefault();



        const delivery = {
            orderId: this.state.orderId,
            customer: this.state.customer,
            item: this.state.item,
            quantity: this.state.quantity,
            deliveryAddress: this.state.deliveryAddress,
            amount: this.state.amount,
            orderStatus: this.state.orderStatus,
            assignedEmp: this.state.assignedEmp
        }

        console.log(delivery);


        axios.put('http://localhost:5000/delivery/' + this.state.deliveryId, delivery)


            .then(res => {

                console.log(res);

                if (res.status === 200) {
                    this.refreshList();
                    Swal.fire({
                        icon: 'success',
                        title: 'Successful',
                        text: 'Delivery has been Updated!!',
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







    render() {
        return (
            <div >
                <div className="flex flex-col px-5 ">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full sm:px-6 lg:px-8">
                            <div className='items-center overflow-hidden'>
                                <div className=''>
                                    <div class="grid grid-cols-1 gap-4 content-start pt-5 px-20">
                                        <form className='px-12 py-6 border-2 rounded-lg shadow-md bg-gray-50' onSubmit={this.onSubmit}>
                                            <div class="">

                                                <div class="">
                                                    <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                                        Delivery ID                                                        </label>
                                                    <input
                                                        type="text"
                                                        required
                                                        disabled
                                                        className="form-control"
                                                        value={this.state.deliveryId}

                                                    />
                                                </div>

                                                <div class="">
                                                    <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                                        Order ID                                                        </label>
                                                    <input
                                                        type="text"
                                                        required
                                                        disabled
                                                        className="form-control"
                                                        value={this.state.orderId}

                                                    />
                                                </div>



                                                <div className="form-group">
                                                    <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                                        Customer                                                        </label>
                                                    <input type="text"
                                                        required
                                                        disabled
                                                        className="form-control"
                                                        value={this.state.customer}
                                                        onChange={this.onChangecustomer}

                                                    />
                                                </div>
                                                <div className="grid grid-cols-1 gap-4 form-group">
                                                    <div class="form-group">
                                                        <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white' >
                                                            Item                                                       </label>
                                                        <input type="text"
                                                            required
                                                            disabled
                                                            className="form-control"
                                                            value={this.state.item}

                                                        />
                                                    </div>


                                                    <div className="form-group">
                                                        <label for="large-input" className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                                            Quantity                                                    </label>
                                                        <input type="text"
                                                            className="form-control"
                                                            disabled
                                                            value={this.state.quantity}

                                                        />
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-1 gap-4 form-group">
                                                    <div className="form-group">
                                                        <label for="large-input" className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                                            Delivery Address                                                    </label>
                                                        <input type="text"
                                                            className="form-control"
                                                            disabled
                                                            value={this.state.deliveryAddress}

                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label for="large-input" className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                                            Amount                                                    </label>
                                                        <input type="text"
                                                            className="form-control"
                                                            disabled
                                                            value={this.state.amount}

                                                        />
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label for="large-input" className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                                        Status                                                    </label>
                                                    <input type="text"
                                                        className="form-control"
                                                        onChange={this.onChangeOrderStatus}
                                                        value={this.state.orderStatus}

                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label for="large-input" className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                                        Assigned Employee                                                    </label>
                                                    <input type="text"
                                                        className="form-control"

                                                        value={this.state.assignedEmp}
                                                        onChange={this.onChangeassignedEmp}

                                                    />
                                                </div>



                                            </div>
                                            <p />
                                            <div className="text-center align-middle form-group">
                                                <input className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' type="submit" value="Edit Delivery" />
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