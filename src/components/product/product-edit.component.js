import React, { Component } from 'react';
import axios from 'axios';
import * as Swal from "sweetalert2";
import { storage } from "../../firebase";

export class EditProduct extends Component {
    constructor(props) {
        super(props);
        this.onChangeproductID = this.onChangeproductID.bind(this);
        this.onChangeproductName = this.onChangeproductName.bind(this);
        this.onChangeproductCategory = this.onChangeproductCategory.bind(this);
        this.onChangedescription = this.onChangedescription.bind(this);
        this.onChangeimage = this.onChangeimage.bind(this);
        this.onChangeprice = this.onChangeprice.bind(this);
        this.onChangediscount = this.onChangediscount.bind(this);
        this.onChangeavailability = this.onChangeavailability.bind(this);
        this.uploadImage = this.uploadImage.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            id: props.proId,
            productID: '',
            productName: '',
            productCategory: '',
            description: '',
            image: '',
            price: '',
            discount: 0,
            availability: ''
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/product/` + this.state.id)
            .then(response => {
                this.setState({
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

    onChangeproductID(e) {
        this.setState({
            productID: e.target.value
        });
    }

    onChangeproductName(e) {
        this.setState({
            productName: e.target.value
        });
    }

    onChangeproductCategory(e) {
        this.setState({
            productCategory: e.target.value
        });
    }

    onChangedescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    onChangeimage(e) {
        this.setState({
            image: e.target.value
        });
    }

    onChangeprice(e) {
        this.setState({
            price: e.target.value
        });
    }

    onChangediscount(e) {
        this.setState({
            discount: e.target.value
        });
    }

    onChangeavailability(e) {
        this.setState({
            availability: e.target.value
        });
    }

    uploadImage = (e) => {
        if (e.target.files[0] !== null) {
            const fileName = e.target.files[0].name + "-" + new Date();
            const uploadTask = storage
                .ref(`digitalbook/${fileName}`)
                .put(e.target.files[0]);
            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    //progress function
                    const progress = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    );
                },
                (error) => {
                    //error function
                    console.log(error);
                },
                () => {
                    //complete function
                    storage
                        .ref("digitalbook")
                        .child(fileName)
                        .getDownloadURL()
                        .then((url) => {
                            // this.image(url);
                            this.setState({
                                image: url
                            });
                        });

                    this.setState({
                        image: e.target.value
                    });
                }
            );
        } else {
            console.log("Something went wrong");
        }
    };

    onSubmit(e) {
        e.preventDefault();
        const product = {
            productID: this.state.productID,
            productName: this.state.productName,
            productCategory: this.state.productCategory,
            description: this.state.description,
            image: this.state.image,
            price: this.state.price,
            discount: this.state.discount,
            availability: this.state.availability
        }
        console.log(product);

        if (this.state.productName.length < 3) {
            this.setState({ nameError: "Product Name should be longer than 3 characters." })
        } else if (this.state.productCategory.length < 3) {
            this.setState({ productCategoryError: "Invalid Product Category" })
        }
        else if (this.state.price < 500) {
            this.setState({ priceError: "Price cannot be lesser than 500" })
        } else {
            axios.put('http://localhost:5000/product/' + this.state.id, product)
                .then(res => {
                    console.log(res);
                    if (res.status === 200) {
                        this.clearData();
                        Swal.fire({
                            icon: 'success',
                            title: 'Successful',
                            text: 'Product has been Updated!!',
                            background: '#fff',
                            confirmButtonColor: '#333533',
                            iconColor: '#60e004'
                        })

                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            text: 'Error in Updating!',
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
            productID: '',
            productName: '',
            productCategory: '',
            description: '',
            image: '',
            price: '',
            discount: 0,
            availability: ''
        })
    }

    render() {
        return (
            <div className="flex flex-col px-5 pt-2 ">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className='items-center overflow-hidden'>
                            <div class="grid grid-cols-1 gap-4 content-start pt-5 px-20">
                                <form className='' onSubmit={this.onSubmit}>
                                    <div class="">
                                        <p className='text-4xl font-semibold text-black uppercase'>
                                            Edit Product
                                        </p>
                                        <div className="form-group">
                                            <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Product ID</label>
                                            <input type="text"
                                                required
                                                disabled
                                                className="form-control"
                                                value={this.state.productID}
                                                onChange={this.onChangeproductID}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Product Name</label>
                                            <input type="text"
                                                required
                                                className="form-control"
                                                value={this.state.productName}
                                                onChange={this.onChangeproductName}
                                            /><p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.nameError}</p>
                                        </div>
                                        <div className="form-group">
                                            <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Product Category</label>
                                            <select type="text"
                                                required
                                                className="form-control"
                                                value={this.state.productCategory}
                                                onChange={this.onChangeproductCategory}
                                            >
                                                <option>Select Category</option>
                                                <option>Anniversary</option>
                                                <option>Thankyou</option>
                                                <option>Get Well Soon</option>
                                                <option>Mother's day</option>
                                                <option>Birthday</option>
                                            </select><p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.productCategoryError}</p>
                                        </div>
                                        <div className="form-group">
                                            <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Product Description</label>
                                            <input type="text"
                                                required
                                                className="form-control"
                                                value={this.state.description}
                                                onChange={this.onChangedescription}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Price (LKR)</label>
                                            <input type="text"
                                                placeholder='2700 LKR'
                                                className="form-control"
                                                value={this.state.price}
                                                onChange={this.onChangeprice}
                                            /><p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.priceError}</p>
                                        </div>
                                        <div className="form-group">
                                            <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Discount (LKR)</label>
                                            <input type="text"
                                                placeholder='1000 LKR'
                                                className="form-control"
                                                value={this.state.discount}
                                                onChange={this.onChangediscount}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Availability</label>
                                            <select type="text"
                                                className="form-control"
                                                value={this.state.availability}
                                                onChange={this.onChangeavailability}
                                            >
                                                <option>Select From Here</option>
                                                <option>Yes</option>
                                                <option>No</option>
                                            </select><p />
                                        </div>

                                        <div className="mb-6">
                                            <label
                                                className="block mb-2 font-medium text-gray-900 text-xxl dark:text-white"
                                                for="file_input">
                                                Upload Image
                                            </label>
                                            {this.state.image && <img className='object-contain w-48 h-48' src={this.state.image} alt='' />}

                                            <input
                                                className="block w-full text-gray-900 border border-gray-300 rounded-lg cursor-pointer text-xxl bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                                id="file_input"
                                                onChange={(e) => this.uploadImage(e)}
                                                type="file"
                                                required
                                            />
                                        </div>
                                        <div className="text-center align-middle form-group">
                                            <input className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' type="submit" value="Edit Product" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




        )
    }
}