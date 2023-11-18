import { Route, Switch } from 'react-router-dom';
import './App.css';



// import LogInPage from './Components/AuthPage/login/LoginPage';
// import SignUpPage from './Components/AuthPage/signUp/SignUp';
// import AdminLogInPage from './Components/AuthPage/adminLogin/AdminLoginPage';
// import AdminSignUpPage from './Components/AuthPage/adminSignUp/AdminSignUp';
// import LandingPage from './Components/Pages/Landing/LandingPage/LandingPage';
// import ContactLand from './Components/Pages/Landing/L-Contact/ContactLand';
// import LocateUsLand from './Components/Pages/Landing/LocateUs/LocateUsLand';
// import MainPage from './Components/Pages/Main/MainPage/MainPage';
// import ContactMain from './Components/Pages/Main/M-Contact/ContactMain';
// import LocateUsMain from './Components/Pages/Main/LocateUsMain/LocateUsMain';
// import ProductsPageMain from './Components/Pages/Main/ProductsMain/ProductsMain';
//useContext,
import {  useEffect } from 'react';
import { fetchProducts } from './Redux/Products/productsAction';
import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';



import { fetchCart } from './Redux/Cart/cartAction';
// import { ShineContext } from './Context';

import { fetchStock } from './Redux/Stock/stockAction';
import { fetchAllOrders, fetchOrders} from './Redux/orders/ordersAction';
import LandingPage from './Pages/Landing/LandingPage/LandingPage';
import LogInPage from './Components/login/LoginPage';
import SignUpPage from './Components/signUp/SignUp';
import AdminLogInPage from './Components/adminLogin/AdminLoginPage';
import AdminSignUpPage from './Components/adminSignUp/AdminSignUp';
import MainPage from './Pages/Main/MainPage/MainPage';
import ProductsPageMain from './Pages/Main/ProductsMain/ProductsMain';
import ContactMain from './Pages/Main/M-Contact/ContactMain';
import OrdersUser from './Pages/Main/OrdersUserPage/OrdersUser';
import AdminHomePage from './Pages/Admin/MainPage/MainPage';
import AdminProductPage from './Pages/Admin/ProductPage.js/AdminProductPage';
import OrdersPage from './Pages/Admin/OrdersPage/OrdersPage';
import StockPage from './Pages/Admin/StockPage/StockPage';
import AddProducts from './Pages/Admin/StockPage/AddProducts/AddProducts';
import UpdateProducts from './Pages/Admin/StockPage/UpdateProducts/UpdateProducts';
import ProductLand from './Pages/Landing/ProductPageLand/ProductLand';
import CartPage from './Pages/Main/CartPage/CartMain';



function App() {
  const dispatch=useDispatch()


  useEffect(()=>{
    if(localStorage.getItem("email-admin")){
      dispatch(fetchStock())
      dispatch(fetchAllOrders())
    }
    else if(localStorage.getItem("email")){
      dispatch(fetchProducts()) 
      dispatch(fetchOrders(localStorage.getItem("email")))
      dispatch(fetchCart(localStorage.getItem("email")))
      console.log(localStorage.getItem("email"))
    }
  
  },[])

  // const { openCom, setOpenCom, openLand, setOpenLand } =
  //   useContext(ShineContext);
  return (
    <div className="App">
     
      <Switch>
{/* <<<<<<<<<<<<<<<<<<<<< Landing Page >>>>>>>>>>>>>>>>>>>>>>> */}     
        <Route exact path="/">
        <LandingPage>
        
        </LandingPage>
        </Route>

       
{/* <<<<<<<<<<<<<<<<<<<<< User Auth Pages >>>>>>>>>>>>>>>>>>>>>>> */}
        <Route path="/login">
          <LogInPage></LogInPage>
        </Route>

        <Route path="/signUp">
          <SignUpPage></SignUpPage>
        </Route>

{/* <<<<<<<<<<<<<<<<<<<<< Admin Auth Pages >>>>>>>>>>>>>>>>>>>>>>> */}
        <Route path="/adminLogin">
          <AdminLogInPage></AdminLogInPage>
        </Route>

        <Route path="/adminSignUp">
          <AdminSignUpPage></AdminSignUpPage>
        </Route>
{/* <<<<<<<<<<<<<<<<<<<<< Landing Pages >>>>>>>>>>>>>>>>>>>>>>> */}
        <Route path="/productsLand">
         <ProductLand></ProductLand>
        </Route>
{/* <<<<<<<<<<<<<<<<<<<<< Main Pages >>>>>>>>>>>>>>>>>>>>>>> */}
        <Route path="/main">
          <MainPage></MainPage>
        </Route>

        <Route path="/productsMain">
          <ProductsPageMain></ProductsPageMain>
        </Route>

        <Route path="/contactMain">
          <ContactMain></ContactMain>
        </Route>

       
        <Route path="/ordersUser">
          <OrdersUser></OrdersUser>
        </Route>

        <Route path="/cart">
          <CartPage></CartPage>
        </Route>

      

        

{/* <<<<<<<<<<<<<<<<<<<<< Admin Pages >>>>>>>>>>>>>>>>>>>>>>> */}
        <Route path="/adminPage">
        <AdminHomePage></AdminHomePage>
        </Route>

        <Route path="/adminProduct">
        <AdminProductPage></AdminProductPage>
        </Route>

        <Route path="/orders">
       <OrdersPage></OrdersPage>
        </Route>
        
        <Route path="/stock">
        <StockPage></StockPage>
        </Route>

        

        



        <Route path="/addProducts">
          <AddProducts></AddProducts>
        </Route>

        <Route path="/updateProducts/:id">
          <UpdateProducts></UpdateProducts>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
