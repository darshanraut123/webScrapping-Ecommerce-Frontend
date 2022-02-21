import {useState} from "react";
function Searchbar({addProduct,fetchProducts}) {
  const [inputQuery,setInputQuery] = useState("");

  function handleClick(){
    if(inputQuery!=="")
    addProduct(inputQuery);
  }

  function handleInputChange(event){
    setInputQuery(event.target.value)
    if(inputQuery=="")
    fetchProducts();
  }
  return (
    <div className="container-fluid ">
      <div className="row mt-3">
        <div className="col-2"></div>
        <div className="col-8">
          <div className="input-group">
            <input
              type="search"
              className="form-control rounded"
              aria-label="Search"
              aria-describedby="search-addon"
              value={inputQuery}
              onChange={(event)=>handleInputChange(event)}
              placeholder="Search for any mobile phone"
            />
            <button type="button" className="btn btn-outline-primary" onClick={()=>handleClick()}>
              search
            </button>
          </div>
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
}

export default Searchbar;
