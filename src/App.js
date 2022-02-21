import "./App.css";
import Searchbar from "./Searchbar";
import Heading from "./Heading";
import Content from "./Content";
import data from "./data";
function App() {
  return (
  <>
    <Heading></Heading>
    <Searchbar ></Searchbar>
    {
    data.map(object=>{
      return <Content {...object}/>
    })
    }
  </>

    );
}

export default App;
