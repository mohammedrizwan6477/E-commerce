import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import Products from "./Components/Products";
import AddProducts from "./Components/AddProducts";
import UpdateProducts from "./Components/UpdateProducts";
import Profile from "./Components/Profile";
import SingUp from "./SingUp";
import Footer from "./Components/Footer";
import PrivateComponent from "./Components/PrivateComponent";
import Login from "./Login";
import ProductDetails from "./Components/ProductDetails";

function App() {
  // const [productsrh, setProductSrh] = useState([]);
  // const handleSearch = async (e) => {
  //   const searchQuery = e.target.value;
  //   const result = await axios.get(
  //     `http://localhost:5000/search/${searchQuery}`
  //   );
  //   setProductSrh(result);
  // };

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route element={<PrivateComponent />}>
            <Route path="/add" element={<AddProducts />} />
            <Route path="/update/:id" element={<UpdateProducts />} />
            <Route path="/showProduct/:id" element={<ProductDetails />} />
            <Route path="/userProfile/:id" element={<Profile />} />
          </Route>
          <Route path="/signup" element={<SingUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
