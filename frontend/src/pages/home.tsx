import { Link } from "react-router-dom";
import Productcard from "../components/product-card";
import macBookimage from "../assets/mac.jpg";

const Home = () => {
  const addToCartHandler = () => {};

  return (
    <div className="home">
      <section></section>

      <h1>
        Latest Products
        <Link to="/search" className="findmore">
          More
        </Link>
      </h1>

      <main>
        <Productcard
          productId="adasdad"
          name="MacBook"
          price={6543123}
          stock={435}
          handler={addToCartHandler}
          photo={macBookimage}
        ></Productcard>
      </main>
    </div>
  );
};

export default Home;
