import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Carousel, initTE } from "tw-elements";

import Navbar from "./components/navbar/navbar.component";
import Footer from "./components/navbar/footer.component";
import { EmployeeList } from "./components/employee/employee-list.component";
import { CreateEmployee } from './components/employee/employee-add.component';
import EditEmployee from "./components/employee/employee-edit.component";
import { CustomerList } from './components/customer/customer-list.component'
import { CreateCustomer } from './components/customer/customer-add.component'
import EditCustomer from './components/customer/customer-edit.component'
import { OrderList } from './components/order/order-list.component'
import { CreateOrder } from './components/order/order-add.component'
import EditOrder from './components/order/order-edit.component'
import { InventoryList } from './components/inventory/inventory-list.component'
import { CreateInventory } from './components/inventory/inventory-add.component'
import EditInventory from './components/inventory/inventory-edit.component'
import { ProductList } from './components/product/product-list.component'
import { CreateProduct } from './components/product/product-add.component'
import { InventoryOrderList } from './components/inventoryOrder/inventoryOrders-list.component'
import { CreateInventoryOrder } from './components/inventoryOrder/inventoryOrders-add.component'

import { DeliveryList } from './components/delivery/delivery-list.component'

import { ReadyDeliveryList } from './components/delivery/ready-delivery.component'

import { CreateSalary } from './components/salary/salary-add.component';
import { SalaryList } from './components/salary/salary-list.component';


import { UserRegistration } from './components/user/user-registration.component';
import { UserLogin } from './components/user/user-login.component';

import Home from "./components/navbar/home";
import { GreenHouseList } from './components/greenHouse/greenHouse-list.component';
import { CreateGreenHouse } from './components/greenHouse/greenHouse-add.component';
import { SupplierList } from './components/supplier/supplier-list.component';
import { CreateSupplier } from './components/supplier/supplier-add.component';
import CusHome from './components/navbar/cus-home.component';
import { AdminLogin } from './components/user/admin-login.component';
import { CustomerProfile } from './components/user/customer-profile.component';
import { CreateDriver } from './components/delivery/driver-add.component';
import ExpenseDashboard from './components/expenses/expense-dashboard.component';
initTE({ Carousel }, true); // set second parameter to true if you want to use a debugger

function App() {
  return (
    // <div className="App">
    // <Router>



    // <EmployeeList/>
    // <div>
    // <Routes>

    // <Route path = "/" exact component = {EmployeeList}/>
    // <Route exact path = "/creatEmployee" component = {<CreateEmployee/>}/>
    // <Route exact path = "/editEmployee/:id" component = {EditEmployee}/>
    // </Routes>
    // </div>
    // </Router>
    // </div>
    <div>
      <Navbar />
      {/* <Home/> */}
      <Router>
        {/* <EmployeeList/> */}
        <Routes>

          <Route exact path="/nav" element={Navbar} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cus" element={<CusHome />} />
          <Route exact path="/adminLogin" element={<AdminLogin />} />
          <Route exact path="/cusProfile" element={<CustomerProfile />} />
          <Route exact path="/createDriver" element={<CreateDriver />} />
          <Route exact path="/expenses" element={<ExpenseDashboard />} />

          <Route exact path="/employee" element={<EmployeeList />} />{/* Done */}
          <Route exact path="/creatEmployee" element={<CreateEmployee />} />{/* Done */}
          <Route exact path="/editEmployee/:id" element={EditEmployee} />{/* Done */}

          <Route exact path="/customer" element={<CustomerList />} /> {/* Done */}
          <Route exact path="/creatcustomer" element={<CreateCustomer />} /> {/* Done */}
          <Route exact path="/editCustomer/:id" element={EditCustomer} />

          <Route exact path="/order" element={<OrderList />} /> {/* Done */}
          <Route exact path="/creatOrder" element={<CreateOrder />} /> {/* Done */}
          <Route exact path="/editOrder/:id" element={EditOrder} />{/* Done */}

          <Route exact path="/inventory" element={<InventoryList />} /> {/* Done */}
          <Route exact path="/creatInventory" element={<CreateInventory />} />{/* Done */}
          <Route exact path="/editInventory/:id" element={EditInventory} />{/* Done */}

          <Route exact path="/product" element={<ProductList />} /> {/* Done */}
          <Route exact path="/creatProduct" element={<CreateProduct />} />{/* Done */}

          <Route exact path="/inventoryorder" element={<InventoryOrderList />} />{/* Done */}
          <Route exact path="/creatInventoryOrder" element={<CreateInventoryOrder />} />  {/* dont edit this */}

          <Route exact path="/delivery" element={<DeliveryList />} /> {/* Done */}
         
          <Route exact path="/readyDelivery" element={<ReadyDeliveryList />} />{/* Done  and need to check with data*/}


          <Route exact path="/signUp" element={<UserRegistration />} />{/* Done */}
          <Route exact path="/signIn" element={<UserLogin />} />{/* Done */}

          <Route exact path="/createSalary" element={<CreateSalary />} />{/* Done */}
          <Route exact path="/salary" element={<SalaryList />} />{/* Done */}


          <Route exact path="/greenHouse" element={<GreenHouseList />} />{/* Done */}
          <Route exact path="/createGreenHouse" element={<CreateGreenHouse />} />{/* Done */}
          <Route exact path="/supplier" element={<SupplierList />} />{/* Done */}
          <Route exact path="/createSupplier" element={<CreateSupplier />} />{/* Done */}
          
        </Routes>
      </Router>
      <Footer />
    </div>
  );

}

export default App;
