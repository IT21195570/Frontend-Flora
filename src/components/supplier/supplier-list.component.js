import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from "sweetalert2";
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { Modal } from "react-bootstrap";
import EditSupplier from './supplier-edit.component';

const Supplier = props => (
    <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
        <td className='px-6 py-4'>{props.supplier.supID}</td>
        <td className='px-6 py-4'>{props.supplier.fullName}</td>
        <td className='px-6 py-4'>{props.supplier.contactNo}</td>
        <td className='px-6 py-4'>{props.supplier.email}</td>
        <td className='px-6 py-4'>{props.supplier.address}</td>
        
        <td className='px-6 py-4'>
            <div class="flex justify-center">
                <div class="">
                    <button className='inline-flex items-center px-4 py-2 ml-1 text-sm font-medium text-white duration-100 bg-indigo-500 rounded-md hover:bg-blue-200' onClick={() => { props.gotoUpdateSupplier(props.supplier._id) }}>
                        <div class=" grid grid-cols-2 gap-1 hover:text-black duration-100">
                            <div class="">
                                <svg class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round " stroke-width="2" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"></path>
                                </svg>
                            </div>
                            <div class="">
                                Edit
                            </div>
                        </div>
                    </button>
                </div>
                <div class="">
                    <button className='inline-flex items-center px-4 py-2 ml-1 text-sm font-medium text-white duration-100 bg-red-500 rounded-md hover:bg-red-200' onClick={() => { props.deleteSupplier(props.supplier._id) }}>
                        <div class="grid grid-cols-2 gap-1 hover:text-black">
                            <div class="">
                                <svg class="h-5 w-5 mr-2 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </div>
                            <div>
                                Delete
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </td>
    </tr>
)

export class SupplierList extends Component {
    constructor(props) {
        super(props);
        this.deleteSupplier = this.deleteSupplier.bind(this);
        this.gotoUpdateSupplier = this.gotoUpdateSupplier.bind(this);
        this.state = {
            supplier: [],
            searchSupplier: "",
            show: false
        };
    }

