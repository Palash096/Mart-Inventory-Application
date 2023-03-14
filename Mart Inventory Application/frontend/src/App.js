import { BrowserRouter, Switch, Route } from 'react-router-dom';
import EmployeeList from './components/EmployeesList';
import NotFound from './components/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddEmployee from './components/AddEmployee';
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';
import BaseCompanent from './components/BaseComponent';
import BillingExecutive from './components/Order/BillingExecutive';
import AddItem from './components/Order/AddItem';
import LoginPage from './components/LoginPage';
import RegistrationForm from './components/RegistrationForm';
import AddCustomer from './components/Customer/AddCustomer';
import CustomerList from './components/Customer/CustomerList';
import HomePage from './pages/HomePage';
import NavbarComponent from './components/navbar/NavbarComponent';


function App() {
  return (
    <BrowserRouter>
      <div>
        <div>
          <Switch>
          {/* <HomePage/> */}
          <Route exact path="/" component={NavbarComponent} />
          <Route exact path="/LoginPage" component={LoginPage} />
          <Route exact path="/BaseCompanent" component={BaseCompanent} />
          <Route exact path="/RegistrationForm" component={RegistrationForm} />

            {/* For Employee */}
            <Route exact path="/employee" component={EmployeeList} />
            <Route path="/adde" component={AddEmployee} />
            <Route path="/employees/edite/:id" component={AddEmployee} />

            {/* For Product */}
            <Route exact path="/product" component={ProductList} />
            <Route path="/addp" component={AddProduct} />
            <Route path="/product/editp/:id" component={AddProduct} />

            {/* For Billing */}
            <Route path="/addi" component={AddItem} />
            <Route exact path="/billing" component={BillingExecutive} />

            {/* For Customer */}
            <Route exact path="/customer" component={CustomerList} />
            <Route path="/addc" component={AddCustomer} />
            <Route path="/customer/editc/:id" component={AddCustomer} />

            {/* If nothing found * will be called */}
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
