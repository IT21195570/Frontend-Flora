import React, {Component} from 'react';
import axios from 'axios';
import * as Swal from "sweetalert2";



export class ViewReadyDelivery extends Component {

    
    constructor(props){
        super(props);
        
       

        this.state = {
            id:props.deId,
            orderId : '',
            customer : '',
            item : '',
            quantity :'',
            deliveryAddress:'',
            amount:'',
            orderStatus:'',
            assignedEmp:''
            
        }
    }


    

    componentDidMount() {
        axios.get('http://localhost:5000/order/'+this.state.id)
        .then(response => {
            this.setState({
            orderId : response.data._id,
            customer : response.data.customer,
            item: response.data.item,
            quantity: response.data.quantity,
            deliveryAddress: response.data.deliveryAddress,
            amount: response.data.amount,
            orderStatus: response.data.orderStatus,
                })
            })
            .catch(function(error) {
                console.log(error);
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
                                                       
                                                    />
                                                </div>
                                                <div className="grid grid-cols-1 gap-4 form-group">
                                                <div class="form-group">
                                                    <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white' >
                                                       Item                                                     </label>
                                                    <input type="text"
                                                        required
                                                        disabled
                                                        className="form-control"
                                                        value={this.state.item}
                                                      
                                                    />
                                                </div>
                                            
                                            
                                                <div className="form-group">
                                                    <label for="large-input" className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                                        Quantity                                                 </label>
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
                                                        value={this.state.deliveryAddress}
                                                        
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label for="large-input" className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                                        Amount                                                    </label>
                                                    <input type="text"
                                                        className="form-control"
                                                        value={this.state.amount}
                                                        
                                                    />
                                                </div>
                                                </div>
                                                
                                                <div className="form-group">
                                                    <label for="large-input" className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                                        Status                                                    </label>
                                                    <input type="text"
                                                        className="form-control"
                                                        value={this.state.orderStatus}
                                                        
                                                    />
                                                </div>
                                                
                                           
                                            
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