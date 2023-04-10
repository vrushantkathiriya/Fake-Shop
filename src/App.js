import './css/App.css'   
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from "./containers/Header";
import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail"
function App() {
  return ( 
    <div className="App">
     <BrowserRouter>
         <Header/>
      <Routes>
         <Route path="/" element={<ProductListing/>} />
         <Route path="/product/:productId" element={<ProductDetail/>} />
         <Route>404 Page Not Found</Route>
      </Routes>
      </BrowserRouter>   
    </div>
   );
}

export default App;