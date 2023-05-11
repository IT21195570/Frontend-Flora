import { Component } from "react";

import AuthenticationService from "../user/AuthenticationService";

class navbar extends Component {
  logout = () => {
    AuthenticationService.logout();
    window.location = "/"
  }
  render() {

    const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
    const loggedUserRole = AuthenticationService.loggedUserRole();
    const loggedUserId = AuthenticationService.loggedUserId();

    console.log("User Id is" + loggedUserId);
    // const loggedUser = AuthenticationService.loggedUserName();
    let loggedAsEManager = false;
    let loggedAsCManager = false;
    let loggedAsSManager = false;
    let loggedAsIManager = false;
    // let loggedAsWStaff = false;
    let loggedAsGHManager = false;
    let loggedAsOManager = false;
    let loggedAsDManager = false;
    let loggedAsPManager = false;
    let loggedAsFManager = false;
    let loggedAsCustomer = false;
    let unknownUser = false;

    if (isUserLoggedIn == true) {
      console.log("User Logged In")
    } else {
      unknownUser = true;
    }
    if (loggedUserRole != null && loggedUserRole === 'Employee Manager') {
      loggedAsEManager = true;
    }
    if (loggedUserRole != null && loggedUserRole === 'Customer Manager') {
      loggedAsCManager = true;
    }
    if (loggedUserRole != null && loggedUserRole === 'Supplier Manager') {
      loggedAsSManager = true;
    }
    if (loggedUserRole != null && loggedUserRole === 'Inventory Manager') {
      loggedAsIManager = true;
    }
    if (loggedUserRole != null && loggedUserRole === 'Green House Manager') {
      loggedAsGHManager = true;
    }
    if (loggedUserRole != null && loggedUserRole === 'Delivery Manager') {
      loggedAsDManager = true;
    }
    if (loggedUserRole != null && loggedUserRole === 'Product Manager') {
      loggedAsPManager = true;
    } if (loggedUserRole != null && loggedUserRole === 'Order Manager') {
      loggedAsOManager = true;
    } if (loggedUserRole != null && loggedUserRole === 'Finance Manager') {
      loggedAsFManager = true;
    } if (loggedUserRole != null && loggedUserRole === 'Customer') {
      loggedAsCustomer = true;
    }

    return (
      <div>
        <div>
          <nav className="flex flex-col w-full px-6 py-2 bg-white shadow sm:flex-row sm:text-left sm:justify-between sm:items-baseline">
            {unknownUser &&
              <>
                <div className=" sm:mb-0">
                  <a href="/" className="font-serif text-xl font-semibold text-pink-500 no-underline uppercase duration-300 drop-shadow-xl">
                    {/* <p class="hover:text-pink-800">
                      Sonduruma mal<span class="">🌸</span>
                    </p> */}
                    <img
                      class="mx-auto w-36 pt-3 ml-2"
                      src="https://media.discordapp.net/attachments/815160100993499176/1105799681289764864/1.png?width=881&height=165"
                      alt="logo" />
                  </a>

                </div>

                <div class="">
                </div>
                <div className="grid grid-cols-2 gap-1">
                  <div class="flex flex-col sm:flex-row sm:text-left sm:justify-between">
                    <button class="flex  bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg px-5 py-2.5 mr-2 mb-2 dark:bg-pink-600 dark:hover:bg-pink-700 focus:outline-none dark:focus:ring-pink-800">  <a className="text-white no-underline text-md from-neutral-50" href="/signUp">Sign Up</a></button>
                  </div>
                  <div class="flex flex-col sm:flex-row sm:text-left sm:justify-between">
                    <button class="flex text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg px-5 py-2.5 mr-2 mb-2 dark:bg-pink-600 dark:hover:bg-pink-700 focus:outline-none dark:focus:ring-pink-800"><a className="text-white no-underline text-md" href="/signIn">Sign In</a></button>
                  </div>
                </div>
              </>
            }
            {isUserLoggedIn &&
              <>
                <div className="mb-2 sm:mb-0">
                  <a href="/" className="font-serif text-xl font-semibold text-pink-500 no-underline uppercase duration-300 drop-shadow-xl">
                    {/* <p class="hover:text-pink-800 duration-200">
                      Sonduruma mal<span class="">🌸</span>
                    </p> */}
                    <img
                      class="mx-auto w-36 pt-3 ml-2"
                      src="https://media.discordapp.net/attachments/815160100993499176/1105799681289764864/1.png?width=881&height=165"
                      alt="logo" />
                  </a>
                </div>
                <div className='text-lg font-light hover:text-pink-dark'>
                  {loggedAsCustomer &&
                    <>
                      <div>
                        <a href="/cusProfile" className="m-2 text-black no-underline duration-300 hover:text-orange-800 hover:font-normal">My Profile</a>

                      </div>
                    </>
                  }

                  {loggedAsEManager &&
                    <>
                      <div>
                        <a href="/employee" className="m-2 text-black no-underline duration-300 hover:text-orange-800 hover:font-normal">Employees</a>

                      </div>
                    </>
                  }

                  {loggedAsCManager &&
                    <div>
                      <a href="/customer" className="m-2 text-black no-underline duration-300 hover:text-pink-800 hover:font-normal">Customer</a>

                    </div>
                  }
                  {loggedAsOManager &&
                    <div>
                      <a href="/order" className="m-2 text-black no-underline duration-300 hover:text-orange-800 hover:font-normal">Orders</a>

                    </div>
                  }

                  {loggedAsIManager &&
                    <>
                      <div>
                        <a href="/inventory" className="m-2 text-black no-underline duration-300 hover:text-orange-800 hover:font-normal">Inventory</a>




                      </div>
                    </>
                  }



                  {loggedAsGHManager &&
                    <>
                      <div>
                        <a href="/greenHouse" className="m-2 text-black no-underline duration-300 hover:text-orange-800 hover:font-normal">Green House</a>


                      </div>
                    </>
                  }

                  {loggedAsSManager &&
                    <>
                      <div>
                        <a href="/supplier" className="m-2 text-black no-underline duration-300 hover:text-orange-800 hover:font-normal">Supplier</a>
                        <a href="/inventoryorder" className="m-2 text-black no-underline duration-300 hover:text-orange-800 hover:font-normal">Inventory Orders</a>



                      </div>
                    </>
                  }

                  {loggedAsPManager &&
                    <div>
                      <a href="/product" className="m-2 text-black no-underline duration-300 hover:text-orange-800 hover:font-normal">Product</a>

                    </div>
                  }

                  {loggedAsDManager &&
                    <>
                      <div>
                        <a href="/createDriver" className="m-2 text-black no-underline duration-300 hover:text-orange-800 hover:font-normal">Add Driver</a>

                        <a href="/delivery" className="m-2 text-black no-underline duration-300 hover:text-orange-800 hover:font-normal">All Deliveries</a>
                        <a href="/readyDelivery" className="m-2 text-black no-underline duration-300 hover:text-orange-800 hover:font-normal">Ready Delivery</a>


                      </div>
                    </>
                  }

                  {loggedAsFManager &&
                    <>
                      <div>
                        <a href="/salary" className="m-2 text-black no-underline duration-300 hover:text-orange-800 hover:font-normal">Salary</a>
                        {/* <a href="/expense" className="m-2 text-black no-underline duration-300 hover:text-orange-800 hover:font-normal">Expenses</a> */}

                      </div>
                    </>
                  }

                </div>
                <div class="flex flex-col sm:flex-row sm:text-left sm:justify-between">
                  <button class="flex text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-pink-600 dark:hover:bg-pink-700 focus:outline-none dark:focus:ring-pink-800" onClick={this.logout}> Logout</button>
                </div>
              </>
            }
          </nav>
        </div >
      </div >
    );
  }
}

export default navbar;