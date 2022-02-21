
import "./App.css";
import Searchbar from "./Searchbar";
import {useState} from "react";
import Heading from "./Heading";
import Content from "./Content";
import { useEffect } from "react";
import axios from 'axios';

function App() {
  const [products,setProducts] = useState([]);

  useEffect(()=>{
    fetchProducts();
  },[]);

  async function fetchProducts(){
    let productData = await axios.get("https://webscrappingecommerce.herokuapp.com/");
    setProducts(productData.data.reverse());
  }
  async function fetchOneProduct(query){
    let productData = await axios.get("https://webscrappingecommerce.herokuapp.com/");
    let temp = productData.data.filter(res=>res.title.toLowerCase().includes(query));
    setProducts(temp);
  }
  async function addProduct(query){
    let productData = await axios.post("https://webscrappingecommerce.herokuapp.com/",{query})
    if(productData.data.response==="present")
        fetchOneProduct(query)
    else{
      fetchProducts();
    }
  }

  return (
  <>
    <Heading></Heading>
    <Searchbar addProduct={addProduct} fetchProducts={fetchProducts}></Searchbar>
    {
    products.map(object=>{
      return <Content key={object.title} {...object}/>
    })
    }
  </>

    );
}

export default App;