    refreshList() {
        axios.get('http://localhost:5000/supplier/')
            .then(response => {
                this.setState({ supplier: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    componentDidMount() {
        this.refreshList();
    }

    gotoUpdateSupplier = (id) => {
        this.setState({
            id: id,
            show: true

        })
        console.log("LIst id is :" + id);
    }

    //Modal box
    closeModalBox = () => {
        this.setState({ show: false })
        this.refreshList();
    }

    deleteSupplier(id) {
        axios.delete('http://localhost:5000/supplier/' + id).then(response => {
            console.log(response.status)
            if (response.status == 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Successful',
                    text: "Supplier has been deleted!!",
                    background: '#fff',
                    confirmButtonColor: '#0a5bf2',
                    iconColor: '#60e004'
                })
                this.refreshList();
            }
            else {
                Swal.fire({
                    icon: 'Unsuccess',
                    title: 'Unsuccessfull',
                    text: "Supplier has not been deleted!!",
                    background: '#fff',
                    confirmButtonColor: '#eb220c',
                    iconColor: '#60e004'
                })
            }
        })
    }

    supplierList() {
        return this.state.supplier.map(currentsupplier => {
            return <Supplier
                supplier={currentsupplier}
                deleteSupplier={this.deleteSupplier}
                gotoUpdateSupplier={this.gotoUpdateSupplier}
                key={currentsupplier._id}
            />;
        })
    }

    searchSupplierList() {
        return this.state.supplier.map((currentsupplier) => {
            if (
                this.state.searchSupplier ==
                currentsupplier.supID
            ) {
                return (
                    <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                        <td className='px-6 py-4'>{currentsupplier.supID}</td>
                        <td className='px-6 py-4'>{currentsupplier.fullName}</td>
                        <td className='px-6 py-4'>{currentsupplier.contactNo}</td>
                        <td className='px-6 py-4'>{currentsupplier.email}</td>
                        <td className='px-6 py-4'>{currentsupplier.address}</td>
                       
                        <td className='flex justify-center px-6 py-4 '>
                            {
                                <div class="">
                                    <button className='inline-flex items-center px-4 py-2 mr-1 text-sm font-medium text-white bg-indigo-500 rounded-md hover:bg-blue-200' onClick={() => { this.gotoUpdateSupplier(currentsupplier._id) }}>
                                        <div class=" grid grid-cols-2 gap-1">
                                            <div class="">
                                                <svg class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round " stroke-width="2" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"></path>
                                                </svg>
                                            </div>
                                            <div class="">
                                                Edit
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            }
                            {"  "}
                            {
                                <div class="">
                                    <button className='inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-200'
                                        onClick={() => {
                                            //Delete the selected record
                                            this.deleteSupplier(currentsupplier._id)
                                        }}>
                                        <div class=" grid grid-cols-2 gap-1">
                                            <div class="">
                                                <svg class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                            </div>
                                            <div class="">
                                                Delete
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            }
                        </td>
                    </tr>
                );
            }
        });
    }


    exportSupplier = () => {
        console.log("Export PDF")
        const unit = "pt";
        const size = "A3";
        const orientation = "landscape";
        const marginLeft = 40;
        const doc = new jsPDF(orientation, unit, size);
        const title = "Supplier List Report ";
        const headers = [["Supplier ID", "Full Name", "Contact Number", "Email", "Address"]];
        const emp = this.state.supplier.map(
            Supplier => [
                Supplier.supID,
                Supplier.fullName,
                Supplier.contactNo,
                Supplier.email,
                Supplier.address
            ]
        );
        let content = {
            startY: 50,
            head: headers,
            body: emp
        };
        doc.setFontSize(20);
        doc.text(title, marginLeft, 40);
        require('jspdf-autotable');
        doc.autoTable(content);
        doc.save("Supplier-list.pdf")
    }

    //render method
    render() {
        return (
            <div className="flex flex-col px-5 pt-2">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className='items-center overflow-hidden'>
                            <div class="grid grid-cols-1 gap-4 content-start">
                                <table className=''>
                                    <tr>
                                        <th className='drop-shadow-md'>
                                            <h3>Supplier Details</h3>
                                        </th>
                                        <td className='flex justify-end gap-2'>
                                            <div class="flex justify-end sm:flex-row sm:text-left sm:justify-end gap-2">
                                                <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                                    <Link className='font-semibold text-white no-underline' to={"/createSupplier"}>
                                                        Add Supplier
                                                    </Link></button>
                                                <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => this.exportSupplier()}>
                                                    Download Report Here
                                                </button>
                                            </div>
                                            <div class="flex justify-end sm:flex-row sm:text-left sm:justify-end">
                                                <input
                                                    className="form-control rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                                                    type="text"
                                                    placeholder="Search by Supplier ID"
                                                    aria-label="Search"
                                                    onChange={(e) => {
                                                        this.setState({
                                                            searchSupplier: e.target.value
                                                        });
                                                    }}
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                            <div className='relative grid content-start grid-cols-1 gap-4 overflow-x-auto shadow-md sm:rounded-lg'>
                                <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400' >
                                    <thead className='p-5 text-xs text-gray-700 uppercase border bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                                        <tr>
                                            <th className="p-2 border-black tbhead ">Supplier ID</th>
                                            <th className="p-2 tbhead">Supplier Name</th>
                                            <th className="p-2 tbhead">Contact Number</th>
                                            <th className="p-2 tbhead">Email</th>
                                            <th className="p-2 tbhead">Address</th>
                                         
                                            <th className="p-2 text-center tbhead">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody >
                                        {this.state.searchSupplier == "" ? this.supplierList() : this.searchSupplierList()}
                                    </tbody>
                                </table>
                            </div>
                            <div class="">
                                <Modal show={this.state.show} onHide={this.closeModalBox} centered size={"xl"}>
                                    <Modal.Body className='px-12 py-12 border-2 rounded-lg shadow-md bg-gray-50'>
                                        <EditSupplier spId={this.state.id} key={this.state.id} close={this.closeModalBox} />
                                    </Modal.Body>
                                </Modal>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

