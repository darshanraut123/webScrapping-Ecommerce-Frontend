import Stars from "./Stars";

function Banner(props) {
    return (
    <>
      <div className="price-column">
        <div className="price-header">
          <del className="del-price">
            <div className="dollar-sign">₹</div>
            {props.banner.price}
          </del>
          <div className="price">
            <div className="dollar-sign">₹</div>
            {props.banner.offerPrice}
          </div>
          <div className="plan-name">{props.banner.site}</div>
        </div>
        <div className="divider"></div>
        <div className="stars">
          <Stars ratings={props.banner.rating} />
        </div>
        <div className="feature">
          <img className="prod_image" alt="Temp" src={props.banner.image}></img>
        </div>
      </div>
    </>
  );
}

export default Banner;
