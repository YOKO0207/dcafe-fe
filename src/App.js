import '../src/styles/reset.css'
import styled from 'styled-components';
import media from "styled-media-query";
import {Link} from 'react-router-dom';
import { Provider } from 'react-redux';
import { BrowserRouter,Switch,Redirect,Route} from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import store from './stores/store/index';
import Top from './pages/statics/Top';
import Login from './pages/auth/Login';
import RegisterUser from './pages/auth/RegisterUser';
import All from './pages/orders/menus/All';
import CategoryItems from './pages/orders/menus/CategoryItems';
import Cart from './pages/orders/Cart';
import MenuItem from './pages/orders/MenuItem';
import Complete from './pages/orders/Complete';
import EditPost from './pages/posts/EditPost';
import RegisterPost from './pages/posts/RegisterPost';
import EditProduct from './pages/products/EditProduct';
import RegisterProduct from './pages/products/RegisterProduct';
import Sorry from './pages/statics/Sorry';
import Test from './pages/statics/Test';
import Header from './components/groups/bars/Header';
import Footer from './components/groups/bars/Footer';
import Maintenance from './pages/statics/Maintenance';


function App() {
  return (
      <BODY>
        <div className="App">
          <Header/>
          
          <StyledContainer autoClose={8000} position={toast.POSITION.BOTTOM_CENTER}/>
          <BrowserRouter>
          <Link to={"/"}>Top</Link>
            <Switch>
              <Route exact path={"/"} component={Top}/>
              {/* auth */}
              <Route exact path={"/auth/login"} component={Login}/>
              <Route exact path={"/auth/register_user"} component={RegisterUser}/>
              {/* orders/menus */}
              <Route exact path={"/orders/menus/all"} component={All}/>
              <Route exact path={"/orders/menus/:categoryId"} component={CategoryItems}/>
              {/* orders */}
              <Route exact path={"/orders/cart"} component={Cart}/>
              <Route exact path={"/orders/complete"} component={Complete}/>
              <Route exact path={"/orders/menu_item/:menuItemId"} component={MenuItem}/>
              {/* posts */}
              <Route exact path={"/posts/edit_post"} component={EditPost}/>
              <Route exact path={"/posts/register_post"} component={RegisterPost}/>
              {/* product */}
              <Route exact path={"/posts/edit_product"} component={EditProduct}/>
              <Route exact path={"/posts/register_product"} component={RegisterProduct}/>
              {/* statics */}
              <Route exact path={"/statics/maintenance"} component={Maintenance}/>
              <Route exact path={"/statics/sorry"} component={Sorry}/>
              <Route exact path={"/statics/Test"} component={Test}/>
            </Switch>
          </BrowserRouter>
          {/* <Footer/> */}
        </div>
      </BODY>
  );
}

export default App;

const BODY = styled.div`
  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    margin-top:55px ;
  `}

  ${media.between("medium", "large")`
    /* screen width is between 768px (medium) and 1170px (large) */
    margin-top:70px ;
  `}

  ${media.greaterThan("large")`
    /* screen width is greater than 1170px (large) */
    margin-top:85px ;
  `}
  font-family: Baskerville,'Baskerville Old Face','Hoefler Text', Garamond,'New Roman',serif;
  letter-spacing: 2px;
`

const StyledContainer = styled(ToastContainer).attrs({
  // custom props
})`
  .Toastify__toast-body {
    font-family: Baskerville,'Baskerville Old Face','Hoefler Text', Garamond,'New Roman',serif;
    color:black;
    font-size:20px;
  }
  .Toastify__progress-bar {
  }
  

  
`;
