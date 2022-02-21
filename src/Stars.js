import { useState, useEffect } from "react";

function Stars({ ratings }) {
  const [starData, setStarData] = useState([null, null, null, null, null]);

  useEffect(() => {
    getStars();
  },[]);

  function getStars() {
    let starArray = starData;
    for (let index = 0; index < 5; index++) {
      if (index < ratings) starArray[index] = "checked";
    }
    setStarData([...starArray]);
  }
  
  return (
    <>
      {starData.map((strObj) => (
        <span className={`fa fa-star ${strObj}`}></span>
      ))}
    </>
  );
}

export default Stars;
