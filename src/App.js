import './App.css';
import Header from './containers/header';
import {   BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductListing from './containers/product-listing';
import ProductDetail from './containers/product-details';

function App() {
  return (
    <div className="App">
    <Router>
    <Header/>
    <Routes>
    <Route path="/"  element={<ProductListing />}/>
    <Route path="/product/:productId"  element={<ProductDetail />}/>
    <Route>404 Not Found </Route>
    </Routes>
    </Router>
      
    </div>
  );
}

export default App;
