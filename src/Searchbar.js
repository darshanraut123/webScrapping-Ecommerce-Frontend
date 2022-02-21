import { react } from "react";

function Searchbar() {
  return (
    <div className="container-fluid ">
      <div className="row mt-3">
        <div className="col-2"></div>
        <div className="col-8">
          <div class="input-group">
            <input
              type="search"
              className="form-control rounded"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
            />
            <button type="button" class="btn btn-outline-primary">
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
