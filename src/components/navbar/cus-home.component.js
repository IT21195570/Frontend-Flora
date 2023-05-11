import { Component } from "react";
import { Carousel, initTE } from "tw-elements";
import AuthenticationService from "../user/AuthenticationService";
import axios from 'axios';
import 'tw-elements';
import { CreateOrder } from "../order/order-add.component";
import { Modal } from "react-bootstrap";

initTE({ Carousel });

class CusHome extends Component {

    constructor(props) {
        super(props);
        this.gotoOrder = this.gotoOrder.bind(this);
        this.state = {
            products: [],

            search: "",
            show: false,
        };
    }

    componentDidMount() {
        this.productList();
    }

    gotoOrder = (id) => {
        this.setState({
            id: id,
            show: true

        })
        console.log("LIst id is :" +id);
    }

    //Modal box
    closeModalBoxForOrder = () => {
        this.setState({ show: false })
        // this.refreshList();
       
    }

    productList() {
        axios.get('http://localhost:5000/product/')
            .then(response => {
                this.setState({ products: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    searchProductList() {
        return this.state.products.map((currentProduct) => {
            {
                return (
                    <div class="container">
                        <div className="mt-5 mb-5 duration-300 shadow-xl card w-96 bg-base-100 hover:scale-105" onClick={() => { this.gotoOrder(currentProduct._id) }}>
                            <figure>
                                <img src={currentProduct.image} alt="Weddings" className='h-96 w-96' />
                            </figure>
                            <div className=" card-body">
                                <h2 className="text-4xl font-bold text-center text-pink-600 uppercase duration-300 hover:text-red-500 card-title">{currentProduct.productName}</h2>
                                <p className='text-xl font-medium text-center'>{currentProduct.productCategory}</p>
                                <div class="flex justify-between">
                                    <div>
                                        <span class="text-lg font-bold">{currentProduct.discount}</span> LKR
                                    </div>
                                    <div>
                                        <span class=" text-lg font-bold">{currentProduct.price}</span> Per Flower
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        });
    }

    render() {
        // const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        // const loggedUserRole = AuthenticationService.loggedUserRole();
        // // const loggedUser = AuthenticationService.loggedUserName();
        // let loggedAsEManager = false;
        // let loggedAsCManager = false;
        // let loggedAsEditor = false;
        // let unknownUser = false;

        // if (isUserLoggedIn === true) {
        //   console.log("User Logged In")
        // } else {
        //   unknownUser = true;
        // }

        // if (loggedUserRole != null && loggedUserRole === 'Employee Manager') {
        //   loggedAsEManager = true;
        // }
        // if (loggedUserRole != null && loggedUserRole === 'Customer Manager') {
        //   loggedAsCManager = true;
        // }
        // if (loggedUserRole != null && loggedUserRole === 'editor') {
        //   loggedAsEditor = true;
        // }



        return (
            <div class="">
                <div class="container pb-12">
                    {/* <img className="object-contain object-center max-w-full bg-yellow-300" src="https://plazahollandi.com/wp-content/uploads/2020/09/bunches-of-tulips-scaled.jpg" alt="Jetwing Colombo Seven" /> */}
                    <div class="object-center bg-[url(https://wallpapershome.com/images/pages/pic_h/3787.jpg)] h-[600px] w-[1296px] relative">
                        <div class="absolute top-48 text-center px-4 py-3 bg-slate-300/50 font-serif w-full">
                            <h1 class="text-white font-bold text-7xl"><span class="text-pink-600 text-8xl">S</span>onduruma <span class="text-pink-600 text-8xl">M</span>al<span class="">🌸</span></h1>
                        </div>
                    </div>
                </div>

                {/* events and meetings */}
                <section class="container">
                    <div class="text-center bg-white text-gray-800 px-6">
                        <h1 class="text-6xl text-blue-950 md:text-6xl xl:text-3xl font-bold tracking-tight uppercase drop-shadow-md ">Products<br />
                        </h1>
                        <hr />
                    </div>
                </section>

                <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-12 mb-5 grid grid-cols-3 content-center ">
                    {this.searchProductList()}
                </div>


                <div class="">
                                <Modal show={this.state.show} onHide={this.closeModalBoxForOrder} centered size={"xl"}>
                                    <Modal.Body className='px-12 py-12 border-2 rounded-lg shadow-md bg-gray-50'>
                                        <CreateOrder proId={this.state.id} key={this.state.id} close={this.closeModalBoxForOrder} />
                                    </Modal.Body>
                                </Modal>
                            </div>

                {/*  */}

            </div>
        );
    }
}

export default CusHome;