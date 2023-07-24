import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
// pages
import { Cart, Category, Home } from "./pages/index";
// components
import { Provider } from 'react-redux';
import Footer from "./components/Footer/Footer";
import Navbar from './components/Navbar/Navbar';
import store from "./store/store";

function App() {
  return (
    <div className="App">
      <Provider store = {store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path = "/" element = {<Home />} />
            <Route path = "/category/:name" element = {<Category />} />
            <Route path = "/cart" element = {<Cart />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
