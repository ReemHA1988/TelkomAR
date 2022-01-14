import data from "./data";
import "../style/Shop.css";

const Shop = () => {
  return (
    <>
      <div>
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {data.products.map((product) => (
            <div className="col">
              <div key={product._id} className="card h-100 productA">
                <a className="productA" href={`/product/${product._id}`}>
                  <img
                    className="card-img-top"
                    src={product.image}
                    alt={product.name}
                  />
                </a>
                <div className="card-body">
                  <a href={`/product/${product._id}`}>
                    <h2>{product.name}</h2>
                  </a>
                  <div className="price">{product.price}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Shop;
